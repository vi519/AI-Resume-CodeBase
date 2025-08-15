import Providers from './Provider';
import './globals.css';

export const metadata = {
  title: 'Smart Resume',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
