import React, { createContext, useState } from 'react'

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "test",
            rating: 1
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        boolean: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            const newFeedback = feedback.filter(item => (item.id !== id))
            setFeedback(newFeedback)
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = feedback.length + 1
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        console.log(id, updItem)
        const updatedFeedback = feedback.map(item => {
            if (item.id === id) {
                return updItem
            } else {
                return item
            }
        })
        setFeedback(updatedFeedback)
    }

    return <FeedBackContext.Provider value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        feedbackEdit: feedbackEdit,
        updateFeedback: updateFeedback
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext;