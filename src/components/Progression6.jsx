import React, { Component } from 'react'

export default class Progression6 extends Component {
    render() {
      const {data}=this.props
      let filteredData=data.filter(item=>item.user_type==="Designer")
      let reducedData=filteredData.reduce((a,b)=>a.years+b.years)
      console.log(reducedData);
    return (
      <div style={{border:"1px dashed black"}}>
        <h1>Progression 6</h1>
        <input value={reducedData} type="text" />
      </div>
    )
  }
}