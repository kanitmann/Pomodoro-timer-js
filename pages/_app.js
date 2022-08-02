import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={styles.screenbg}>
      <ChakraProvider>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

const styles = {
  screenbg: {
    backgroundColor: '#262626',
    flex: 1,
  }
}

export default MyApp
