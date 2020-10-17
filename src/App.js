import React, { Suspense } from 'react';
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { MarketProvider } from './utils/markets';
import { WalletProvider } from './utils/wallet';
import { SolongProvider } from './utils/solong-helper';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';
import { IntlProvider } from 'react-intl';
import { LocaleContext } from './localeContext';
import en from './translations/en';
import zh from './translations/zh';
import ko from './translations/ko';
import jp from './translations/jp';
import vi from './translations/vi';
import tr from './translations/tr';
import ru from './translations/ru';
import zhhk from './translations/zhhk';

const messages = {
  en,
  'zh-CN': zh,
  ko,
  jp,
  vi,
  tr,
  ru,
  'zh-HK': zhhk,
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
              <SolongProvider>
                <IntlProvider locale={locale} messages={messages[locale]}>
                  <Suspense fallback={() => <Spin size="large" />}>
                    <Routes />
                  </Suspense>
                </IntlProvider>
              </SolongProvider>
            </WalletProvider>
          </MarketProvider>
        </ConnectionProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
