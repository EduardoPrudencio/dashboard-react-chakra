import { useQuery } from "react-query";
import { api } from "../api";
import {User} from '../Modesl'

export async function getUsers(): Promise<User[]> {
    const { data } = await api.get('users')
            
    const users =  data.users.map( u => {
        return {
            id: u.id,
            name: u.name,
            email: u.email,
            createdAt: new Date(u.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return users;
}

export function useUsers() {
    return  useQuery('users', getUsers, {
            staleTime: 1000 * 5, //5 segundos
        })   
}