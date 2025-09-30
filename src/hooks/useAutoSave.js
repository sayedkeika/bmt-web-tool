import { useEffect, useRef } from 'react'
import api from '../api/api'

export const useAutoSave = (submissionId, answers, enabled) => {
  const timer = useRef()

  useEffect(() => {
    if (!enabled || !submissionId) return

    timer.current = setInterval(async () => {
      try {
        await api.patch(`/submissions/${submissionId}`, {
          answers,
          completed: false
        })
      } catch (err) {
        console.warn('Auto-save failed:', err)
      }
    }, 30000)

    return () => clearInterval(timer.current)
  }, [submissionId, answers, enabled])
}