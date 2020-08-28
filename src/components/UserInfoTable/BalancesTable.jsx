import { Button } from 'antd';
import React from 'react';
import { FormattedMessage } from "react-intl";
import { messages } from "../../utils/lang";
import {
  useSelectedOpenOrdersAccount,
  useMarket,
  useSelectedBaseCurrencyAccount,
  useSelectedQuoteCurrencyAccount,
} from '../../utils/markets';
import DataTable from '../layout/DataTable';
import { useSendConnection } from '../../utils/connection';
import { useWallet } from '../../utils/wallet';
import { settleFunds } from '../../utils/send';

export default function BalancesTable({ balances }) {
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const connection = useSendConnection();
  const { wallet } = useWallet();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const { market } = useMarket();

  async function onSettleFunds() {
    return await settleFunds({
      market,
      openOrders: openOrdersAccount,
      connection,
      wallet,
      baseCurrencyAccount,
      quoteCurrencyAccount,
    });
  }

  const columns = [
    {
      title: <FormattedMessage {...messages.coin} />,
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: <FormattedMessage {...messages.walletBalance} />,
      dataIndex: 'wallet',
      key: 'wallet',
    },
    {
      title: <FormattedMessage {...messages.order} />,
      dataIndex: 'orders',
      key: 'orders',
    },
    {
      title: <FormattedMessage {...messages.unsettled} />,
      dataIndex: 'unsettled',
      key: 'unsettled',
    },
    {
      key: 'action',
      render: () => (
        <div style={{ textAlign: 'right' }}>
          <Button ghost style={{ marginRight: 12 }} onClick={onSettleFunds}>
            <FormattedMessage {...messages.settle} />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <DataTable
      emptyLabel="No balances"
      dataSource={balances}
      columns={columns}
      pagination={false}
    />
  );
}
