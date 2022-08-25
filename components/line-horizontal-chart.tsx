import React from 'react'
import { Line } from 'react-chartjs-2'

export const LintHorizontalChart = () => {
  return (
    <div className={'line-chart'}>
      <Line
        data={{
          datasets: [
            {
              data: [],
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: 'realtime',
            },
          },
        }}
      />
    </div>
  )
}