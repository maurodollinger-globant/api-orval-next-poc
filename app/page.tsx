import Pets from './pets';
import PetsClient from './pets-client';

export default  function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pets />
      <PetsClient/>
    </main>
  );
}
