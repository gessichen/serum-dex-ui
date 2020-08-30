import BalancesTable from './BalancesTable';
import OpenOrderTable from './OpenOrderTable';
import React from 'react';
import { FormattedMessage } from "react-intl";
import { messages } from "../../utils/lang";
import { Tabs, Typography } from 'antd';
import FillsTable from './FillsTable';
import FloatingElement from '../layout/FloatingElement';
import FeesTable from './FeesTable';
import { useOpenOrders, useBalances, useMarket } from '../../utils/markets';

const { Paragraph } = Typography;
const { TabPane } = Tabs;

export default function Index() {
  const { market } = useMarket();
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 20 }}>
      <Typography>
        <Paragraph style={{ color: 'rgba(255,255,255,0.5)' }}>
          <FormattedMessage {...messages.fundTip1} />
        </Paragraph>
        <Paragraph style={{ color: 'rgba(255,255,255,0.5)' }}>
          <FormattedMessage {...messages.fundTip2} />
        </Paragraph>
      </Typography>
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
        {market && market.supportsSrmFeeDiscounts ? (
          <TabPane tab="Fee discounts" key="fees">
            <FeesTable />
          </TabPane>
        ) : null}
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
