import { Button, Flex, Stack, } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useRef } from 'react'
import {Input} from '../components/Form/Input' 


export default function SognIn() {

  const loginRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
 
  function handleSubmit(event) {
    event.preventDefault();

    alert(loginRef.current.value + ' e ' + passwordRef.current.value)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justifyContent="center">
      <Flex as="form" 
            width="100%"
            maxWidth={360}
            bg="gray.800"
            p="8"
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit}
            >
              <Stack spacing={4}>
                <Input name='Login' type='text' label='Login' ref={loginRef}/>
                <Input name='password' type='password' label='Password' ref={passwordRef} />
             </Stack>
             <Button type="submit" 
                     mt="6" 
                     colorScheme="pink"
                     size="lg" 
             >Entrar</Button> 
      </Flex>
    </Flex>
  )
}
