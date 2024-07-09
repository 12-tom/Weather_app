import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    page: string;
    link: string;
};

const Header: React.FC<Props> = ({page, link}) => {

    return (
        <header className="p-4 bg-secondary relative flex item-center justify-between">
            <div className="text-back text-[40px] font-[MontsBold]">Weather App</div>
            <button className="my-2 mx-2 p-2 bg-primary rounded-lg text-back text-[22px] font-[MontsLight] border border-border">
                <Link to={link}>{page}</Link></button>
        </header>
    )
}

export default Header;