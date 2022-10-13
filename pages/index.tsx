import type { NextPage } from 'next'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ConnectButton from "../components/ConnectButton";
// import Layout from "components/Layout";

const Home: NextPage = () => {
  return (
      <ChakraProvider>
          <Layout>
              <ConnectButton />
          </Layout>
      </ChakraProvider>
  )
}

export default Home
