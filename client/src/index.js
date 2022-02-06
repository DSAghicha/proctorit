import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components'

ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path='/' element={ <Home/> }/>
        </Routes>
    </Router>,
    document.getElementById('root')
)