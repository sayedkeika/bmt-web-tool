import React from 'react'

export default function MySubmissions({ submissions, onResume, onDelete, onBack }) {
  return (
    <>
      <div className="header-container">
        <div className="nav-header">
          <div className="nav-left">
            <button className="nav" onClick={onBack}>Back</button>
          </div>
          <div className="nav-center">
            <h1>My Assessments</h1>
          </div>
          <div className="nav-right"></div>
        </div>
      </div>

      <div className="container">

        <table className="submissions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Scheme / Label</th>
              <th>Assessment Type</th>
              <th>Started At</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map(sub => (
              <tr key={sub.id}>
                <td>#{sub.id}</td>
                <td>{sub.metadata?.schemeName || '—'}</td>
                <td>{sub.survey?.name || 'Untitled'}</td>
                <td>{new Date(sub.started_at).toLocaleString()}</td>
                <td>
                  {sub.completed_at
                    ? <span className="status-tag completed">Completed</span>
                    : <span className="status-tag draft">Draft</span>}
                </td>
                <td>
                  <div className="submission-links">
                    {sub.completed_at ? (
                      <span className="edit-link" onClick={() => onResume(sub.id)}>Edit</span>
                    ) : (
                      <>
                        <span className="resume-link" onClick={() => onResume(sub.id)}>Resume</span>
                        <span className="divider">|</span>
                        <span className="delete-link" onClick={() => onDelete(sub.id)}>Delete</span>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}