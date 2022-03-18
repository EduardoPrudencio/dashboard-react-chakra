import {Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Input } from '../../../components/Form/Input'

import { Header } from '../../../components/Header'
import { Sidebar } from '../../../components/Sidebar'
import { api } from '../../../services/api'
import { CreateUserFormData } from '../../../services/Modesl'
import { queryClient } from '../../../services/queryClient'

export default function CreateUser(){

    const reouter = useRouter()

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date(),
            }    
        })

        return response.data.user;
    },{
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    });

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        // resolver: yupResolver(CreateUserFormData)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values); 
        reouter.push('/users')
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" 
                     flex="1" 
                     borderRadius={8} 
                     bg="gray.800" 
                     p={["6","8"]}
                     onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal" >
                        Criar Usuário
                    </Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="name" label="Nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/dashboard/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                           </Link>
                           <Button type="submit"  colorScheme="pink" >Salvar</Button>

                        </HStack>

                    </Flex> 

                </Box>
            </Flex>
        </Box>
    )
}