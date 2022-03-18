import { Box, Flex, Heading, Button, Icon, Text, Table, Thead, Th, Tr, Td, Checkbox, Tbody, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../../components/Header';
import { Pagination } from '../../../components/Pagination';
import { Sidebar } from '../../../components/Sidebar';

export default function UserList(){

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
                                 fontFamily="Roboto">Usuários</Heading>
                        <Button as="a" 
                                size="sm" 
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}>Criar Novo</Button>
                    </Flex>

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
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink"/> 
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Eduardo Prudencio
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            eduardolobo.esp@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                {isWidVersion && <Td> 23 de Fevereiro de 2019</Td>}
                                <Td>
                                    <Button as="a" 
                                    size="sm" 
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} />}>Editar</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink"/> 
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Eduardo Prudencio
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            eduardolobo.esp@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                {isWidVersion && <Td> 23 de Fevereiro de 2019</Td>} 
                                <Td>
                                    <Button as="a" 
                                    size="sm" 
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} />}>Editar</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink"/> 
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Eduardo Prudencio
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            eduardolobo.esp@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                {isWidVersion && <Td> 23 de Fevereiro de 2019</Td>} 
                                <Td>
                                    <Button as="a" 
                                    size="sm" 
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} />}>Editar</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />

                </Box>
            </Flex>
        </Box>
    );
}