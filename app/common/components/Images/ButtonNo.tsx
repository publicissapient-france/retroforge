export type ButtonNoProps = {
  className?: string
}

export function ButtonNo({ className }: ButtonNoProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path d="M0.425064 2.50308C-0.137436 1.94058 -0.137436 1.00439 0.425064 0.422226C1.00723 -0.140274 1.92375 -0.140274 2.50592 0.422226L14.9924 12.9297L27.4998 0.422226C28.0623 -0.140274 28.9985 -0.140274 29.5597 0.422226C30.1418 1.00439 30.1418 1.94189 29.5597 2.50308L17.0732 14.9908L29.5597 27.4983C30.1418 28.0608 30.1418 28.997 29.5597 29.5791C28.9972 30.1416 28.061 30.1416 27.4998 29.5791L14.9924 17.0717L2.50592 29.5791C1.92375 30.1416 1.00723 30.1416 0.425064 29.5791C-0.137436 28.997 -0.137436 28.0595 0.425064 27.4983L12.9115 14.9908L0.425064 2.50308Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="30" height="30" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}