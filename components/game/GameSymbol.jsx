import { GAME_SYMBOLS } from './constants';
import { CrossIcon } from './assets/icon/cross-icon';
import { SquareIcon } from './assets/icon/square-icon';
import { TriangleIcon } from './assets/icon/triangle-icon';
import { ZeroIcon } from './assets/icon/zero-icon';

export const GameSymbol = ({ symbol, className }) => {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
};
