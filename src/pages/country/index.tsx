import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { City } from "../../components/Country/city";
import { Info } from "../../components/Country/info";
import { Header } from "../../components/Header";

import styles from "./country.module.scss";

import ReactCountryFlag from "react-country-flag";

export default function Country() {
  return (
    <>
      <Header />

      <Flex
        flex="1"
        bgImage="/images/europe.jpg"
        h="400"
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        className={styles.bannerContainer}
      >
        <Heading as="h3">Europa</Heading>
      </Flex>

      <Box width="100%" py="20" maxW="1160px" mx="auto">
        <Flex direction="row">
          <Box>
            <Container textAlign="justify">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Container>
          </Box>
          <Flex
            as="div"
            px="10"
            justify="space-between"
            flex="1"
            align="center"
          >
            <Info number="50" title="países" />
            <Info number="60" title="línguas" />
            <Info number="27" title="cidades +100" extraInfo="Teste 123" />
          </Flex>
        </Flex>
        <Box mt="20">
          <Heading as="h5" mb="5">
            Cidades +100
          </Heading>

          <Grid templateColumns="repeat(4, 1fr)" gap="4">
            <GridItem>
              <City
                cityName="Reino Unido"
                country="Londres"
                imagePath="/images/europe.jpg"
                icon={
                  <ReactCountryFlag
                    countryCode="GB"
                    style={{
                      borderRadius: "50%",
                      width: "2em",
                      height: "2em",
                    }}
                    svg
                  />
                }
              />
            </GridItem>
            <GridItem>
              <City
                cityName="London"
                country="UK"
                imagePath="/images/europe.jpg"
                icon={
                  <ReactCountryFlag
                    countryCode="US"
                    style={{
                      borderRadius: "50%",
                      width: "2em",
                      height: "2em",
                    }}
                    svg
                  />
                }
              />
            </GridItem>
            <GridItem>
              <City
                cityName="London"
                country="UK"
                imagePath="/images/europe.jpg"
                icon={
                  <ReactCountryFlag
                    countryCode="US"
                    style={{
                      borderRadius: "50%",
                      width: "2em",
                      height: "2em",
                    }}
                    svg
                  />
                }
              />
            </GridItem>
            <GridItem>
              <City
                cityName="London"
                country="UK"
                imagePath="/images/europe.jpg"
                icon={
                  <ReactCountryFlag
                    countryCode="US"
                    style={{
                      borderRadius: "50%",
                      width: "2em",
                      height: "2em",
                    }}
                    svg
                  />
                }
              />
            </GridItem>

            <GridItem>
              <City
                cityName="London"
                country="UK"
                imagePath="/images/europe.jpg"
                icon={
                  <ReactCountryFlag
                    countryCode="US"
                    style={{
                      borderRadius: "50%",
                      width: "2em",
                      height: "2em",
                    }}
                    svg
                  />
                }
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
