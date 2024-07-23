import { GAME_SYMBOLS } from './constants';
import { CrossIcon } from './assets/cross-icon';
import { SquareIcon } from './assets/square-icon';
import { TriangleIcon } from './assets/triangle-icon';
import { ZeroIcon } from './assets/zero-icon';

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
