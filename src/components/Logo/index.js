import { useNavigate } from 'react-router-dom'

export function Logo({ isClickable = false }) {
  let navigate = useNavigate()

  const handleClick = () => {
    if (isClickable) navigate('/')
  }

  return (
    <svg
      width={267.931}
      height={122}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="116.034 14 267.931 122"
      style={{
        background: '0 0',
        cursor: isClickable ? 'pointer' : 'default',
        marginLeft: '-43px',
      }}
      preserveAspectRatio="xMidYMid"
      onClick={handleClick}
    >
      <defs>
        <linearGradient
          id="editing-glowing-gradient"
          x1={0.815}
          x2={0.185}
          y1={0.889}
          y2={0.111}
        >
          <stop offset={0} stopColor="#f0f5f6" />
          <stop offset={1} stopColor="#a2b4bc" />
        </linearGradient>
        <filter
          id="editing-glowing"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={10} />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#editing-glowing)">
        <path
          d="M30.21-33.92q-5.19 0-8.96-1.73L19.2-25.28h12.35q0 3.39-1.69 5.54-1.7 2.14-4.77 2.14-3.33 0-6.4-1.22-.64-.25-.71-.32L14.34 0H.38l8.13-42.24h28.55q0 3.9-1.83 6.11-1.82 2.21-5.02 2.21Zm30.72 23.1q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11T42.59.32Q40-.64 38.27-2.43q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92Zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63Zm25.73-8.96q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.36 24.58Q98.3 3.2 93.57 8.13q-4.55 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.21.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.08-3.62 3.26-6.69Zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13Zm40.83 9.54q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78Zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3 0-4.89-1.28-1.89-1.28-1.89-3.78Zm39.87 4.42q.9-1.54.9-3.2 0-2.94-1.79-2.94-2.76 0-3.91 5.63l-.96 4.99h5.83l-.39 2.88h-6.01L141.06 0l-12.93 1.28 6.14-31.04h-4.54l.57-2.88h4.48l1.35-5.06q1.15-4.67 6.08-6.84 3.58-1.54 9.6-1.54 6.01 0 8.7 1.54 2.69 1.53 2.69 3.58t-1.6 3.33q-1.6 1.28-3.39 1.28-3.52 0-5.06-.77Zm18.31 14.66q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7Z"
          fill="url(#editing-glowing-gradient)"
          transform="translate(159.28 104.76)"
        />
      </g>
      <style />
    </svg>
  )
}
