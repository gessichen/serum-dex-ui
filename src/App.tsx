import React, { Suspense } from 'react';
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { MarketProvider } from './utils/markets';
import { WalletProvider } from './utils/wallet';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';
import { PreferencesProvider } from './utils/preferences';
import { IntlProvider } from 'react-intl';
import { LocaleContext } from './locContext';
var en = require('./translations/en');
var zh = require('./translations/zh');
var ko = require('./translations/ko');
var jp = require('./translations/jp');
var vi = require('./translations/vi');
var tr = require('./translations/tr');
var ru = require('./translations/ru');
var zhhk = require('./translations/zhhk');

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

  //@ts-ignore
  const [locale] = React.useContext(LocaleContext);

  return (
    <Suspense fallback={() => <Spin size="large" />}>
      <GlobalStyle />
      <ErrorBoundary>
        <ConnectionProvider>
          <MarketProvider>
            <WalletProvider>
              <PreferencesProvider>
                <IntlProvider locale={locale} messages={messages[locale]}>
                  <Suspense fallback={() => <Spin size="large" />}>
                    <Routes />
                  </Suspense>
                </IntlProvider>
              </PreferencesProvider>
            </WalletProvider>
          </MarketProvider>
        </ConnectionProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
