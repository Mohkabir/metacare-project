import React from 'react'
import date from "../assets/images/agent-inbox.png"
import Graph from "../components/Graph"

const GraphSection = () => {

  const efficiencyAnalytics = [
    {
      title: "Average response Time",
      color: "#F05D23",
      averageText: "Average Response Time",
      averageTime: "30 Mins",
      responseTime: "1 Hour 30 Mins"
    },
    {
      title: "Replies per resolution ",
      color: "#3E68FF",
      averageText: "Average Replies",
      averageTime: "30 Mins",
      responseTime: "1 Hour 30 Mins"
    },
    {
      title: "Average resolution time",
      color: "#FB6491",
      averageText: "Average Resolution Rate",
      averageTime: "30 Mins",
      responseTime: "1 Hour 30 Mins"
    },
    {
      title: "First contact resolution rate",
      color: "#07C9E2",
      averageText: "Average Contact Rate",
      averageTime: "30 Mins",
      responseTime: "1 Hour 30 Mins"
    }
  ]
  return (
    <div className='graphSection'>
      {efficiencyAnalytics.map((analytic, index) => (
        <div key={index} className='graph_wrapper'>
        <div className="graphCard">
          <div className='graphBox'>
            <div className='graphHead'>
              <div>
                <h3>{analytic.title}</h3>
                <span>+4.14% </span>
              </div>
              <div>
                <p>
                  <span 
                    className='square' 
                    style={{background: `${analytic.color}`}}>
                  </span>
                  <span><strong>High Priority</strong></span>
                </p>
                <div className='date'>
                  <span><strong>This Month</strong></span>
                  <img src={date} alt="date" />
                  <input type="date" />
                </div>
              </div>
            </div>
            <div className='graph'>
              <Graph analytic={analytic} />
            </div>
          </div>

          <div className='timeBox'>
            <div>
              <p>{analytic.averageText}</p>
              <h1>{analytic.averageTime}</h1>
            </div>
            <div>
              <p>Response Time</p>
              <h1>{analytic.responseTime}</h1>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}

export default GraphSection