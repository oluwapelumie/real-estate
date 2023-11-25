import React from "react";
import { Box, Flex, Text, Button, Spacer, InputGroup, InputLeftElement, IconButton, Input, InputRightElement, Heading, Link, GridItem, Grid } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
export default function Footer() {
    // Chakra Color Mode
    let inputBg = "#fff";
    let mainText = "gray.400";
    let navbarIcon = "white";
    let searchIcon = "blue";
    return (
        <>
            <Box
                w="full"
                h="full"
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
            >
                <Flex flexDirection={{ md: "row", xs: "column" }} justifyContent={"center"} alignItems={"center"} gap={6} py={4}>
                    <Link> Home </Link>
                    <Link> About </Link>
                    <Link> Agents </Link>
                    <Link> Contact </Link>
   </Flex>
            </Box>
        </>
    )
}