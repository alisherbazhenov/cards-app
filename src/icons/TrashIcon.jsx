import PropTypes from 'prop-types'

export const TrashIcon = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <g data-name="Layer 2">
        <path
          fill={color}
          d="M20 29h-8a5 5 0 0 1-5-5V12a1 1 0 0 1 2 0v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V12a1 1 0 0 1 2 0v12a5 5 0 0 1-5 5ZM26 9H6a1 1 0 0 1 0-2h20a1 1 0 0 1 0 2Z"
        />
        <path
          fill={color}
          d="M20 9h-8a1 1 0 0 1-1-1V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1Zm-7-2h6V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1ZM14 23a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1ZM18 23a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1Z"
        />
      </g>
      <path d="M0 0h32v32H0z" style={{ fill: 'none' }} />
    </svg>
  )
}

TrashIcon.propTypes = {
  color: PropTypes.string,
}
