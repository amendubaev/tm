import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Task Manager</title>
                    <meta
                        name="google"
                        content="nositelinkssearchbox"
                        key="sitelinks"
                    />
                    <meta
                        name="google"
                        content="notranslate"
                        key="notranslate"
                    />
                </Head>

                <body className="body">
                    <Main />
                </body>

                <NextScript />
            </Html>
        );
    }
}
