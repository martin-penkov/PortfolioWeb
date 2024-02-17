import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  UserIcon,
  HomeIcon,
  Bars2Icon,
  XMarkIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

type SideNavigationItem = {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const SideNavigation = () => {
  const navigation = [
    { name: 'Home', to: '.', icon: HomeIcon },
    { name: 'Projects', to: './projects', icon: CodeBracketIcon }
  ].filter(Boolean) as SideNavigationItem[];
  const dispatch = useDispatch()

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink
          end={index === 0}
          key={item.name}
          to={item.to}
          className={clsx(
            'text-gray-300 hover:bg-gray-700 hover:text-white',
            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
          )}
          onClick={() => {   //testing the notification system
            dispatch({type: "ADD_NOTIFICATION", payload: {
              type: 'success',
              title: 'RABOTIII!!',
              message: 'Neshto random :)'
            }})
          }}
        >
          <item.icon
            className={clsx(
              'text-gray-400 group-hover:text-gray-300',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

type UserNavigationItem = {
  name: string;
  to: string;
  onClick?: () => void;
};

type MobileSidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
      <div className="h-full w-full bg-red-950">
        {/* <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main> */}
      </div>
  );
};
