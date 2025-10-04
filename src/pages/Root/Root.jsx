import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;