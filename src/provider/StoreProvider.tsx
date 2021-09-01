import React, { createContext, FC, useContext } from 'react'

import store from '../stroe'
import AppStore from '../stroe/AppStore'

type storeType = typeof store

const StoreContext = createContext<storeType | undefined>(undefined)

export const StoreProvider: FC = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

export function useStore<K extends keyof storeType>(storeName: K): storeType[K] {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }
  return context[storeName]
}
