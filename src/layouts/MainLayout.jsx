import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
			<ToastContainer autoClose={2000} ></ToastContainer>
		</>
	);
};

export default MainLayout;