import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={session?.user} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}