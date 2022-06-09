import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import '@fontsource/nova-cut';
import theme from '../chakra-config';
import Banner from '../components/banner';
import Header from '../components/header';
import { store } from '../app/store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Banner />
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </Provider>
  );
};

export default App;
