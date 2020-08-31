import { HashRouter, Route } from 'react-router-dom';
import TradePage from './pages/TradePage';
import OpenOrdersPage from './pages/OpenOrdersPage';
import React from 'react';
import BalancesPage from './pages/BalancesPage';
import BasicLayout from './components/BasicLayout';
import MainPage from './pages/MainPage';

export function Routes() {
  return (
    <HashRouter basename={'/'}>
      <Route exact path="/" component={TradePageContents} />
      <Route exact path="/trade" component={TradePageContents} />
      <Route exact path="/orders" component={OpenOrdersPageContents} />
      <Route exact path="/balances" component={BalancesPageContents} />
    </HashRouter>
  );
}

function TradePageContents() {
  return (
    <BasicLayout>
      <TradePage />
    </BasicLayout>
  );
}

function OpenOrdersPageContents() {
  return (
    <BasicLayout>
      <OpenOrdersPage />
    </BasicLayout>
  );
}

function BalancesPageContents() {
  return (
    <BasicLayout>
      <BalancesPage />
    </BasicLayout>
  );
}

function MainPageContents() {
  return (
    <React.Fragment>
      <Layout
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <Header style={{ padding: 0 }}>
          <TopBar />
        </Header>
        <MainPage />
        <CustomFooter />
      </Layout>
    </React.Fragment>
  );
}
