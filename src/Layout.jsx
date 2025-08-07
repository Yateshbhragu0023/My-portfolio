import React from 'react'
import Header from './Comon/header'
import { Outlet } from 'react-router-dom'
import Footer from './Comon/Footer'

export default function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>

    )
}
