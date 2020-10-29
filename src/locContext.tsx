import React from 'react';

export const LocaleContext = React.createContext([]);

export const LocaleContextProvider = (props) => {
  let loc = localStorage.getItem('locale')
    ? localStorage.getItem('locale')
    : 'en';

  const [locale, setLocale] = React.useState(loc);

  return (
    //@ts-ignore
    <LocaleContext.Provider value={[locale, setLocale]}>
      {props.children}
    </LocaleContext.Provider>
  );
};