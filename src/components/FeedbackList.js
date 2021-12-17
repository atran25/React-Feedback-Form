import { motion, AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import FeedBackItem from './FeedbackItem'
import FeedBackContext from '../context/FeedbackContext'

const FeedbackList = () => {
    const {feedback} = useContext(FeedBackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet.</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <FeedBackItem key={item.id} item={item}/>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList