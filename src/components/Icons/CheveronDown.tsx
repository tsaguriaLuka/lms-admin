export default function IconChevronDown(
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
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.825 0L5 3.7085L1.175 0L0 1.1417L5 6L10 1.1417L8.825 0Z"
        fill="currentColor"
      />
    </svg>
  )
}
