import React, { useContext, useEffect, useMemo, useState } from 'react';
import { notify } from './notifications';
import { useLocalStorageState } from './utils';

const SolongContext = React.createContext(null);

export function SolongProvider({ children }) {
  const solong = window.solong;

  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(false);
  useEffect(() => {
    console.log('trying to connect');
  }, [solong]);
  return (
    <SolongContext.Provider
      value={{
        solong,
        connected,
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
