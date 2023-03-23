import {
    createStyles,
    Menu,
    Center,
    rem,
    Header,
    Container,
    Burger,
    Button,
    Group,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
//   import { MantineLogo } from '@mantine/ds';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}));

export function HeaderAction() {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                    {/* <MantineLogo size={28} /> */}asdf
                </Group>
                <Group spacing={5} className={classes.links}>
                    <Menu trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                        <Menu.Target>
                            <a
                              href="3"
                              className={classes.link}
                              onClick={(event) => event.preventDefault()}
                            >
                                <Center>
                                    <span className={classes.linkLabel}>asdf</span>
                                    <IconChevronDown size={rem(12)} stroke={1.5} />
                                </Center>
                            </a>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>asdf</Menu.Item>
                            <Menu.Item>asdf</Menu.Item>
                            <Menu.Item>asdf</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
                <Button radius="xl" h={30}>
                    Get early access
                </Button>
            </Container>
        </Header>

    );
}
