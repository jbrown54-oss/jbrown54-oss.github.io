'use client'

import React, { useState, useEffect } from 'react'
import styles from '@/styles/debt-tracker.module.css'

interface DebtTrackerState {
  totalOwed: number
  amountPaid: number
}

export default function DebtTracker() {
  const TOTAL_DEBT = 2760
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState<DebtTrackerState>({ totalOwed: TOTAL_DEBT, amountPaid: 0 })
  const [inputValue, setInputValue] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  // Load from localStorage on mount and save when state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('debtTrackerState')
      if (saved) {
        setState(JSON.parse(saved))
      }
      setMounted(true)
    }
  }, [])

  // Save to localStorage whenever state changes (only after mount)
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('debtTrackerState', JSON.stringify(state))
    }
  }, [state, mounted])

  if (!mounted) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Study Abroad Debt Payoff</h1>
          <p className={styles.subtitle}>Spain 2025 - Unfulfilled Commitment</p>
        </div>
        <p className={styles.motivationText} style={{ textAlign: 'center', marginTop: '40px' }}>Loading...</p>
      </div>
    )
  }

  const remaining = Math.max(0, state.totalOwed - state.amountPaid)
  const percentage = (state.amountPaid / state.totalOwed) * 100

  const handleAddPayment = () => {
    const amount = parseFloat(inputValue)
    if (!isNaN(amount) && amount > 0) {
      setState({
        ...state,
        amountPaid: Math.min(state.amountPaid + amount, state.totalOwed),
      })
      setInputValue('')
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddPayment()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Study Abroad Debt Payoff</h1>
        <p className={styles.subtitle}>Spain 2025 - Unfulfilled Commitment</p>
      </div>

      <div className={styles.main}>
        {/* Circular Progress */}
        <div className={styles.progressWrapper}>
          <svg viewBox="0 0 200 200" className={styles.progress}>
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              className={styles.progressBg}
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              className={styles.progressCircle}
              style={{
                strokeDasharray: `${(percentage / 100) * 565.48} 565.48`,
              }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center text */}
          <div className={styles.progressCenter}>
            <div className={styles.percent}>{Math.round(percentage)}%</div>
            <div className={styles.label}>Paid</div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Total Owed</div>
            <div className={styles.statValue}>${state.totalOwed.toFixed(2)}</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.statLabel}>Amount Paid</div>
            <div className={`${styles.statValue} ${styles.paid}`}>${state.amountPaid.toFixed(2)}</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.statLabel}>Remaining</div>
            <div className={`${styles.statValue} ${styles.remaining}`}>${remaining.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      {remaining > 0 ? (
        <div className={styles.inputSection}>
          <div className={styles.inputWrapper}>
            <span className={styles.currencySymbol}>$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter amount earned"
              className={styles.input}
            />
          </div>
          <button
            onClick={handleAddPayment}
            disabled={!inputValue || parseFloat(inputValue) <= 0}
            className={styles.button}
          >
            Add Payment
          </button>

          {showSuccess && (
            <div className={styles.success}>
              ✓ Payment recorded
            </div>
          )}
        </div>
      ) : (
        <div className={styles.paidContainer}>
          <div className={styles.paidMessage}>
            <div className={styles.checkmark}>✓</div>
            <h2>Debt Fully Paid!</h2>
            <p>You have successfully paid off the study abroad fee.</p>
            <button
              onClick={() => {
                setState({ totalOwed: TOTAL_DEBT, amountPaid: 0 })
                setInputValue('')
              }}
              className={styles.resetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Motivational Section */}
      <div className={styles.motivation}>
        <h3>Progress Summary</h3>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className={styles.motivationText}>
          {remaining > 0
            ? `You need to earn $${remaining.toFixed(2)} more to clear this debt.`
            : 'Freedom achieved. This fee is behind you now.'}
        </p>
      </div>
    </div>
  )
}
