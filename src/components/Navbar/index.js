import {
    Box,
    Stack,
    Heading,
    Flex,
    Link,
    Button,
    Hide,
  } from "@chakra-ui/react";
  import React from "react";
  
  export default function Navbar() {
    return (
      <Flex
        transitionDelay='0s, 0s, 0s, 0s'
        transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
        transition-property='box-shadow, background-color, filter, border'
        transitionTimingFunction='linear, linear, linear, linear'
        alignItems={{ xs: "center", md:"center" }}
        display='flex'
        minH='75px'
        justifyContent={{ md: "center" }}
        pb='8px'
        px={{
          sm: "30px",
          md: "60px",
        }}
        pt='8px'
        w={{ xs: "100%", md: "100%" }}>
        <Flex
          w='100%'
          flexDirection={{
            sm: "column",
            md: "row",
          }}
          alignItems={{ xl: "center" }}>
          <Box mb={{ xs: "8px", md: "0px" }}>
            <Heading>
              Built-in
            </Heading>
          </Box>
          <Hide below="md">
          <Box ms='auto'>
            <Stack direction={'row'} >
              <Link>
                Home
              </Link>
              <Link>
                About
              </Link>
              <Link>
                Agents
              </Link>
              <Link>
              <Button size={"sm"} bgColor={"blue.500"} color={"white"}>
                Contact Us
                </Button>
              </Link>
            </Stack>
          </Box>
          </Hide>
        </Flex>
      </Flex>
    );
  }
  