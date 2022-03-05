import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import store from '../store';
import Layout from '../components/UI/Layout';
import Card from '../components/UI/Card';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Card>
          <Component {...pageProps} />
        </Card>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
