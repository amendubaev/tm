export interface IProject {
    id: number;
    title: string;
    slug: string;
    description: string;
    authorId: number;
    boards: IBoardCol[];
}

export interface IBoardCol {
    id: number;
    name: string;
    sort: number;
    tasks: ITask[];
}

export interface ITask {
    id: number;
    title: string;
    description: string;
    authorId: number;
    projectId: number;
    boardColId: number;
    createdAt: Date;
    updatedAt: Date;
    draggable: boolean;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    isGuest: boolean;
    male: number;
    phone: string;
    photo: string;
}

export interface IBoard {
    id: number;
    name: string;
    sort: number;
    projectId: number;
}

export interface IBoardCols {
    id: number;
    name: string;
    sort: number;
}