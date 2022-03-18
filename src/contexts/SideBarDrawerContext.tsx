import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect} from 'react'

interface SidebarDrawerProps {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SideBarDrawerProvider({ children } :SidebarDrawerProps ){

    const disclosure = useDisclosure();
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    },[disclosure, router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)