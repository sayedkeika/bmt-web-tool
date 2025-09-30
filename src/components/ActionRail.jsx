import React from 'react'

export default function ActionRail({ actions = [], className = '' }) {
  return (
    <aside
      className={`action-rail rail-compact ${className}`}
      role="complementary"
      aria-label="Quick actions"
    >
      {actions.map(({ id, label, title, onClick, disabled, icon: Icon, imgSrc }, i) => {
        const visible = label ?? title
        const tooltip = title ?? label
        return (
          <button
            key={id || i}
            type="button"
            className="rail-item"
            onClick={onClick}
            disabled={disabled}
            title={tooltip}
            aria-label={tooltip}
          >
            <span className="rail-icon">
              {Icon ? <Icon /> : imgSrc ? <img src={imgSrc} alt="" aria-hidden="true" /> : null}
            </span>
            <span className="rail-text">{visible}</span>
          </button>
        )
      })}
    </aside>
  )
}