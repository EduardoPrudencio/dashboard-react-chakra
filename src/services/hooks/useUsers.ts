import { useQuery } from "react-query";
import { api } from "../api";
import {GetUsersResponse} from '../Modesl'

export async function getUsers(page: number): Promise<GetUsersResponse> {
    const { data, headers } = await api.get('users', {
        params: {
            page,
        }
    })

    const totalCount = Number(headers['x-total-count'])
            
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

    return { users, totalCount} ;
}

export function useUsers(page: number) {
    return  useQuery(['users', page], () => getUsers(page), {
            staleTime: 1000 * 5, //5 segundos
        })   
}