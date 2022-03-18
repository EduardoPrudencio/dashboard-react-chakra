import { Button } from '@chakra-ui/button'

interface PaginationItemProps {
    isCurrent?: Boolean;
    number: number;
    onPageChange: (page: number) => void; 
}

export function PaginationItem({isCurrent = false, number, onPageChange} :PaginationItemProps){
    
    if(isCurrent) {
        return (
            <Button size="sm"
                    fontSize="xs"
                    width="4"
                    bg="pink"
                    _disabled={{
                        bg: 'pink',
                        cursor: 'default',
                    }}
            >
                {number}
            </Button>
        )
    }
    return (
        <Button size="sm"
                fontSize="xs"
                width="4"
                bg="gray.700"
                _hover={{
                    bg: 'gray.500'
                }}
                onClick={()=> onPageChange(number)}
        >
            {number}
        </Button>
    )
    
}