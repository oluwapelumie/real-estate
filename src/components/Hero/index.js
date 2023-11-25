import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Button, Spacer, InputGroup, InputLeftElement, IconButton, Input, InputRightElement } from "@chakra-ui/react";
import medusa from '../../assets/img/hero.jpg';
export default function Hero() {
    // Chakra Color Mode
    let inputBg = "#fff";
    let mainText = "gray.400";
    let navbarIcon = "white";
    let searchIcon = "blue";
    return (
        <>
            <Box
                borderRadius={40}
                bgImage={medusa}
                bgSize='cover'
                bgPosition={"center"}
                w="full"
                h="full"
            >
                <Flex flexDirection={{ xs: 'column', md: 'row' }} w='100%' h='100%'>
                    <Flex flexDirection='column' h='100%' p={8} w={550} lineHeight='1.6'>
                        <Text fontSize='58px' color='#fff' fontWeight='semibold' mb='18px'>
                            Let’s  find a home that’s perfect <br />for you
                        </Text>
                        <Text fontSize='20px' color='gray.300' fontWeight='normal' mb='auto'>
                            Search confidently with your trusted
                            source for home for sale or rent
                        </Text>
                        <Spacer />
                        <Flex align='center'>
                            <InputGroup
                                cursor='pointer'
                                bg={inputBg}
                                borderRadius='15px'
                                borderColor='rgba(226, 232, 240, 0.3)'
                                mt={5}
                                w={{
                                    sm: "128px",
                                    md: "300px",
                                }}
                                me={{ sm: "auto", md: "20px" }}>
                                <InputRightElement
                                    children={
                                        <IconButton
                                            bg='inherit'
                                            borderRadius='inherit'
                                            _hover='none'
                                            _active={{
                                                bg: "inherit",
                                                transform: "none",
                                                borderColor: "transparent",
                                            }}
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            icon={
                                                <SearchIcon color={searchIcon} w='15px' h='15px' />
                                            }></IconButton>
                                    }
                                />
                                <Input
                                    fontSize='xs'
                                    py='11px'
                                    color={mainText}
                                    placeholder='Type here...'
                                    borderRadius='inherit'
                                />
                            </InputGroup>
                        </Flex>
                    </Flex>
                </Flex>

            </Box>
        </>
    )
}