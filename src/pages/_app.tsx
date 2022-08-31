import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'

import {theme} from '../styles/theme'

import 'swiper/scss';
import '../styles/swiperTheme.scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
