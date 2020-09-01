import React from 'react';

export const LocaleContext = React.createContext();

export const LocaleContextProvider = (props) => {
  let loc = localStorage.getItem('locale')
    ? localStorage.getItem('locale')
    : 'en';

  if (loc === 'zh') {
    loc = 'zh-CN';
  }

  const [locale, setLocale] = React.useState(loc);

  return (
    <LocaleContext.Provider value={[locale, setLocale]}>
      {props.children}
    </LocaleContext.Provider>
  );
};
