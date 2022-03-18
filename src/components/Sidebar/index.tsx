import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, Link, Stack, Text, useBreakpointValue} from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { SideBarNav } from "./SidebarNav";
 
export function Sidebar(){

    const{isOpen, onClose} = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if(isDrawerSidebar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                            <DrawerHeader>Navegação</DrawerHeader>
                            <DrawerBody>
                                <SideBarNav />
                            </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer> 
        )
    }

    return (
        <Box as="aside" w="150px" mr="8">
            <SideBarNav />
        </Box>
    );
}