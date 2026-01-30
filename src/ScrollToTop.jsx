
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Se c'è un hash, aspetta un attimo (per il render) e scrolla all'elemento
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Altrimenti scrolla in cima
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
