import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryIcon } from "../components/CategoryIcon";
import { Header } from "../components/Header";
import styles from "./home.module.scss";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Flex as="div" w="100%" bgImage="url(/images/night-sky.jpg)">
        <Flex
          direction="row"
          w="100%"
          align="center"
          justify="space-between"
          maxW={1160}
          mx="auto"
          py="10"
        >
          <Box maxW="524px" align="flex-start">
            <Heading
              as="h1"
              fontWeight="500"
              lineHeight="54px"
              size="lg"
              color="gray.100"
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text color="gray.300" fontSize="20" mt="5">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
            </Text>
          </Box>
          <Box>
            <Image mb="-20" src="/images/icons/airplane.svg" alt="airplane" />
          </Box>
        </Flex>
      </Flex>

      <Box w="100%" maxW={1160} mx="auto" pb="10">
        <Flex py="20" justify="space-between">
          <CategoryIcon
            title="vida noturna"
            icon="/images/icons/cocktail.svg"
          />
          <CategoryIcon title="praia" icon="/images/icons/surf.svg" />
          <CategoryIcon title="morderno" icon="/images/icons/building.svg" />
          <CategoryIcon title="clássico" icon="/images/icons/museum.svg" />
          <CategoryIcon title="e mais..." icon="/images/icons/earth.svg" />
        </Flex>

        <Flex direction="column" align="center" mb="10">
          <Heading
            as="h4"
            size="lg"
            fontWeight="500"
            lineHeight="1.5"
            textAlign="center"
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Heading>
        </Flex>
        <Box className={styles.sliderWrapper}>
          <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination
            navigation
          >
            <SwiperSlide>
              <Image src="/images/beach.jpg" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/europe.jpg" alt="2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/islands.jpg" alt="3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/maldivas.jpg" alt="4" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default Home;
