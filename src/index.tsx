//@ts-nocheck

import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query"
import { isOpenTelegram } from './utils/telegram';
import QrCode from './pages/QrCode/QrCode'

import { Provider } from 'react-redux'
import store from './redux/store'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (isOpenTelegram()) {
  root.render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
} else {
  root.render(
    <QrCode />
  );
}