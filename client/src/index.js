import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, LoginCandidate, PageNotFound, RegisterInstitute } from './pages'

ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path='/' element={ <Home/> }/>
            <Route exact path='/auth/candidate/login' element={ <LoginCandidate/> }/>
            <Route exact path='/auth/institute-signup' element={ <RegisterInstitute/> }/>
            <Route path='*' element={ <PageNotFound/> }/>
        </Routes>
    </Router>,
    document.getElementById('root')
)