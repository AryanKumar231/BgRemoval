import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className="max-w-[1120px] xl:mx-auto mx-8">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout