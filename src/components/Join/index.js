import React from "react";
import { Box, Flex, Text, Button, Spacer, InputGroup, InputLeftElement, IconButton, Input, InputRightElement, Heading, Link, GridItem, Grid, Image, Show, Hide } from "@chakra-ui/react";
import house from "../../assets/img/house.png"


export default function Join() {
    // Chakra Color Mode
    let inputBg = "#fff";
    let mainText = "gray.400";
    let navbarIcon = "white";
    let searchIcon = "blue";
    return (
        <>
            <Box
                bg={"blue.600"}
                w="full"
                h="full"
            >
                <Flex flexDirection={{ md: "row", xs: "column" }}>
                    <Flex flexDirection={"column"} p={{md:"10", base:"5"}} >
                        <Text color={"white"} fontSize={"60px"} fontWeight={"bold"}>
                            Find your best<br /> Smart Real Estate
                        </Text>
                        <Box mt={10}>
                        <Button bg={"white"} size={"md"} color={mainText} borderRadius={"3xl"}>
                            Join now
                        </Button>
                        </Box>
                    </Flex>
                    <Spacer />
                    <Hide below='md'>
                    <Flex>
                        <Image src={house} alt="" />
                    </Flex>
                    </Hide>
                </Flex>
            </Box>
        </>
    )
}