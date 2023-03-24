import { Burger, Header, Image, Paper, Stack, Text, Transition, createStyles } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
//   import { useStoreActions, useStoreState } from 'easy-peasy';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
//   import LoginModal from '../Modals/LoginModal';

const HEADER_HEIGHT = 90;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    // backgroundColor: '#6B94B3',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    // backgroundColor: 'white',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

export default function NavigationHeader() {
  const router = useRouter();
  const [opened, { toggle: settoggle }] = useDisclosure(false);
  const { classes } = useStyles();
  // const Router = useRouter();
  const [token, setToken] = useState<string | null>();

  // const { loginModal } = useStoreState((state: any) => state.global);
  // const { setLoginModal } = useStoreActions((actions: any) => actions.global);

  useEffect(() => {
    // checks if the user is authenticated
    const _token = localStorage.getItem('token');
    setToken(`${_token}`);
  }, []);

  return (
    <>
      {/* <LoginModal /> */}
      <div className="fixed top-0 z-[100] w-full">
        <Header
          height={HEADER_HEIGHT}
          className={`${classes.root} bg-[#1c2c55]/80 md:bg-[#1c2c55] backdrop-blur-sm`}
        >
          <div className="flex justify-between items-center h-full mx-5 lg:mx-10">
            <div className="flex justify-start items-center">
              {/* <Link href="/" passHref>
                  <Image alt="logo" height={40} width={40} src="/favicon.ico" />
                </Link> */}
              <ColorSchemeToggle />
            </div>
            <div className="flex md:hidden justify-center items-center">
              <Burger
                opened={opened}
                onClick={settoggle}
                className={`${classes.burger} text-white`}
                size="sm"
                color="black"
              />
            </div>
            <div className="hidden md:flex justify-end items-center text-sm">
              <div className="">
                <Image alt="logo" height={35} width={35} src="/favicon.ico" />
              </div>
              {token === '123' ? (
                <div className="ml-2">
                  <Text className="text-white">John Deo</Text>
                  <div className="lg:flex">
                    <Text
                      className="text-white hover:text-red-600 hover:underline underline-offset-4 cursor-pointer"
                      onClick={() => {
                        // Remove an item from local storage
                        setToken(null);
                        localStorage.removeItem('token');
                        router.push('/');
                      }}
                    >
                      logout
                    </Text>
                    <Text className="hidden lg:block text-white px-2">|</Text>
                    <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4 cursor-pointer">
                      My Account
                    </Text>
                  </div>
                </div>
              ) : (
                <div className="ml-2">
                  <Text
                    onClick={() => {
                      localStorage.setItem('token', '123');
                      setToken('123');
                    }}
                    className="text-white cursor-pointer"
                  >
                    Login
                  </Text>
                </div>
              )}
            </div>
            <Transition transition="pop-top-right" duration={200} mounted={opened}>
              {(styles) => (
                <Paper
                  className={`${classes.dropdown} bg-[#6B94B3]/80 md:bg-[#6B94B3]`}
                  style={styles}
                >
                  <Stack align="" className="" spacing="xl">
                    <div className="w-full px-5 py-10 ">
                      <Stack align="" spacing="xl">
                        <Link href="#" passHref>
                          <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                            Dashboard
                          </Text>
                        </Link>
                        <Link href="/" passHref>
                          <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                            Resource Center
                          </Text>
                        </Link>
                        <Link href="/hazardForms" passHref>
                          <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                            Hazard Forms
                          </Text>
                        </Link>
                        <Link href="/terabuilder" passHref>
                          <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                            TERABuilder
                          </Text>
                        </Link>
                      </Stack>
                    </div>
                  </Stack>
                </Paper>
              )}
            </Transition>
          </div>
        </Header>
      </div>
    </>
  );
}
