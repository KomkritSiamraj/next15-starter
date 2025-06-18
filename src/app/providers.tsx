'use client';

import { useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      import('@/mocks/browser').then(({ worker }) => {
        worker.start({
          onUnhandledRequest: 'bypass', // ไม่แสดง warning สำหรับ unhandled requests
        });
      });
    }
  }, []);

  return <>{children}</>;
} 