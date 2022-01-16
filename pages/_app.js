import "../styles/globals.css";
import logger from "../helpers/logger";
import "../src/components/FAQS/faqs.css";

function MyApp({ Component, pageProps }) {
  logger.error("My App");
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (ctx) => {
  const areLogsEnabled = ctx?.router?.query?.debug || "";
  global.areLogsEnabled = areLogsEnabled === "true";
  return {};
};

export default MyApp;
