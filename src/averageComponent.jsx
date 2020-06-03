import React from "react"
import { average } from "./averageService"

export const AverageComponent = () => {
  const [avg, setAvg] = React.useState(0)

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30]
    setAvg(average(scores))
  }, [])

  return (
    <div>
      <span>Students average: { avg }</span>
    </div>
  )
}
