import {Box, Text} from '@chakra-ui/react'

interface BannerProps {
  name: string;
  bannerImage: string;
}

export function Banner({name, bannerImage}: BannerProps) {
  return (
    <Box 
      bgImage={bannerImage}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPos='50%'
      w='100%'
      h={{base: 200, md: 500}}   
    >
      <Text
        fontWeight='600'
        color='gray.50'
        fontSize={{base: 38, md: 48}}
        maxW={{lg: 1000, xl: 1160}}
        w='90%'
        mx='auto'
        pt={{base: '64px', md: '370'}}
        textAlign={{base: 'center', md: 'left'}}
      >
        {name}
      </Text>
    </Box>
  );
}