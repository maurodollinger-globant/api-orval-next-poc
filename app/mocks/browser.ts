import { setupWorker } from 'msw/browser'; 
import { getPetMock } from '@/app/gen/pet/pet.msw';

export const worker = setupWorker(...getPetMock());

