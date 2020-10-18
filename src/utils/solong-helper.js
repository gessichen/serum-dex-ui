import React, { useContext, useEffect, useMemo, useState } from 'react';
import { getSelectedTokenAccountForMint } from './markets';
import { notify } from './notifications';
import { useLocalStorageState } from './utils';

const SolongContext = React.createContext(null);

export class SolongHelper {
  constructor() {
    this.onSelected = null;
  }

  selectAccount = () => {
    console.log('solong helper select account');
    window.solong
      .selectAccount()
      .then((account) => {
        console.log('window solong select:', account);
        if (this.onSelected) {
          this.onSelected(account);
        }
      })
      .catch(() => {});
  };
}

export function SolongProvider({ children }) {
  const solong = new SolongHelper();

  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  useEffect(() => {
    console.log('trying to connect');
    solong.onSelected = (account) => {
      console.log('helper on select :', account);
      setConnected(true);
      setAccount(account);
    };
  }, [solong]);
  return (
    <SolongContext.Provider
      value={{
        solong,
        connected,
        account,
      }}
    >
      {children}
    </SolongContext.Provider>
  );
}

export function useSolong() {
  const context = useContext(SolongContext);
  return {
    connected: context.connected,
    solong: context.solong,
    account: context.account,
  };
}
