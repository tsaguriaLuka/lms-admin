export default function IconLink(
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
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.73032 11.6222L10.5103 4.63608H6.92336C6.45008 4.63608 6.09651 4.28019 6.09651 3.81804C6.09651 3.36275 6.47087 3 6.92336 3H12.6456C13.1128 3 13.4783 3.35242 13.5 3.82824L13.4998 9.50225C13.4998 9.96431 13.1464 10.3203 12.673 10.3203C12.2065 10.3203 11.8462 9.94366 11.8462 9.50225V5.6062L4.89428 12.7636C4.74379 12.9114 4.5146 13 4.30958 13C4.11433 13 3.90805 12.9179 3.74984 12.7607L3.74005 12.7515C3.4288 12.4585 3.41464 11.9547 3.73032 11.6222Z"
        fill="currentColor"
      />
    </svg>

  )
}
