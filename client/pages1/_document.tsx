import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

export default class CustomDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        resetServerContext();

        return { ...initialProps };
    }

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
