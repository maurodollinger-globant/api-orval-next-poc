import { setupWorker } from 'msw/browser'; 
import { getPetMock } from '@/app/gen/client/pet/pet.msw';

export const worker = setupWorker(...getPetMock());