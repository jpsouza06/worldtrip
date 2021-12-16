import Link from 'next/link';

import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

export function Carousel() {

  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    api.get('/continents')
    .then(response => setContinents(response.data.continents))
}, []);

  return (
    <Box maxW={1240}  mx='auto' textAlign='center' pb='10' pt='13' pos='relative'>
      <Swiper
      wrapperTag="ul"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {continents.map(continent => (
            
            <SwiperSlide key={continent.id}>
              <Link href={`/continents/${continent.id}`} key={continent.id} passHref>
                <Button
                  key={continent.id}
                  as='a'
                  maxW={1240}
                  w='100%'
                  h={{ base: 250, lg: 450}}
                  p= '0'
                  cursor='pointer'
                >
                  <Image
                    src={continent.carrouselImage}
                    alt={continent.name}
                    filter={'brightness(65%)'}
                    w='100%'
                    h={{base: '100%', sm: 'auto'}}
                  />
                  <Flex pos='absolute' direction='column' textAlign='center' >
                    <Text
                      fontWeight='700'
                      color='gray.50'
                      fontSize={[24, 48]}
                      lineHeight='2'>
                        {continent.name}
                      </Text>
                   <Text
                      fontWeight='700'
                      color='#DADADA'
                      fontSize={[14, 24]}
                    >
                        {continent.description}
                    </Text>
                  </Flex>
                </Button>
              </Link>
            </SwiperSlide>
            
      ))}
    </Swiper>
    </Box>
  );
}


