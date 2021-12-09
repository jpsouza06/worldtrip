import { Box, Divider, Flex, Text} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { TravelTypes } from "../components/Home/TravelTypes";
import { Carousel } from "../components/Home/Carousel";

import Head from "next/head";

import { GetStaticProps } from "next";
import { api } from "../services/api";

interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface CarouselProps {
  continents: Continent[];
}

export default function Home({continents}: CarouselProps) {
  return (
    <>
      <Head>
        <title>worldtrip | Home</title>
      </Head>

      <Box>
        <Header isHomePage={true}/>
        <Banner />
        <TravelTypes />
        
        <Divider pt={['10', '16']} w={150} borderColor='gray.500' mx='auto'/>

        <Flex pt={['10', '16']} mx='auto' direction='column' textAlign='center'>
          <Text fontWeight='500' fontSize={[20, 36]}>Vamos nessa?</Text>
          <Text fontWeight='500' fontSize={[20, 36]}>Então escolha seu continente</Text>
        </Flex>

        <Carousel continents={continents}/>
      </Box>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');

  const continents = response.data

  return {
    props: {
      continents
    }
  }
}
