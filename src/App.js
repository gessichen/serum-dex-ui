import React, { Suspense } from 'react';
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { MarketProvider } from './utils/markets';
import { WalletProvider } from './utils/wallet';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';
import { IntlProvider } from 'react-intl';
import { LocaleContext } from './localeContext';
import en from './translations/en';
import zh from './translations/zh';

const messages = {
  en,
  zh,
};

export default function App() {
  const [locale] = React.useContext(LocaleContext);

  return (
    <Suspense fallback={() => <Spin size="large" />}>
      <GlobalStyle />
      <ErrorBoundary>
        <ConnectionProvider>
          <MarketProvider>
            <WalletProvider>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <Suspense fallback={() => <Spin size="large" />}>
                  <Routes />
                </Suspense>
              </IntlProvider>
            </WalletProvider>
          </MarketProvider>
        </ConnectionProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
