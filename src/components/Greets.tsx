import React from 'react'

type Props = {
  name: string
  times?: number
}

const Greets: React.FC<Props> = props => {
  const { name, times = 1 , children} = props

  return (
    <span>
      {
        [...Array(times)].map((_, i) => (
          <p key={i}>Hello, {name}! {children}</p>
        ))
      }
    </span>
  )
}

export default Greets