import React from 'react';
import { Button, Popover } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useWallet } from '../utils/wallet';
import LinkAddress from './LinkAddress';
import { FormattedMessage } from "react-intl";
import { messages } from '../utils/lang';

export default function WalletConnect() {
  const { connected, wallet } = useWallet();
  const publicKey = wallet?.publicKey?.toBase58();

  return (
    <React.Fragment>
      <Button
        type="text"
        size="large"
        onClick={connected ? wallet.disconnect : wallet.connect}
        style={{ color: '#2abdd2' }}
      >
        <UserOutlined />
        {!connected ? <FormattedMessage {...messages.connect} /> : <FormattedMessage {...messages.disConnect} /> }
      </Button>
      {connected && (
        <Popover
          content={<LinkAddress address={publicKey} />}
          placement="bottomRight"
          title="Wallet public key"
          trigger="click"
        >
          <InfoCircleOutlined style={{ color: '#2abdd2' }} />
        </Popover>
      )}
    </React.Fragment>
  );
}
