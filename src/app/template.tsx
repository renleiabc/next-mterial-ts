//import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <div className={`text-center fade-in`}>{children}</div>;
}
