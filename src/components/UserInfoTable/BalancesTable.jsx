import { Button } from 'antd';
import React from 'react';
import { FormattedMessage } from "react-intl";
import { messages } from "../../utils/lang";
import {
  useTokenAccounts,
  getSelectedTokenAccountForMint,
} from '../../utils/markets';
import DataTable from '../layout/DataTable';
import { useSendConnection } from '../../utils/connection';
import { useWallet } from '../../utils/wallet';
import { settleFunds } from '../../utils/send';

export default function BalancesTable({
  balances,
  showMarket,
  hideWalletBalance,
  onSettleSuccess,
}) {
  const [accounts] = useTokenAccounts();
  const connection = useSendConnection();
  const { wallet } = useWallet();

  async function onSettleFunds(market, openOrders) {
    return await settleFunds({
      market,
      openOrders,
      connection,
      wallet,
      baseCurrencyAccount: getSelectedTokenAccountForMint(
        accounts,
        market?.baseMintAddress,
      ),
      quoteCurrencyAccount: getSelectedTokenAccountForMint(
        accounts,
        market?.quoteMintAddress,
      ),
      onSuccess: onSettleSuccess,
    });
  }

  const columns = [
    showMarket
      ? {
          title: 'Market',
          dataIndex: 'marketName',
          key: 'marketName',
        }
      : null,
    {
      title: <FormattedMessage {...messages.coin} />,
      dataIndex: 'coin',
      key: 'coin',
    },
    hideWalletBalance
      ? null
      : {
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
      render: ({ market, openOrders, marketName }) => (
        <div style={{ textAlign: 'right' }}>
          <Button
            ghost
            style={{ marginRight: 12 }}
            onClick={() => onSettleFunds(market, openOrders)}
          >
            <FormattedMessage {...messages.settle} /> {marketName}
          </Button>
        </div>
      ),
    },
  ].filter((x) => x);
  return (
    <DataTable
      emptyLabel="No balances"
      dataSource={balances}
      columns={columns}
      pagination={false}
    />
  );
}
