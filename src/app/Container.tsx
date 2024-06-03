export function Container({
  children,
  className,
  wide,
}: {
  children: React.ReactNode
  className?: string
  wide?: boolean
}) {
  let className2 = 'container relative mx-auto px-12 lg:px-24'
  if (wide) {
    className2 = 'container relative mx-auto px-6 lg:px-12'
  }
  return (
    <div className={className2 + ' ' + (className ? className : '')}>
      <div className='mx-auto max-w-6xl'>{children}</div>
    </div>
  )
}
