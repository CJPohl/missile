import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import '@fontsource/nova-cut';
import '@fontsource/noto-serif-jp';
import '@fontsource/hind-siliguri';
import theme from '../chakra-config';
import Banner from '../components/banner';
import Header from '../components/header';
import { persistor, store } from '../app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Footer from '../components/footer';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={session}>
          <ChakraProvider theme={theme}>
            <Banner />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </ChakraProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
