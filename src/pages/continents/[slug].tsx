import Head from "next/head";
import { useRouter } from 'next/router'

import { api } from "../../services/api";

import {IoIosInformationCircleOutline} from 'react-icons/io'

import { useState, useEffect} from "react";

import { Box, Flex, Icon, Tooltip, Text, Stack,} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Continent/Banner";
import { Countries } from "../../components/Continent/Countries";



type Continent = {
  name: string;
  description: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCity: number;
  bannerImage: string;
  countries: {
    id: number;
    name: string;
    flag: string;
    capital: string;
    image: string;
  }[],
}


export default function Continent() {
  const [continents, setContinents] = useState<Continent>()

  useEffect(() => {
    async function getContinents() {
      await api.get('/continents/1')
      .then(response => setContinents(response.data.continent)) 
    }    

    getContinents();
}, []);
  return (
    <>
      <Head>
        <title>worldtrip | {continents && continents.name}</title>
      </Head>
      <Box>
        <Header isHomePage={false}/>

        { continents && (
          <>
            <Banner name={continents.name} bannerImage={continents.bannerImage}/>

            <Flex
              maxW={{lg: 1000, xl: 1160}}
              w={{base: '90%', xl: '100%'}}
              mx='auto'
              pt={{base: '10', lg: '20'}}
              direction={{base: 'column', lg: 'row'}}
              align='flex-start'
              justify='space-between'
            >

              <Text
                as='p'
                w={{lg: 500, xl: 700}}
                fontSize={{base: 18, sm: 24}}
                fontWeight='400'
                textAlign='justify'
                mb={{ base: '4' ,lg: '0'}}
              >
                {continents.text}
              </Text>

              <Flex mx='auto'>
                <Stack align='center' spacing={0}>
                  <Text fontSize={{base: 35, sm: 48}} fontWeight='600' color='#FFBA08'>{continents.numberOfCountries}</Text>
                  <Text>países</Text>
                </Stack>

                <Stack pl={{base: '40px',sm: '80px',md: '127px', lg: '10'}} align='center' spacing={0}>
                  <Text fontSize={{base: 35, sm: 48}} fontWeight='600' color='#FFBA08'>{continents.numberOfLanguages}</Text>
                  <Text >línguas</Text>
                </Stack>

                <Stack pl={{base: '20px',sm: '80px',md: '127px', lg: '10'}} align='center' spacing={0}>
                  <Text fontSize={{base: 35, sm: 48}} fontWeight='600' color='#FFBA08'>{continents.numberOfCity}</Text>
                  <Text>
                    cidades +100
                    <Tooltip label='As 100 cidades mais visitadas do mundo.'>
                      <span>
                        <Icon as={IoIosInformationCircleOutline} pt='1'/>
                      </span> 
                    </Tooltip> 
                  </Text>
                </Stack>
              </Flex>
            </Flex>
            
            <Countries countries={continents.countries}/>
          </>
        )}
      </Box>
      
    </>
  );
}

