import { defineMessages } from 'react-intl';

export const LAUGUANGES_PROVIDERS = [
  {
    loc: 'en',
    label: 'English',
  },
  {
    loc: 'zh',
    label: '中文',
  },
];

export const messages = defineMessages({
  connect: {
    id: 'Connect',
    defaultMessage: 'Connect',
  },
  disConnect: {
    id: 'disConnect',
    defaultMessage: 'Disconnect',
  },
  orderBook: {
    id: 'orderBook',
    defaultMessage: 'Orderbook',
  },
  marketTrades: {
    id: 'marketTrades',
    defaultMessage: 'Market trades',
  },
  buy: {
    id: 'buy',
    defaultMessage: 'BUY ',
  },
  sell: {
    id: 'sell',
    defaultMessage: 'SELL ',
  },
  price: {
    id: 'price',
    defaultMessage: 'Price',
  },
  size: {
    id: 'size',
    defaultMessage: 'Size',
  },
  side: {
    id: 'side',
    defaultMessage: 'Side',
  },
  marketName: {
    id: 'marketName',
    defaultMessage: 'Market name',
  },
  openOrders: {
    id: 'openOrders',
    defaultMessage: 'Open orders',
  },
  tradeHistory: {
    id: 'tradeHistory',
    defaultMessage: 'Trade history',
  },
  balance: {
    id: 'balance',
    defaultMessage: 'Balance',
  },
  walletBalance: {
    id: 'walletBalance',
    defaultMessage: 'wallet balance',
  },
  deposit: {
    id: 'deposit',
    defaultMessage: 'DEPOSIT',
  },
  depositTip: {
    id: 'depositTip',
    defaultMessage: 'All deposits go to your {provider} wallet',
  },
  noOpenOrders: {
    id: 'noOpenOrders',
    defaultMessage: 'No open orders',
  },
  noTrades: {
    id: 'noTrades',
    defaultMessage: 'No Trades',
  },
  liquidity: {
    id: 'liquidity',
    defaultMessage: 'Liquidity',
  },
  fees: {
    id: 'fees',
    defaultMessage: 'Fees',
  },
  coin: {
    id: 'coin',
    defaultMessage: 'Coin',
  },
  wallet: {
    id: 'wallet',
    defaultMessage: 'Wallet',
  },
  order: {
    id: 'order',
    defaultMessage: 'Order',
  },
  unsettled: {
    id: 'unsettled',
    defaultMessage: 'Unsettled',
  },
  unsettledBalance: {
    id: 'unsettledBalance',
    defaultMessage: 'Unsettled Balance',
  },
  settle: {
    id: 'settle',
    defaultMessage: 'Settle',
  },
  noOrders: {
    id: 'noOrders',
    defaultMessage: 'No orders',
  },
});
