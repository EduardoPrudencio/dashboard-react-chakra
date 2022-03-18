import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
    return (
            <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Eduardo Prudencio</Text>
                    <Text color="gray.300"
                        font-size='small'>
                            eduardolobo.esp@gmail.com
                        </Text>
                </Box>

                <Avatar size="md" name="Eduardo Prudencio" />
            </Flex>
    )
}