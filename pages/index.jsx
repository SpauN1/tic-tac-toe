import { Header } from '../components/Header';
import { GameTitle } from '../components/Game';

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[616px]">
        <GameTitle />
      </main>
    </div>
  );
}
