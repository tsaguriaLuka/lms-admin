export default function IconUserBadge(
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3353_222148)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 32C24.8368 32 32 24.8368 32 16C32 7.16322 24.8368 0 16 0C7.16322 0 0 7.16322 0 16C0 24.8368 7.16322 32 16 32ZM29.6928 20.5019C30.1582 19.0855 30.41 17.5722 30.41 16C30.41 8.04138 23.9586 1.59005 16 1.59005C9.78233 1.59005 4.48463 5.52763 2.46442 11.0453C4.48479 5.52793 9.78234 1.59063 15.9998 1.59063C23.9584 1.59063 30.4097 8.04196 30.4097 16.0006C30.4097 17.5725 30.1581 19.0857 29.6928 20.5019Z"
          fill="#1F44EA"
        />

        <path
          d="M15.9996 7.19922C12.8244 7.19922 10.2474 9.78555 10.2474 12.9723C10.2474 16.0974 12.6863 18.6376 15.9229 18.7299H16.199C17.688 18.6808 19.0997 18.0527 20.1358 16.9784C21.172 15.904 21.7514 14.4675 21.7518 12.9723C21.7518 9.78555 19.1748 7.19922 15.9996 7.19922ZM25.5898 24.588C26.2632 25.56 25.8727 26.8442 24.9117 27.5334C22.4024 29.3333 19.3272 30.3992 15.9996 30.3992C12.672 30.3992 9.59683 29.3333 7.08748 27.5334C6.12656 26.8442 5.73754 25.5604 6.413 24.5898C6.91307 23.8712 7.59309 23.2161 8.42203 22.6556C12.6096 19.8538 19.4203 19.8538 23.5772 22.6556C24.4141 23.2156 25.0925 23.8701 25.5898 24.588Z"
          fill="white"
        />
      </g>

      <defs>
        <clipPath id="clip0_3353_222148">
          <rect
            width="32"
            height="32"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>

  )
}
