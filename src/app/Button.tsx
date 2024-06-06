import Class from 'classnames'

// ====================
// === SignUpButton ===
// ====================

export type Display = 'filled' | 'outlined'

export interface ButtonProps {
  href: string
  className?: string
  style?: React.CSSProperties
  display?: Display
  children: React.ReactNode
}

export function Button({href, className = '', display, children, style}: ButtonProps) {
  const styleCls = display === 'outlined' ? 'ring-1 ring-inset ring-primary' : 'bg-accent'
  return (
    <a href={href} target='_blank'>
      <div
        className={Class(
          styleCls,
          'flex-shrink-0 rounded-xl text-center px-3.5 py-2.5 text-sm font-semibold',
          className,
        )}
        style={style}
      >
        {children}
      </div>
    </a>
  )
}

export interface SignUpButtonProps {
  className?: string
  style?: React.CSSProperties
  display?: Display
}

export function SignUp(props: SignUpButtonProps) {
  return (
    <Button
      href='https://docs.google.com/forms/d/e/1FAIpQLScATv7vkHNTgPi_boCYySV_H4m0E-WW2L04B_vkhYPkPwx_Kg/viewform'
      {...props}
    >
      Sign up for beta access
    </Button>
  )
}

export function SignUpWithDiscount(props: SignUpButtonProps) {
  return (
    <Button
      className='leading-7'
      href='https://docs.google.com/forms/d/e/1FAIpQLScATv7vkHNTgPi_boCYySV_H4m0E-WW2L04B_vkhYPkPwx_Kg/viewform'
      {...props}
    >
      <div>Sign up for beta access</div>
      <div className='font-normal text-sm opacity-80 pb-1'>with 30% lifetime discount</div>
    </Button>
  )
}

export function SubmitPluginIdea(props: SignUpButtonProps) {
  return (
    <Button
      href='https://docs.google.com/forms/d/e/1FAIpQLSfbZevQar_8UUM1zKMwLAWzyh8UijLRQfyjEhlZ9tp8V2v4LA/viewform'
      {...props}
    >
      Submit your idea
    </Button>
  )
}
