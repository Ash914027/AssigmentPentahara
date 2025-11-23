import React, { useMemo, useState } from 'react'
import FeedbackItem from './FeedbackItem'
import { filterBy } from '../utils/filters'

export default function FeedbackList({ feedbacks, onDelete }) {
  const [keyword, setKeyword] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const filtered = useMemo(() => filterBy(feedbacks, { keyword, from, to }), [feedbacks, keyword, from, to])

  return (
    <div className="card list">
      <h2>Feedback Entries</h2>

      <div className="filters">
        <input placeholder="Keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>

      {filtered.length === 0 ? (
        <p>No feedback found.</p>
      ) : (
        <ul>
          {filtered.map((f) => (
            <FeedbackItem key={f.id} item={f} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  )
}
