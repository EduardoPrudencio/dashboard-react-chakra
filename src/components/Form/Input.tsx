import { FormLabel, Input as ChakraInput, FormControl, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

const InputBase:  ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest}: InputProps, ref) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name} >{label}</FormLabel>}
                  <ChakraInput name={name}
                        id={name}  
                        type="email"
                        focusBorderColor="pink.500"
                        bgColor="gray.900"
                        variant="filled"
                        _hover={{
                          bgColor: 'gray.900'
                        }}
                        size= "lg"
                        ref={ref}
                        {...rest}
                  />  
                </FormControl>
    )
}

export const Input = forwardRef(InputBase)