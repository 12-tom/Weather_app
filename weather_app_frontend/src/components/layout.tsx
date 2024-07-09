import { useEffect, useState } from 'react';
import Header from './header';
import { Outlet, useLocation } from "react-router-dom";

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    
    const [page, setPage] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/cities") {
            setPage("Go to Home")
            setLink("/")
        } else {
            setPage("Cities");
            setLink("/cities")
        }
    }, [location.pathname])

    return (
        <>
            <Header page={page} link={link} />
            <Outlet />
        </>
    );
};

export default Layout;