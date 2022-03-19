import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="Geral">
                <NavLink href="/dashboard" icon={RiDashboardLine}>
                    Dashboard
                </NavLink>
                <NavLink href="/dashboard/users" icon={RiContactsLine}>
                    Usuários
                </NavLink>
            </NavSection>

            <NavSection title="Automação">
                <NavLink href="" icon={RiInputMethodLine}>
                    Formulários
                </NavLink>
                <NavLink href="" icon={RiGitMergeLine}>
                    Automação
                </NavLink>
            </NavSection>
        </Stack>
    )
}