export function Container({
  children,
  className,
  wide,
}: {
  children: React.ReactNode
  className?: string
  wide?: boolean
}) {
  let className2 = 'container relative mx-auto px-4 sm:px-6 md:px-12 lg:px-24'
  if (wide) {
    className2 = 'container relative mx-auto '
  }
  return (
    <div className={className2 + ' ' + (className ? className : '')}>
      <div className='mx-auto'>{children}</div>
    </div>
  )
}
