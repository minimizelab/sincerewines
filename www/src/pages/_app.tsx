import type { AppProps } from 'next/app';
import type { C } from '../types/types';
import { Provider } from 'react-redux';
import store from '../store';

import '../styles/tailwind.css';

const App: C<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
