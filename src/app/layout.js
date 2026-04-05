import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Go Baraka Sarl - Diversified Business Group',
  description: 'Go Baraka Sarl is a diversified business group operating across Logistics, Transport, Tourism, Trading, Digital Services, and Crypto Innovation sectors.',
  keywords: 'business group, logistics, transport, tourism, trading, digital services, crypto, investment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}