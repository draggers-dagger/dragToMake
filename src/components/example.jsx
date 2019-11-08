import React, { useState, useCallback } from 'react'
import Container from './Container'
export default function DragAroundNaive() {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ])
  return (
    <div>
      <Container hideSourceOnDrag={hideSourceOnDrag} />
    </div>
  )
}
