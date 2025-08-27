import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/redux/ReduxProvider';
import { TanstackProvider } from '@/redux/TanstackProvider';
import { ToastProvider } from '@/redux/ToastProvider';
import { Layout } from '@/components/layout/Layout';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js App Router Boilerplate',
  description: 'A comprehensive Next.js 14+ boilerplate with App Router',
  keywords: 'next.js, react, typescript, boilerplate',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ReduxProvider>
          <TanstackProvider>
            <ToastProvider>
              <Layout>{children}</Layout>
            </ToastProvider>
          </TanstackProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}