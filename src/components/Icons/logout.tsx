export default function IconLogout(
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3151 3.23828C15.6313 4.18572 17.9998 7.24352 17.9998 10.861C17.9998 15.2537 14.4683 18.8281 10.0756 18.8281C5.68286 18.8281 2.1084 15.2537 2.1084 10.861C2.1084 7.24352 4.52014 4.18578 7.83607 3.23828V5.52079C5.72581 6.38217 4.26161 8.44926 4.26161 10.861C4.26161 14.091 6.84559 16.675 10.0756 16.675C13.2626 16.675 15.8895 14.091 15.8895 10.861C15.8895 8.44926 14.3822 6.38201 12.3151 5.52079V3.23828Z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0763 1C10.7653 1 11.3682 1.60295 11.3682 2.29193V9.52714C11.3682 10.2593 10.7653 10.8191 10.0763 10.8191C9.34416 10.8191 8.74121 10.2592 8.74121 9.52714V2.29193C8.74121 1.60292 9.34416 1 10.0763 1Z"
        fill="currentColor"
      />
    </svg>
  )
}
