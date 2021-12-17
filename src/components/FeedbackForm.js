import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect'
import FeedBackContext from '../context/FeedbackContext';

const FeedBackForm = () => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedBackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            const editItem = feedbackEdit.item 
            setRating(editItem.rating)
            setText(editItem.text)
            setBtnDisabled(false)
        }
    }, [feedbackEdit])

    const handleTextChange = (event) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Review must be at least 10 characters")
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        console.log(event.target.value)
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
        }
        setText('')
        setRating(rating)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} initial={rating}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm;