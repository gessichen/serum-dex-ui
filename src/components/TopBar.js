import {
  InfoCircleOutlined,
  UserOutlined,
  SoundOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Menu, Popover, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { LocaleContext } from '../localeContext';
import { LAUGUANGES_PROVIDERS, messages } from '../utils/lang';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import { useWallet, WALLET_PROVIDERS } from '../utils/wallet';
import { useSolong } from '../utils/solong-helper';
import { ENDPOINTS, useConnectionConfig } from '../utils/connection';
import LinkAddress from './LinkAddress';

const Wrapper = styled.div`
  background-color: #0d1017;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 30px;
  flex-wrap: wrap;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #2abdd2;
  font-weight: bold;
  cursor: pointer;
  img {
    height: 30px;
    margin-right: 8px;
  }
`;

export default function TopBar() {
  const [current, setCurrent] = useState('/');
  //const { connected, wallet, providerUrl, setProvider } = useWallet();
  const { connected, wallet } = useSolong();
  const { endpoint, setEndpoint } = useConnectionConfig();
  const location = useLocation();
  const history = useHistory();

  console.log('wallet:', wallet);
  const publicKey = wallet?.publicKey?.toBase58();

  const handleClick = useCallback(
    (e) => {
      history.push(e.key);
    },
    [history],
  );

  useEffect(() => {
    if (location.pathname.includes('/orders')) {
      setCurrent('/orders');
    } else if (location.pathname.includes('/balances')) {
      setCurrent('/balances');
    }
  }, [location]);

  const [locale, setLocale] = React.useContext(LocaleContext);

  const selectLang = (lang) => {
    setLocale(lang);
    localStorage.setItem('locale', lang);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} alt="" />
        {'SERUM'}
      </LogoWrapper>
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[current]}
        style={{
          borderBottom: 'none',
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'flex-end',
          flex: 1,
        }}
      >
        <Menu.Item key="/">
          <FormattedMessage {...messages.trade} />
        </Menu.Item>
      </Menu>

      <div>
        <Select
          onSelect={setEndpoint}
          value={endpoint}
          style={{ marginRight: 8 }}
        >
          {ENDPOINTS.map(({ name, endpoint }) => (
            <Select.Option value={endpoint} key={endpoint}>
              {name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>
        <Select onSelect={selectLang} value={locale}>
          {LAUGUANGES_PROVIDERS.map(({ loc, label }) => (
            <Select.Option value={loc} key={loc}>
              {label}
            </Select.Option>
          ))}
        </Select>
        <Button
          type="text"
          size="large"
          onClick={wallet.selectAccount}
          style={{ color: '#2abdd2' }}
        >
          <UserOutlined />
          {!connected ? (
            <FormattedMessage {...messages.connect} />
          ) : (
            <FormattedMessage {...messages.disConnect} />
          )}
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
      </div>
    </Wrapper>
  );
}
