import { motion, AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import FeedBackItem from './FeedbackItem'
import FeedBackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
    const {feedback, isLoading } = useContext(FeedBackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet.</p>
    }

    return isLoading ? 
    <Spinner/> 
    : 
    <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map(item => (
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedBackItem key={item.id} item={item}/>
                </motion.div>
            ))}
        </AnimatePresence>
    </div>
}

export default FeedbackList