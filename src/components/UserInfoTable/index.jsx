import BalancesTable from './BalancesTable';
import OpenOrderTable from './OpenOrderTable';
import React from 'react';
import { FormattedMessage } from "react-intl";
import { messages } from "../../utils/lang";
import { Tabs, Typography } from 'antd';
import FillsTable from './FillsTable';
import FloatingElement from '../layout/FloatingElement';
import { useOpenOrders, useBalances } from '../../utils/markets';

const { TabPane } = Tabs;

export default function Index() {
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <Typography>
        Make sure to go to Balances and click Settle to send out your funds
      </Typography>
      <br />
      <Typography>
        To fund your wallet, use sollet.io. You can get SOL from FTX, Binance,
        BitMax, and others. You can get other tokens from FTX.
      </Typography>
      <br />
      <Tabs defaultActiveKey="orders">
        <TabPane tab={<FormattedMessage {...messages.openOrders} />} key="orders">
          <OpenOrdersTab />
        </TabPane>
        <TabPane tab={<FormattedMessage {...messages.tradeHistory} />} key="fills">
          <FillsTable />
        </TabPane>
        <TabPane tab={<FormattedMessage {...messages.balance} />} key="balances">
          <BalancesTab />
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}

const OpenOrdersTab = () => {
  const openOrders = useOpenOrders();

  return <OpenOrderTable openOrders={openOrders} />;
};

const BalancesTab = () => {
  const balances = useBalances();

  return <BalancesTable balances={balances} />;
};
