import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedBackStats from './components/FeedbackStats'
import FeedBackForm from './components/FeedbackForm'
import AboutPage from './pages/aboutPage'
import { FeedBackProvider } from './context/FeedbackContext'
import AboutIcon from './components/AboutIcon'

const App = () => {
    return (
        <FeedBackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedBackForm/>
                                <FeedBackStats />
                                <FeedbackList/>
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIcon/>
                </div>
            </Router>
        </FeedBackProvider>
    )
}

export default App