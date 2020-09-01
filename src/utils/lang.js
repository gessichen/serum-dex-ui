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
  {
    loc: 'ko',
    label: '한국어',
  },
  {
    loc: 'jp',
    label: '日本語',
  },
  {
    loc: 'vi',
    label: 'Tiếng Việt',
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
    defaultMessage: 'All deposits go to your ',
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
  maker: {
    id: 'maker',
    defaultMessage: 'Maker',
  },
  taker: {
    id: 'taker',
    defaultMessage: 'Taker',
  },
  fundTip1: {
    id: 'fundTip1',
    defaultMessage:
      'Make sure to go to Balances and click Settle to send out your funds',
  },
  fundTip2: {
    id: 'fundTip2',
    defaultMessage:
      'To fund your wallet, use sollet.io. You can get SOL from FTX, Binance, BitMax, and others. You can get other tokens from FTX.',
  },
  trade: {
    id: 'trade',
    defaultMessage: 'Trade',
  },
});
