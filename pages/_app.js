import "../styles/globals.css";
import logger from "../helpers/logger";
import "../src/components/FAQS/faqs.css";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  logger.error("My App");
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const areLogsEnabled = ctx?.router?.query?.debug || "";
  global.areLogsEnabled = areLogsEnabled === "true";
  return {};
};

export default MyApp;
