import "@/styles/globals.css";
import DefaultLayout from "../features/components/DefaultLayout";
import "../pages/_app.css";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />{" "}
    </DefaultLayout>
  );
}
