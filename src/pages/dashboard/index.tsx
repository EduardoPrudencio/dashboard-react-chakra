import { Header } from "../../components/Header";
import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Sidebar } from "../../components/Sidebar";
import { theme } from "@chakra-ui/react";
import {OnlyUserLoggedIn} from '../../components/OnlyLogged'

const Chart = dynamic(() => import('react-apexcharts'),{ssr: false} )

const options = {
   chart: {
        toolbar: {show: false,}
    },
    foreColor: theme.colors.gray[500],
    grid: {show: false,},
    tooltip: {enabled: false,},
    dataLabels: {enabled: false},
    xaxis: {
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '18-mar',
            '19-mar',
            '20-mar',
            '21-mar',
            '22-mar',
            '23-mar',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradiente: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
   
}

const series = [
    {name: "Series 1", data: [10,13,18,15,22,13 ]}
]

export default function Dashboard(){
    
    OnlyUserLoggedIn();
    
    return(

        <Flex direction="column" h="100vh">
            
            <Header />

            <Flex w="100%" 
                  my="6" 
                  maxWidth={1480} 
                  mx="auto" 
                  px="6">
                <Sidebar />
                <SimpleGrid flex="1" 
                            gap="4" 
                            minChildWidth="320px"
                            alignItems="flex-start"
                            >
                    <Box p={["6", "8"]}
                         bg="gray.800"
                         borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Inscritos na semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box p={["6", "8"]}
                         bg="gray.800"
                         borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>                   
                    
                </SimpleGrid>
                
            </Flex>

        </Flex>

    )
}