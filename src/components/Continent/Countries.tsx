import { Box, Flex, Grid, GridItem, Image, Text, Stack} from "@chakra-ui/react";
import React from "react";


interface Countries {
  id: number;
  name: string;
  flag: string;
  capital: string;
  image: string;
}

interface CountriesProps {
  countries: Countries[];
}

export function Countries({countries}: CountriesProps) {
  return (
    <Box maxW={{lg: 1000, xl: 1160}} w='90%' mx='auto' mb='35px'>
      <Text as='h1' fontSize={[26, 36]} fontWeight='500' pt={{base: '10', lg: '20'}}>Cidades +100</Text>

      <Grid 
        pt='10'
        templateColumns={{
          base: 'repeat(1, 256px)', 
          md: 'repeat(2, 256px)', 
          xl: 'repeat(4, 1fr)'
        }}
        gap={45}
        align='center'
        justifyContent='center'
      >
        {countries.map(country => (
          <GridItem>
            <Box
              bgImage={country.image}
              h={173}
              bgSize='cover'
              bgPos='50%'
              borderTopRadius='4'
            />

            <Flex
              align='center'
              pb='5'
              border='1px'
              borderColor='rgba(255,186,8,0.5)'
              borderBottomRadius='4'
            >
              <Stack textAlign='left' w={176} ml='6'>
                <Text fontSize={20} fontWeight='600' color='#47585B' mt='4'>{country.capital}</Text>
                <Text fontSize={16} fontWeight='500' mt='4' color='#999999'>{country.name}</Text>
              </Stack>
              <Image
                src={country.flag}
                borderRadius='full'
                boxSize='8'
                border='1px'
                borderColor='gray.200'
                mx='auto'
                mt='4'
              />            
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}