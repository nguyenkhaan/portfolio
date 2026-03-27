'use client';
import Link from 'next/link';
import Heading from './Header';
import { useState } from 'react';
import { NavbarMenuItems } from '../constants/app.constants';
const Navbar = () => {
    const [select, setSelect] = useState(NavbarMenuItems[0].title);

    return (
        <div className="w-full h-15 flex items-center justify-between">
            <div className="logo"></div>
            <div className="flex justify-center items-end h-full gap-10">
                {NavbarMenuItems.map((item, index) => {
                    return (
                        <Link key={index} href={item.link}>
                            <Heading
                                size={'md'}
                                onClick={() => setSelect(item.title)}
                                typoColor={
                                    select == item.title ? 'white' : 'gray'
                                }
                            >
                                {item.title}
                            </Heading>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
export default Navbar;
