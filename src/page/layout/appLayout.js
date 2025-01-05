import React from 'react'
import './appLayout.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import RoutesComp from '../../routes'
import { BrowserRouter } from 'react-router-dom'

const AppLayout = () => {
    return (
        <BrowserRouter>
            <div id='layout'>
                <header>
                    <Header />
                </header>
                <div id='body-app'>
                    <RoutesComp />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default AppLayout