import React from "react";
import { Box, Flex, Text, Button, Spacer, InputGroup, InputLeftElement, IconButton, Input, InputRightElement, Heading, Link, GridItem, Grid } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import price1 from "../../assets/img/price1.jpg"
import price2 from "../../assets/img/price2.jpg"
import price3 from "../../assets/img/price3.jpg"


export default function Prices() {
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
            >
                <Flex flexDirection={{ md: "row", xs: "column" }}>
                    <Flex flexDirection={"column"}>
                        <Heading>
                            Move to What <br/> Move You
                        </Heading>
                        <Text fontWeight={"normal"} color={mainText} w={"75%"}>
                           Keep calm & travel on
                        </Text>
                        <Spacer />
                    </Flex>
                </Flex>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={20} textAlign={"center"} color={"black"} mt={7} justifyContent={"center"} alignItems={"center"} >
                    <Box>
                    <GridItem w='100%' h={300} p={9} borderRadius={"3xl"} bgImage={price1} bgSize={"cover"}/>
                    <Text fontWeight={"bold"} fontSize={"18px"} color="blue.600" mt={5}> Enjoy the great cold </Text>
                    <Button borderRadius={20} colorScheme="blue" size={"sm"} mt={2} >$6000 property</Button>
                    </Box>
                    <Box>
                    <GridItem w='100%' h={300} p={9} borderRadius={"3xl"} bgImage={price2} bgSize={"cover"}/>
                    <Text fontWeight={"bold"} fontSize={"18px"} color="blue.600" mt={5}> Enjoy the great cold </Text>
                    <Button borderRadius={20} colorScheme="blue" size={"sm"} mt={2} >$6000 property</Button>
                    </Box>
                    <Box>
                    <GridItem w='100%' h={300} p={9} borderRadius={"3xl"} bgImage={price3} bgSize={"cover"}/>
                    <Text fontWeight={"bold"} fontSize={"18px"} color="blue.600" mt={5}> Enjoy the great cold </Text>
                    <Button borderRadius={20} colorScheme="blue" size={"sm"} mt={2} >$6000 property</Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}