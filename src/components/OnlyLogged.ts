import { useRouter } from "next/router";

interface OnlyUserLoggedInProps {
    hole?: string;
}

export function OnlyUserLoggedIn(){
    const userLogedIn = true;
    const reouter = useRouter()

    if(!userLogedIn) reouter.push('/')   
}