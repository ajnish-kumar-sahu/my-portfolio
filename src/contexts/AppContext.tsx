import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, Theme } from '../types';

interface AppAction {
  type: 'SET_THEME' | 'SET_ACTIVE_SECTION' | 'SET_LOADING' | 'TOGGLE_MOBILE_MENU';
  payload?: any;
}

const initialState: AppState = {
  theme: 'dark',
  activeSection: 'home',
  isLoading: true,
  isMobileMenuOpen: false,
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};