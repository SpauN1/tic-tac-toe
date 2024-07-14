import { clsx } from 'clsx';

import { GameSymbol } from './game-symbol';

export function GameCell({ isWinner, toggleCell, symbol }) {
  return (
    <button
      className={clsx(
        'border border-gray-400 -ml-px -mt-px flex items-center justify-center',
        isWinner && 'bg-red-400/10'
      )}
      onClick={toggleCell}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
