export default function IconBell(
  {
    width = 24,
    height = 24
  }: {
    width?: string | number,
    height?: string | number
  }
) {
  return (
    <svg
      width={ width }
      height={ height }
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7218 20.6154V14.4615C19.7218 10.6831 17.7034 7.52 14.1834 6.68308V5.84615C14.1834 4.82462 13.3587 4 12.3372 4C11.3157 4 10.491 4.82462 10.491 5.84615V6.68308C6.95874 7.52 4.95259 10.6708 4.95259 14.4615V20.6154L3.3649 22.2031C2.58951 22.9785 3.13105 24.3077 4.22643 24.3077H20.4357C21.5311 24.3077 22.0849 22.9785 21.3095 22.2031L19.7218 20.6154Z"
        fill="currentColor"
      />

      <rect
        x="20"
        width="6"
        height="6"
        rx="3"
        fill="#E34A4A"
      />

      <ellipse
        cx="12.5"
        cy="24"
        rx="3.5"
        ry="3"
        fill="currentColor"
      />
    </svg>
  )
}
