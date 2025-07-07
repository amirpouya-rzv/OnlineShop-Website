'use client'
import React, { ReactNode } from 'react'
import Link from 'next/link'

type AppButtonProps = {
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  className?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
} & React.HTMLAttributes<HTMLButtonElement>

function AppButton({
  href,
  onClick,
  type = 'button',
  children,
  className = '',
  target,
  ...rest
}: AppButtonProps) {
    

  if (href) {
    return (
      <Link href={href} target={target} {...rest}>
        <div className={`${className}`} role="button">
          {children}
        </div>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={` ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default AppButton
