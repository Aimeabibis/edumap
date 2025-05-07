import { Pencil, Plus, School, Trash2, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IUserModel } from "../model/usermodel";
import { ISchoolModel } from "../model/schoolmodel";
import Modal from "../components/modal";


export const Admin = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showSchoolModal, setShowSchoolModal] = useState(false);
  const [showValidateModal, setShowValidateModal] =
    useState<ISchoolModel | null>(null);

  const [editingUser, setEditingUser] = useState<IUserModel | null>(null);
  const [editingSchool, setEditingSchool] = useState<ISchoolModel | null>(null);

  const [schools, setSchools] = useState<ISchoolModel[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((err) => console.error("Erreur fetch:", err));
  }, [showValidateModal]);

  
  const handleEditUser = (user: IUserModel) => {
    setEditingUser(user);
    setShowUserModal(true);
  };
  const handleEditSchool = (school: ISchoolModel) => {
    setEditingSchool(school);
    setShowSchoolModal(true);
  };
  const fetchValidateSchool = async (school: ISchoolModel) => {
    const res = await fetch(
      `http://localhost:5000/api/schools/validate/${school._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    );
    setShowValidateModal(null);
  };
 

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const fetchSchools = async () => {
    const res = await fetch("http://localhost:5000/api/schools");
    const data = await res.json();
    setSchools(data);
  };

  const deleteUser = async (id: string) => {
    await fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  const deleteSchool = async (id: string) => {
    await fetch(`http://localhost:5000/api/schools/${id}`, {
      method: "DELETE",
    });
    fetchSchools();
  };

  useEffect(() => {
    fetchUsers();
    fetchSchools();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* USERS SECTION */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Utilisateurs</h2>
            <button
              onClick={() => setShowUserModal(true)}
              className="bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-2"
            >
              <Plus size={16} /> Ajouter
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            {users.length === 0 ? (
              <p>Aucun utilisateur.</p>
            ) : (
              <ul>
                {users.map((user) => (
                  <li
                    key={user._id}
                    className="flex justify-between py-2 border-b"
                  >
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-blue-600 hover:underline"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="text-red-600 hover:underline"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* SCHOOLS SECTION */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Écoles</h2>
            <button
              onClick={() => setShowSchoolModal(true)}
              className="bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-2"
            >
              <Plus size={16} /> Ajouter
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            {schools.length === 0 ? (
              <p>Aucune école.</p>
            ) : (
              <ul>
                {schools.map((school) => (
                  <li
                    key={school._id}
                    className="flex justify-between py-2 border-b"
                  >
                    <div>
                      <p className="font-medium">{school.name}</p>
                      <p className="text-sm text-gray-500">
                        {school.region} - {school.commune}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {!school.validated && (
                        <button
                          onClick={() => setShowValidateModal(school)}
                          className="text-white bg-green-700 px-3 py-1 rounded "
                        >
                          Valider l'école
                        </button>
                      )}

                      <button
                        onClick={() => handleEditSchool(school)}
                        className="text-blue-600 hover:underline"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => deleteSchool(school._id)}
                        className="text-red-600 hover:underline"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <Modal
          isOpen={showUserModal}
          onClose={() => {
            setShowUserModal(false);
            setEditingUser(null);
          }}
        >
          <h2 className="text-xl font-bold mb-4">
            {editingUser ? "Modifier" : "Ajouter"} un utilisateur
          </h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement)
                .value;
              const email = (
                form.elements.namedItem("email") as HTMLInputElement
              ).value;

              const payload = { name, email };

              if (editingUser) {
                await fetch(`/api/users/${editingUser._id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
              } else {
                await fetch("/api/users", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
              }

              setShowUserModal(false);
              setEditingUser(null);
              fetchUsers();
            }}
          >
            <input
              name="name"
              placeholder="Nom"
              defaultValue={editingUser?.name}
              className="input mb-2 w-full"
              required
            />
            <input
              name="email"
              placeholder="Email"
              defaultValue={editingUser?.email}
              className="input mb-2 w-full"
              required
            />
            <button
              className="btn bg-green-700 text-white px-4 py-2 rounded"
              type="submit"
            >
              Enregistrer
            </button>
          </form>
        </Modal>
        <Modal
          isOpen={showSchoolModal}
          onClose={() => {
            setShowSchoolModal(false);
            setEditingSchool(null);
          }}
        >
          <h2 className="text-xl font-bold mb-4">
            {editingSchool ? "Modifier" : "Ajouter"} une école
          </h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement)
                .value;
              const region = (
                form.elements.namedItem("region") as HTMLInputElement
              ).value;
              const commune = (
                form.elements.namedItem("commune") as HTMLInputElement
              ).value;

              const payload = { name, region, commune };

              if (editingSchool) {
                await fetch(`/api/schools/${editingSchool._id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
              } else {
                await fetch("/api/schools", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
              }

              setShowSchoolModal(false);
              setEditingSchool(null);
              fetchSchools();
            }}
          >
            <input
              name="name"
              placeholder="Nom école"
              defaultValue={editingSchool?.name}
              className="input mb-2 w-full"
              required
            />
            <input
              name="region"
              placeholder="Région"
              defaultValue={editingSchool?.region}
              className="input mb-2 w-full"
              required
            />
            <input
              name="commune"
              placeholder="Commune"
              defaultValue={editingSchool?.commune}
              className="input mb-4 w-full"
              required
            />
            <button
              className="btn bg-green-700 text-white px-4 py-2 rounded"
              type="submit"
            >
              Enregistrer
            </button>
          </form>
        </Modal>
        <Modal
          isOpen={showValidateModal ? true : false}
          onClose={() => {
            setShowValidateModal(null);
          }}
        >
          <h2 className="text-xl font-bold mb-4">
            Etes-vous sur de vouloir valider cette école ?
          </h2>
          <div className="w-full flex justify-center">
            <button
              onClick={() => {
                if (showValidateModal) {
                  fetchValidateSchool(showValidateModal); // Only call if not null
                }
              }}
              className="btn bg-green-700 text-white px-4 py-2 rounded mr-2"
            >
              Valider
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
