import classNames from 'classnames'
import React, { ReactNode } from 'react'
import './Button.scss'

const Button = ({
  children,
  icon,
  disabled = false,
}: {
  children?: ReactNode
  icon?: ReactNode
  disabled?: boolean
}) => {
  const modifierClasses = classNames({
    'Button--disabled': disabled,
  })

  return (
    <button className={'Button ' + modifierClasses} disabled={disabled}>
      {icon && <span className="Button__icon">{icon}</span>}
      <span className="Button__label">{children}</span>
    </button>
  )
}

export default Button
