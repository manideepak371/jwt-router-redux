import {Router,Routes,Route} from 'react-router-dom'
import Accounts from './accounts'
import Authorize from './authorize'
import Home from './home'
import Login from './login'
import PageLinks from './pagelinks'
import Placements from './placements'
import Head from './head'
import StudentProfile from './studentprofile'

function Routing(){
    return(
        <>
            <PageLinks/>
            <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='login' element={<Login/>}></Route>

                    <Route path='/' element={<Authorize/>}>
                        <Route path='accounts' element={<Accounts/>}></Route>
                    </Route>
                    <Route path='/' element={<Authorize/>}>
                        <Route path='placements' element={<Placements/>}></Route>
                    </Route>
                    <Route path='/' element={<Authorize/>}>
                        <Route path='student/:name' element={<StudentProfile/>} ></Route>
                    </Route>
                    <Route path='/' element={<Authorize/>}>
                        <Route path='head' element={<Head/>}></Route>
                    </Route>
                    
                </Routes>
        </>
    )
}

export default Routing