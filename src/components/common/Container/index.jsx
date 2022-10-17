import React from 'react'
import clsx from "clsx"

const Container = ({ classes, children }) => {
  return (
    <div className={clsx(classes, "container")}>
      {children}
    </div>
  )
}

export default Container;