import React, { useEffect, useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackService from './services/FeedbackService'

/**
 * App - Top level application component
 */
export default function App() {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    setFeedbacks(FeedbackService.getAll())
  }, [])

  const addFeedback = (entry) => {
    FeedbackService.save(entry)
    setFeedbacks(FeedbackService.getAll())
  }

  const deleteFeedback = (id) => {
    FeedbackService.deleteById(id)
    setFeedbacks(FeedbackService.getAll())
  }

  return (
    <div className="container">
      <h1>Feedback Collector</h1>
      <FeedbackForm onSubmit={addFeedback} />
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
    </div>
  )
}
