import { Button, Avatar, useToast } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

// Hook that returns session status + useful auth tools for site
const useSignIn = () => {
  const router = useRouter();
  const toast = useToast();
  const { data: session } = useSession();

  // If session return avtr pic
  const showAvtr = () => {
    if (session) {
      return <Avatar  src={session.user.image} />;
    } else {
      ('');
    }
  };

  const signInBtn = (
    <Button
      as='a'
      onClick={() => signIn()}
      bgColor='dark'
      fontFamily='normal'
      color='white'
      cursor='pointer'
    >
      Sign In
    </Button>
  );

  const signOutBtn = (
    <Button
      as='a'
      onClick={() => signOut()}
      bgColor='dark'
      fontFamily='normal'
      color='white'
      cursor='pointer'
    >
      Sign Out
    </Button>
  );

  // Handle user not auth
  const handleNotAuth = () => {
    router.push('/');
    return toast({
      title: 'You are not signed in!',
      description: 'You need to be authenticated to make purchases',
      status: 'error',
      duration: 2000,
      isClosable: false,
    });
  };

  if (session) {
    return { session, authBtn: signOutBtn, showAvtr, handleNotAuth };
  } else {
    return { session, authBtn: signInBtn, showAvtr, handleNotAuth };
  }
};
export default useSignIn;
