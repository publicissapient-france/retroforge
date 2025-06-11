export type ButtonYesProps = {
  className?: string
}

export function ButtonYes({ className }: ButtonYesProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20L18 34L42 6" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  )
}