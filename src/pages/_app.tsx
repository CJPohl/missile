import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import '@fontsource/nova-cut';
import theme from '../chakra-config';
import Banner from '../components/banner';
import Header from '../components/header';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Banner />
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default App;
