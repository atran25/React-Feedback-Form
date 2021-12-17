import { FaTimes, FaEdit } from 'react-icons/fa'
import React, { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedBackContext from '../context/FeedbackContext'

const FeedBackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedBackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='purple'/>
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem