import React, { Component } from 'react'
import Highlight from 'react-highlight'
import './styles.css'


class StockPrices extends Component {
  state = {
    stocks: [10, 7, 5, 8, 11, 9],
    maxProfit: '',
    buyPrice: '',
    sellPrice: ''
  }

  getMaxProfit = (stocks) => {
    const highestPrice = Math.max(...stocks)
    const lowestPrice = Math.min(...stocks)
    const highestPriceTime= stocks.indexOf(highestPrice)
    const lowestPriceTime = stocks.indexOf(lowestPrice)

    if(stocks.length <= 1){
      throw new Error('Getting a profit requires at least 2 stocks')
    }

    if(this.lowPriceTime < this.highestPriceTime ) {
      const best = highestPrice - lowestPrice
      return this.setState({
        maxProfit: best,
        buyPrice: this.lowestPrice,
        sellPrice: this.highestPrice
      })
    } else {
      let best = {
        maxProfit: stocks[1] - stocks[0],
        buyPrice: stocks[0],
        sellPrice: stocks[1]
      }
      for(let i=0; i < stocks.length; i++) {
        for (let j=i+1; j < stocks.length; j++) {
          let currBest = stocks[j] - stocks[i]
          if( currBest > best.maxProfit) {
            best.maxProfit = currBest
            best.buyPrice = stocks[i]
            best.sellPrice = stocks[j]
          }
        }
      }
      return this.setState(best)
    }
  }

  render() {
    const { maxProfit, buyPrice, sellPrice } = this.state
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
              getMaxProfit = (stocks) => {
                const highestPrice = Math.max(...stocks)
                const lowestPrice = Math.min(...stocks)
                const highestPriceTime= stocks.indexOf(highestPrice)
                const lowestPriceTime = stocks.indexOf(lowestPrice)

                if(stocks.length <= 1){
                  throw new Error('Getting a profit requires at least 2 stocks')
                }

                if(this.lowPriceTime < this.highestPriceTime ) {
                  const maxProfit = highestPrice - lowestPrice
                  return maxProfit
                } else {
                  let maxProfit = stocks[1] - stocks[0]
                  for(let i=0; i < stocks.length; i++) {
                    for (let j=i+1; j < stocks.length; j++) {
                      let currBest = stocks[j] - stocks[i]
                      if( currBest > test.maxProfit) {
                        maxProfit = currBest
                      }
                    }
                  }
                  return maxProfit
                }
              }
            `}
          </Highlight>
        </div>

        <div className="example-app">
          <div className="example-app__inputs">
            <p>Stock Prices Today: [10, 7, 5, 8, 11, 9]</p>
            <button onClick={() => this.getMaxProfit(this.state.stocks)}>Submit</button>
          </div>
          {maxProfit &&
            <div className="example-app__answer stocks">
              <h5>{`Best Profit: $${maxProfit}`}</h5>
              <h5>{`Buy Price: $${buyPrice}`}</h5>
              <h5>{`Sell Price $${sellPrice}`}</h5>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default StockPrices