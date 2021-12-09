import { Box, Flex, Image, Text, Stack, useBreakpointValue} from "@chakra-ui/react";

export function Banner() {
  return (
    <Box     
      bgImage="url('/images/BannerBG.svg')"
      bgRepeat='no-repeat'
      bgSize='cover'
      w='100%'
    >    
      <Flex maxW={1440} h={[180,335]} mx='auto' justify='space-evenly'>    
        <Flex dir="row" pt={['7','20']} ml={['4']}>
          <Stack spacing={['2', '5']}>
            <Text
              fontWeight='500'
              fontSize={{base:'xl',md:'2xl',lg:'3xl'}}
              color="gray.50"
            >
              5 Continentes,<br/> infinitas possibilidades.
            </Text>

            <Text fontWeight='400' color="#DADADA" maxW={450}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Stack>
        </Flex>

        <Image
          src={'/images/Airplane.svg'}
          pt='20'
          boxSize={[0, 300,400]}
        />


      </Flex>
    </Box>
  );
}