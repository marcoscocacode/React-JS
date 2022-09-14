import { BrowserRouter, Link } from 'react-router-dom'

import './styles/App.css'

import AppRoutes from './Routes'


const App = () => {   
    return (
        <div className ="wrapper">
            <BrowserRouter>
                <nav>
                    <Link to='/' >Meu Feed</Link>
                    <Link to='/most-viewed' >Mais Vistos</Link>
                </nav>
                <AppRoutes/>
            </BrowserRouter>
        </div>
    )
}



export default App