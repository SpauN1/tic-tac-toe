import Image from 'next/image';
import logoSrc from './assets/logo.svg';
import { ArrowDownIcon } from './assets/arrow-down-icon';

import { Profile } from '../Profile';
import { UiButton } from '../../uikit/uiButton';

export const Header = () => {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 ">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
