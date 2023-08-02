import React from 'react'
import './trends.scss'
const Trends = (props) => {
  return (
    <div>
      <div className="trends">
        <h2>Trending in {props.course}</h2>
        <div >
            <iframe width="260" height="150" src="https://www.youtube.com/embed/st7qtH8ysCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="260" height="150" src="https://www.youtube.com/embed/TTHtrXufilk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="260" height="150" src="https://www.youtube.com/embed/TTHtrXufilk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Trends
