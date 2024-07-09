export default function IconChevronLeft(
  {
    width = 24,
    height = 24,
  }: {
    width?: string | number,
    height?: string | number
  }
) {
  return (
    <svg width={ width } height={ height } viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.77821 8.05448L1.22266 4.49891L4.77821 0.943359"
        stroke="#5C5F79"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
