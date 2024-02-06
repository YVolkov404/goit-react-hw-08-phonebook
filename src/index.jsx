import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'rdx/store';

//--------------------------------------------------------
import reportWebVitals from './services/reportWebVitals';
import * as serviceWorker from './services/serviceWorker';
//----------------------------------------------------

import App from './components/App';
import theme from './mods/Theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//   },
// ]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <ChakraProvider resetCSS theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
