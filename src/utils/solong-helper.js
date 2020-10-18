import React, { useContext, useEffect, useMemo, useState } from 'react';
import { getSelectedTokenAccountForMint } from './markets';
import { notify } from './notifications';
import { useLocalStorageState } from './utils';
import { PublicKey } from '@solana/web3.js';

const SolongContext = React.createContext(null);

export class SolongHelper {
  constructor() {
    console.log('SolongHelper');
    this.onSelected = null;
    this._publicKey = null;

    this.selectAccount = this.selectAccount.bind(this);
  }

  get publicKey() {
    return this._publicKey;
  }

  async signTransaction(transaction) {
    return window.solong.signTransaction(transaction);
  }

  selectAccount() {
    console.log('solong helper select account');
    window.solong
      .selectAccount()
      .then((account) => {
        this._publicKey = new PublicKey(account);
        console.log('window solong select:', account, 'this:', this);
        if (this.onSelected) {
          this.onSelected(account);
        }
      })
      .catch(() => {});
  }
}

export function SolongProvider({ children }) {
  //const solong = new SolongHelper();
  const solong = useMemo(() => new SolongHelper(), []);

  const [connected, setConnected] = useState(false);
  useEffect(() => {
    console.log('trying to connect');
    solong.onSelected = (pubKey) => {
      console.log('helper on select :', pubKey);
      setConnected(true);
    };
  }, [solong]);
  return (
    <SolongContext.Provider
      value={{
        solong,
        connected,
        wallet: solong,
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
    wallet: context.solong,
  };
}
