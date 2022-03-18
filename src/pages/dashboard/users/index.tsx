import { Box, Flex, Heading, Button, Icon, Text, Table, Thead, Th, Tr, Td, Checkbox, Tbody, useBreakpointValue, Spinner, Link } from '@chakra-ui/react'
import NextLink from 'next/link';
import { useState } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../../components/Header';
import { Pagination } from '../../../components/Pagination';
import { Sidebar } from '../../../components/Sidebar';
import { api } from '../../../services/api';
import { useUsers } from '../../../services/hooks/useUsers';
import { queryClient } from '../../../services/queryClient';

export default function UserList(){
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page)

    console.log(page)

    const isWidVersion = useBreakpointValue({
        base:false,
        lg: true,
    })

    async function hadlePrefetchUser(userId: number){
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data;
        },{
            staleTime: 1000 * 60 * 10 //10
        })
    }


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

                                 <NextLink href="/dashboard/users/create" passHref>
                                    <Button as="a" 
                                            size="sm" 
                                            fontSize="sm"
                                            colorScheme="pink"
                                            leftIcon={<Icon as={RiAddLine} />}>Criar Novo</Button>
                                </NextLink>
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
                            {data.users.map( u => {
                                return (
                                    <Tr key={u.id}>
                                        <Td px={["4","4","6"]}>
                                            <Checkbox colorScheme="pink"/> 
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Link color='purple.400' onMouseEnter={()=> hadlePrefetchUser(u.id)  }>
                                                    <Text fontWeight="bold">
                                                        {u.name}
                                                    </Text>
                                                </Link>
                                                <Text fontSize="sm" color="gray.300">
                                                    {u.email}
                                                </Text>
                                            </Box>
                                        </Td>
                                        {isWidVersion && <Td>{u.creatAt}</Td>}
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

                    <Pagination totalCountRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
                        </>
                  )}

                </Box>
            </Flex>
        </Box>
    );
}