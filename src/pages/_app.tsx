import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default App;
