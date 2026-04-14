import '../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
    title: 'Connective India',
    description: 'National Professional Ecosystem',
    icons: {
        icon: '/logoIcon1.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <LanguageProvider>
                    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                        <Header />
                        <main style={{ flex: 1 }}>
                            {children}
                        </main>
                        <Footer />
                    </div>
                </LanguageProvider>
            </body>
        </html>
    );
}
