import Link,{ LinkProps} from 'next/link'
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shoudMatchExactHref?: boolean;
}

export function ActiveLink({children, shoudMatchExactHref = false, ...rest}: ActiveLinkProps){

const {asPath} = useRouter()

    let isActive =  false;

    if ((asPath === rest.href || asPath === rest.as)) { 
        isActive = true;
    }

    console.log('asPath ',asPath)
    console.log('rest.href ',rest.href)
    console.log('rest.as ',rest.as)
    
    // if (!shoudMatchExactHref && (asPath.startsWith(String(rest.href)) ||
    //                             asPath.startsWith(String(rest.as)))) {
    //                                 isActive = true
    // }

    return (
        <Link {...rest} >
             {cloneElement(children, {
                 color: isActive ? 'pink' : 'gray.500'
             })}   
        </Link>
    )
}