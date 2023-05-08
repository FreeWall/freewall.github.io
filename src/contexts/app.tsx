import { i18nextLocale } from '@/utils/i18next';
import { createContext, ReactNode, useContext } from 'react';
import { IconType } from 'react-icons/lib';
import { appContextData } from './app.data';

export type Technology =
  | 'PHP'
  | 'MySQL'
  | 'Magento'
  | 'Redis'
  | 'JS'
  | 'TS'
  | 'React'
  | 'Next.js'
  | 'Java'
  | 'jQuery'
  | 'Nette'
  | 'Pawn'
  | 'HTML'
  | 'C';

export interface ProjectImage {
  source: string;
  thumbnail: string;
}

export interface ProjectProps {
  name: string;
  subtitle: Record<i18nextLocale, string>;
  years: string;
  type: Record<i18nextLocale, string>;
  url?: string;
  description?: Record<i18nextLocale, string>;
  technologies?: Technology[];
  thumbnail?: string;
  images?: { source: string; thumbnail: string }[];
  onGalleryClick?: () => void;
}

export interface AppContextProps {
  author: {
    fullname: string;
    label: string;
    address: string[];
    email: string;
    phone: string;
    city: string;
  };
  links: {
    name: string;
    url: string;
    icon: IconType;
  }[];
  projects: ProjectProps[];
}

export function useApp() {
  return useContext(AppContext);
}

export const AppContext = createContext<AppContextProps>(appContextData);

export function AppProvider(props: {
  props: AppContextProps;
  children: ReactNode;
}) {
  if (!props.props) {
    props = {
      props: appContextData,
      children: props.children,
    };
  }

  return (
    <AppContext.Provider value={{ ...props.props }}>
      {props.children}
    </AppContext.Provider>
  );
}
