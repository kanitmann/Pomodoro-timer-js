import { Container, Box, Divider, Heading, Center } from '@chakra-ui/react';
import SubHeading from '../components/subheading';
import Timer from '../components/timer';

export default function Home() {
  return (
    <Container maxW="container.sm" paddingTop="50px" >
      <Box marginTop={8}>
        <Box width="100%" boxShadow='xl' p='6' rounded='md'>
          <Heading size='lg'>Pomodoro Timer 🍅</Heading>
          <Divider paddingTop="20px" />
          <SubHeading />
          <Center>
            <Timer />
          </Center>
        </Box>

      </Box>
    </Container >
  )
}
