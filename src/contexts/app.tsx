import { createContext, ReactNode, useContext } from 'react';
import { FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export interface AppContextProps {
  author: {
    fullname: string;
    label: string;
    address: string[];
  };
  links: {
    name: string;
    url: string;
    icon: IconType;
  }[];
}

const defaultProps: AppContextProps = {
  author: {
    fullname: 'Michal Vaněk',
    label: '<web developer/>',
    address: ['Česká Bříza 87, 330 11 Plzeň', 'IČ: 03540430'],
  },
  links: [
    {
      name: 'info@michalvanek.cz',
      url: 'mailto:info@michalvanek.cz',
      icon: FaRegEnvelope,
    },
    {
      name: 'FreeWall',
      url: 'https://github.com/FreeWall',
      icon: FaGithub,
    },
  ],
};

export function useApp() {
  return useContext(AppContext);
}

export const AppContext = createContext<AppContextProps>({
  ...defaultProps,
});

export function AppProvider(props: {
  props: AppContextProps;
  children: ReactNode;
}) {
  if (!props.props) {
    props = {
      props: {
        ...defaultProps,
      },
      children: props.children,
    };
  }
  return (
    <AppContext.Provider value={{ ...props.props }}>
      {props.children}
    </AppContext.Provider>
  );
}
