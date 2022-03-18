import { ServerConfig } from "miragejs/server";

export type User = {
    id :string;
    name :string;
    email :string;
    creatAt :string;
}

export type GetUsersResponse = {
    totalCount: number;
    users: User[];
}

export type CreateUserFormData = {
    id: string;
    name: string;
    email: string;
    password: string;
}