import React, { PropsWithChildren, useContext } from 'react'
import { Utils } from '../utils';

const IsMobileContext = React.createContext({});

function IsMobileProvider({ children }: PropsWithChildren) {

  const isMobile = Utils.IsMobile();

  return (
    <IsMobileContext.Provider value={isMobile}>
      { children }
    </IsMobileContext.Provider>
  )
}

function useIsMobile() {
  const isMobileContext = useContext(IsMobileContext);
  return isMobileContext;
}


// eslint-disable-next-line react-refresh/only-export-components
export { IsMobileProvider, useIsMobile }