import { useRouter } from "next/router";

interface OnlyUserLoggedInProps {
    hole?: string;
}

export function OnlyUserLoggedIn({hole}: OnlyUserLoggedInProps){
    const userLogedIn = true;
    const reouter = useRouter()

    if(!userLogedIn) reouter.push('/')   
}