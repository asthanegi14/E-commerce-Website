import Navbar from './components/Nabvar';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

export default function App() {
    return (
        <div className='relative sm:-8 p-4 dark:bg-gray-900 min-h-screen'>
            <Navbar />
            <Header />
            <Cart />
            <Footer />
        </div>
    )
}