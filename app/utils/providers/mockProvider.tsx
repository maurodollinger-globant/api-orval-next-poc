// app/utils/InitMock.tsx
'use client';

import { useEffect } from 'react';

export default function MockProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@/app/mocks/browser').then(({ worker }) => worker.start());
    }
    // return () => {
    //   if (typeof window !== 'undefined') {
    //     import('@/app/mocks/browser').then(({ worker }) => worker.stop());
    //   }
    // }
  }, []);

  return null;
}