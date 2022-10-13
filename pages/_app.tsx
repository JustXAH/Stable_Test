import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DAppProvider, Config, BNB } from "@usedapp/core"
import { ethers } from 'ethers'

const bscProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/', { name: 'binance', chainId: BNB.chainId })

const config: Config = {
    readOnlyChainId: BNB.chainId,
    readOnlyUrls: {
        [BNB.chainId]: bscProvider,
    },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (

      <DAppProvider config={config} >
        <Component {...pageProps} />
      </DAppProvider>
  )
}

export default MyApp
