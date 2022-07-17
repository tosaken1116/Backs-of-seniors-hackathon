import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";
import "./../styles/header.modules.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
