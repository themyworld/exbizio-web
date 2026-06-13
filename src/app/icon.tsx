import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#4f46e5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <line x1="6" y1="11" x2="21" y2="11" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <polyline points="17,7 21,11 17,15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="21" x2="11" y2="21" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" />
          <polyline points="15,17 11,21 15,25" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
