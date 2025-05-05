export type FooterArrowProps = {
  className?: string
}

export function FooterArrow({ className }: FooterArrowProps) {
  return (
    <div className={className}>
      <svg width="49" height="62" viewBox="0 0 49 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.20507 46.5999L1.15885 51.5457L6.05316 57.6336" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M47.4113 4.93942C47.2615 37.1299 26.8065 54.2233 4.14264 51.8572" stroke="currentColor" strokeDasharray="3 3"/>
      </svg>
    </div>
  )
}