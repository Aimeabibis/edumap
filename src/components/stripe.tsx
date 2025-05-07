import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

interface StripeFormProps {
  schoolId: string;
}

export const StripeForm: React.FC<StripeFormProps> = ({ schoolId }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    if (!selectedCurrency || amount <= 0) {
      alert("Veuillez entrer un montant et une devise valides.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/paiement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount * 100, // montant en centimes
          currency: selectedCurrency,
          schoolId,
        }),
      });

      const data = await res.json();
      console.log("Réponse backend Stripe:", data);

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      console.log("Résultat du paiement Stripe:", result);
      

      if (result.error) {
        alert("Erreur de paiement : " + result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        alert(" Paiement réussi !");
      } else {
        alert("Le paiement n’a pas pu être confirmé.");
      }
    } catch (err) {
      console.error("Erreur lors du paiement:", err);
      alert("Erreur serveur. Vérifie la console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white rounded shadow z-50 fixed top-[30vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <h2 className="text-xl font-bold mb-4">Faire un don sécurisé</h2>

      <div className="mb-4 flex">
        <input
          type="number"
          placeholder="Montant à payer"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border mr-1 rounded-sm mb-4 w-1/2 h-[50px]"
          required
          min={1}
        />

        <select
          name="currency"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="ml-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-green-700 w-1/2 h-[50px]"
          required
        >
          <option value="">-- Devise --</option>
          <option value="eur">Euro (€)</option>
          <option value="usd">Dollar ($)</option>
          <option value="xof">Franc CFA (XOF)</option>
          <option value="chf">Franc Suisse (CHF)</option>
        </select>
      </div>

      <CardElement className="p-4 border rounded mb-4" />

      <button
        type="submit"
        disabled={loading || !stripe}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
      >
        {loading ? "Traitement..." : `Payer ${amount} ${selectedCurrency.toUpperCase()}`}
      </button>
    </form>
  );
};
