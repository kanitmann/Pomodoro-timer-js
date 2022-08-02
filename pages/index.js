import { InfoIcon, SettingsIcon } from '@chakra-ui/icons';
import { Container, Box, Divider, Center, Heading, HStack, Stack, IconButton } from '@chakra-ui/react';
import SubHeading from '../components/subheading';

export default function Home() {
  return (
    <Container maxW="container.sm">
      <Box marginTop={8}>
        <Heading size='lg'>Pomodoro Timer 🍅</Heading>
        <Divider paddingTop="20px" />
        <SubHeading />
      </Box>
    </Container >

  )
}
