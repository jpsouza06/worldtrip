import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'

import {theme} from '../styles/theme'

import 'swiper/scss';
import '../styles/swiperTheme.scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
// import { makeServer } from '../services/mirage';

// if (process.env.NODE_ENV === 'development') {
//   makeServer();
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
