import { Flex, Image, Icon } from '@chakra-ui/react'

import Link from 'next/link'

import {IoIosArrowBack} from 'react-icons/io'

interface HeaderProps {
  isHomePage: boolean;
}

export function Header({isHomePage}: HeaderProps) {
  return (
    <Flex as="header" >
      
      { !isHomePage && (
        <Link href='/'>
        <Icon
          as={IoIosArrowBack}
          cursor='pointer'
          fontSize={25}
          ml="10%"
          mt={45}
          pos='absolute'
        />
      </Link>
      )}

      <Image
        src="/images/Logo.svg"
        alt="logo"
        m="auto"
        mt="7"
        mb="7"
        w={{base: 120, sm: 180}}
      />
    </Flex>
  );
}