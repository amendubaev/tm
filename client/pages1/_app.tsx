import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import store from '../redux/store'

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;