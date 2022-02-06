import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, PageNotFound } from './components'

ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path='/' element={ <Home/> }/>
            <Route path='*' element={ <PageNotFound/> }/>
        </Routes>
    </Router>,
    document.getElementById('root')
)