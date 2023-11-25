import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Box } from "@chakra-ui/react";
import Partners from "./components/Partners";
import Service from "./components/Service";
import Prices from "./components/Prices";
import Join from "./components/Join";
import Footer from "./components/Footer";
  
  export default function AdminNavbar(props) {
    return (
<>
<Box px={{ base: 4, md: 12 }} >
<Navbar/>
<Hero/>
<Partners/>
<Service/>
<Prices/>
</Box>
<Join/>
<Footer/>
</>
    );
  }