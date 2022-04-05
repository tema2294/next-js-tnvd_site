import '../styles/globals.css'
import '../styles/global2.scss'
import type { AppProps } from 'next/app'
import WithYandexMetrika from "../components/WithYandexMetrika";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <WithYandexMetrika>
          <Component {...pageProps} />
      </WithYandexMetrika>
)
}

export default MyApp
