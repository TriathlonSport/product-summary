import React, { memo } from 'react'

interface Props {
  width?: string | number
  height?: string | number
  title: string
}

function LogoPlaceholder({ width, height, title }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 142 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <rect width="142" height="80" fill="#F2F4F5" stroke="#E3E4E6" />
      <path
        d="M84.8156 47.5402L77.8157 33.9407C77.5479 33.4222 77.0282 33.0703 76.4349 33.0108C75.8434 32.9445 75.2572 33.1876 74.8844 33.6381L68.8854 40.9206L64.9707 38.386C64.5717 38.1293 64.08 38.0392 63.6162 38.1412C63.149 38.2432 62.7447 38.5271 62.4997 38.9249L57.2497 47.4246C56.9242 47.9499 56.9172 48.6026 57.227 49.1381C57.5367 49.6719 58.1195 50 58.7495 50H83.2494C83.8567 50 84.4184 49.694 84.7386 49.1925C85.0589 48.691 85.0851 48.0655 84.8156 47.5402Z"
        fill="#CACBCC"
      />
      <path
        d="M67.5 33C69.433 33 71 31.433 71 29.5C71 27.567 69.433 26 67.5 26C65.567 26 64 27.567 64 29.5C64 31.433 65.567 33 67.5 33Z"
        fill="#CACBCC"
      />
      <defs>
        <clipPath id="clip0">
          <rect width="127" height="65" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(LogoPlaceholder)