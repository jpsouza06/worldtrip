import { Grid, GridItem, Text, Image } from "@chakra-ui/react";



export function TravelTypes() {
  return (
    <Grid
        maxW={1160}
        mx='auto'
        pt={[10, 100]}
        templateColumns={{base: 'repeat(2, 90px)', sm: 'repeat(2, 150px)', md: 'repeat(5, 1fr)'}}
        gap={{base: '12', md: '70', lg: '130'}}
        align='center'
        justifyContent='center'
      >
        <GridItem>
          <Image src='/images/cocktail.svg' alt='cocktail' w={['60px', 'auto']}/>
          <Text fontWeight='600' mt='4'>vida noturna</Text>
        </GridItem>

        <GridItem>
          <Image src='/images/surf.svg' alt='surf' w={['60px', 'auto']}/>
          <Text fontWeight='600' mt='4'>praia</Text>
        </GridItem>

        <GridItem>
          <Image src='/images/building.svg' alt='building' w={['60px', 'auto']}/>
          <Text fontWeight='600' mt='4'>moderno</Text>
        </GridItem>

        <GridItem>
          <Image src='/images/museum.svg' alt='museum' w={['60px', 'auto']}/>
          <Text fontWeight='600' mt='4'>clássico</Text>
        </GridItem>

        <GridItem colStart={{base: 1, md: 'auto'}} colEnd={{base: 3, md: 'auto'}} >
          <Image src='/images/earth.svg' alt='earth' w={['60px', 'auto']}/>
          <Text fontWeight='600' mt='4'>e mais...</Text>
        </GridItem>
      </Grid>
  );
}