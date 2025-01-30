'use client';
import { Pet } from '@/app/gen/models';
import { useFindPetsByStatus } from '@/app/gen/pet/pet';

export default function Pets() {
  const { data, status } = useFindPetsByStatus({status: 'available'});
  
  const pets = Array.isArray(data?.data) ? data.data : [];

  return (
    <div className='flex flex-col gap-6 items-center justify-center'>
      <h1 className="text-4xl">Pets by server actions</h1>

      <div className="grid grid-cols-3 gap-4" key='pets'>
        {pets.map((pet: Pet, index: number) => (
          <div key={pet.id ?? index} className="border p-4 rounded shadow-md">
            <h3 className="text-lg font-medium">{pet.name}</h3>
            <p><strong>Type:</strong> {pet.status}</p>
            <p><strong>Category:</strong> {pet.category?.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl">Status: {status}</h2>
    </div>
  );
}