import React, { Component } from 'react'
import Highlight from 'react-highlight'


class StockPrices extends Component {
  state = {
    prices: [10, 7, 5, 8, 11, 9],
    maxProfit: ''
  }

  getMaxProfit = (stockPrices) => {
    const highPriceTime= stockPrices.indexOf(Math.max(...stockPrices))
    const lowPriceTime = stockPrices.indexOf(Math.min(...stockPrices))

    if(stockPrices.length <= 1){
      throw new Error('Getting a profit requires at least 2 prices')
    }

    if(lowPriceTime < highPriceTime ) {
      this.setState({ maxProfit: stockPrices[highPriceTime] - stockPrices[lowPriceTime] })
    } else {
      for(let i=0; i < stockPrices.length; i++){
        let maxProfits = []
        maxProfits.push(stockPrices[i+1] - stockPrices[i])
        this.setState({ maxProfit: Math.max(maxProfits) })
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Max Daily Profit</h1>
        <div className="description-container">
          <div className="description-container__instructions">
            <strong><p>Instructions:</p></strong>
            <p>
              Write an efficient function that takes stockPrices and returns the
              best profit I could have made from one purchase and one sale of one
              share of Apple stock yesterday.
              <br/>
              <strong>Example Prices:</strong> [10, 7, 5, 8, 11, 9]
              <br/>
              <strong>Output:</strong> 6 (buy at 5 sell at 11)
            </p>
          </div>
          <div className="description-container__required">
          <strong><p>Requirments:</p></strong>
            <ul>
              <li>Accept an array of numbers</li>
              <li>Return max profit from buying once and selling once</li>
            </ul>
          </div>
        </div>
        <div className="code-block">
          <h5>My Solution:</h5>
          <Highlight language="javascript">
            {`
              getMaxProfit = (stockPrices) => {
                const highPriceTime= stockPrices.indexOf(Math.max(...stockPrices))
                const lowPriceTime = stockPrices.indexOf(Math.min(...stockPrices))

                if(stockPrices.length <= 1){
                  throw new Error('Getting a profit requires at least 2 prices')
                }

                if(lowPriceTime < highPriceTime ) {
                  return stockPrices[highPriceTime] - stockPrices[lowPriceTime]
                } else {
                  for(let i=0; i < stockPrices.length; i++){
                    let maxProfits = []
                    maxProfits.push(stockPrices[i+1] - stockPrices[i])
                    return Math.max(maxProfits)
                  }
                }
              }
            `}
          </Highlight>
        </div>

        <div className="example-app">
          <div className="example-app__inputs">
            <p>Stock Prices Today: [10, 7, 5, 8, 11, 9]</p>
            <button onClick={() => this.getMaxProfit(this.state.prices)}>Submit</button>
          </div>
          <div className="example-app__answer">
            <h5>The Max Profit is:<br/>{this.state.maxProfit}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default StockPrices