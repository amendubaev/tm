import React from "react";
import Head from "next/head";
import styles from "../styles/globals.module.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Task Manager</title>
                <meta
                    name="google"
                    content="nositelinkssearchbox"
                    key="sitelinks"
                />
                <meta name="google" content="notranslate" key="notranslate" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
