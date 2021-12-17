import React, { useContext } from 'react'
import FeedBackContext from '../context/FeedbackContext'

const FeedBackStats = () => {
    const { feedback } = useContext(FeedBackContext)

    const averageRating = (feedback.reduce((currentSum, item) => (item.rating + currentSum) , 0) / feedback.length).toFixed(1).replace(/[.,]0$/,'')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
        </div>
    )
}

export default FeedBackStats;