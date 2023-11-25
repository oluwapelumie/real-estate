import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../assets/img/logo.png';
import Logo1 from '../../assets/img/logo-1.png';
import Logo2 from '../../assets/img/logo-2.png';
import Logo3 from '../../assets/img/logo-3.png';
import Logo4 from '../../assets/img/logo-4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Box, Image } from '@chakra-ui/react';

export default function Partners() {
  return (
    <Box mt={6} p={6}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        reverseDirection={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        <SwiperSlide><Image src={Logo} width={"50%"} /></SwiperSlide>
        <SwiperSlide><Image src={Logo1} width={"50%"} /></SwiperSlide>
        <SwiperSlide><Image src={Logo2} width={"50%"} /></SwiperSlide>
        <SwiperSlide><Image src={Logo3} width={"50%"} /></SwiperSlide>
        <SwiperSlide><Image src={Logo4} width={"50%"} /></SwiperSlide>
      </Swiper>
    </Box>
  );
}
