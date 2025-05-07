export interface ISchoolModel {
    _id: string;
    name: string;
    region: string;
    latitude: number;
    longitude: number;
    studentsCount: number;
    classroomCount: number;
    needs: string[];
    description: string;
    userId: string;
    commune: string;
    images: string[];
    createdAt?: Date;
    updatedAt?: Date;
    validated: boolean;
    

}



