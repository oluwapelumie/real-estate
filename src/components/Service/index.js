import React from "react";
import { Box, Flex, Text, Button, Spacer, InputGroup, InputLeftElement, IconButton, Input, InputRightElement, Heading, Link, GridItem, Grid } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
export default function Service() {
    // Chakra Color Mode
    let inputBg = "#fff";
    let mainText = "gray.400";
    let navbarIcon = "white";
    let searchIcon = "blue";
    return (
        <>
            <Box
                py={7}
                w="full"
                h="full"
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
            >
                <Flex flexDirection={{ md: "row", xs: "column" }} justifyContent={"center"} alignItems={"center"}>
                    <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Heading>
                            How it works?
                        </Heading>
                        <Text fontWeight={"normal"} color={mainText} w={"75%"}>
                            Everything you need to know when you're looking to buy, rent, or sell - all in one place.
                        </Text>
                        <Spacer />
                    </Flex>
                </Flex>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} textAlign={"center"} color={"black"} mt={7} >
                    <GridItem w='100%' h='100%' p={9} borderRadius={"3xl"} >
                        <Flex flexDirection={"column"} textAlign={"center"} justifyContent={"center"} mt={10} mb={10}>
                            <Box>
                                <WarningIcon w={8} h={8} color="orange.300" mb={6} />
                            </Box>
                            <Text fontWeight={"bold"}>
                                Buyer Guilds
                            </Text>
                            <Link href="" mt={2}>
                                <Text fontWeight={"normal"} fontSize={10} color="blue">
                                    How to buy
                                </Text>
                            </Link>
                        </Flex>
                    </GridItem>
                    <GridItem w='100%' h='100%' p={9} borderRadius={"3xl"} >
                        <Flex flexDirection={"column"} textAlign={"center"} justifyContent={"center"} mt={10} mb={10}>
                            <Box>
                                <WarningIcon w={8} h={8} color="orange.300" mb={6} />
                            </Box>
                            <Text fontWeight={"bold"}>
                                Buyer Guilds
                            </Text>
                            <Link href="" mt={2}>
                                <Text fontWeight={"normal"} fontSize={10} color="blue">
                                    How to buy
                                </Text>
                            </Link>
                        </Flex>
                    </GridItem>
                    <GridItem w='100%' h='100%' p={9} borderRadius={"3xl"} >
                        <Flex flexDirection={"column"} textAlign={"center"} justifyContent={"center"} mt={10} mb={10}>
                            <Box>
                                <WarningIcon w={8} h={8} color="orange.300" mb={6} />
                            </Box>
                            <Text fontWeight={"bold"}>
                                Buyer Guilds
                            </Text>
                            <Link href="" mt={2}>
                                <Text fontWeight={"normal"} fontSize={10} color="blue">
                                    How to buy
                                </Text>
                            </Link>
                        </Flex>
                    </GridItem>
                </Grid>
                <Button size='md' colorScheme="blue">
                    See Full Guildlines
                </Button>
            </Box>
        </>
    )
}