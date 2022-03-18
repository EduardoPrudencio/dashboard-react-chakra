import { Box, Flex, Heading, Button, Icon, Text, Table, Thead, Th, Tr, Td, Checkbox, Tbody, useBreakpointValue, Spinner } from '@chakra-ui/react'
import Link from 'next/link';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../../components/Header';
import { Pagination } from '../../../components/Pagination';
import { Sidebar } from '../../../components/Sidebar';
import { api } from '../../../services/api';

export default function UserList(){

    const { data, isLoading, isFetching, error } = useQuery('users', async () => {
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
    }, {
        staleTime: 1000 * 5, //5 segundos
    })

    const isWidVersion = useBreakpointValue({
        base:false,
        lg: true,
    })


    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" 
                                 fontWeight="normal" 
                                 fontFamily="Roboto">
                                     Usuários
                                     {!isLoading && isFetching && 
                                        <Spinner size="sm" color="gray.500" ml="4" />
                                     }
                                 </Heading>

                                 <Link href="/dashboard/users/create" passHref>
                                    <Button as="a" 
                                            size="sm" 
                                            fontSize="sm"
                                            colorScheme="pink"
                                            leftIcon={<Icon as={RiAddLine} />}>Criar Novo</Button>
                                </Link>
                    </Flex>

                  { isLoading ? (
                      <Flex justifyContent="center">
                          <Spinner />
                      </Flex>
                    ): error ? (
                        <Flex justifyContent="center">
                            <Text>Falha ao obter dados do usuário</Text>
                        </Flex>           
                    ):(
                        <>
                              <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8">
                                   <Checkbox colorScheme="pink"/> 
                                </Th>
                                <Th>Usuário</Th>
                                {isWidVersion && <Th>Data de cadastro</Th>} 
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map( u => {
                                return (
                                    <Tr key={u.id}>
                                        <Td px={["4","4","6"]}>
                                            <Checkbox colorScheme="pink"/> 
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">
                                                    {u.name}
                                                </Text>
                                                <Text fontSize="sm" color="gray.300">
                                                    {u.email}
                                                </Text>
                                            </Box>
                                        </Td>
                                        {isWidVersion && <Td>{u.createdAt}</Td>}
                                        <Td>
                                            <Button as="a" 
                                            size="sm" 
                                            fontSize="sm"
                                            colorScheme="purple"
                                            leftIcon={<Icon as={RiPencilLine} />}>Editar</Button>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>

                    <Pagination />
                        </>
                  )}

                </Box>
            </Flex>
        </Box>
    );
}