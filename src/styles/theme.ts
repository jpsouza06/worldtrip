import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": '#FFBA08',
    },
    gray: {
      "500": '#47585B',
      "200": '#999999',

    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: '#47585B;',
      }
    }
  },
  Divider: {
    variants: {
      colorScheme: 'gray.500'
    }
  }
})