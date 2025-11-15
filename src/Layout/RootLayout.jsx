import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Page/Shared/Navbar/Navbar';
import Footer from '../Page/Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
           <main className='flex-1'>
            <Outlet></Outlet> 
           </main>
          <section>
             <Footer></Footer>
          </section>
        </div>
    );
};

export default RootLayout;