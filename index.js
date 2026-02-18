import { getStockData } from "./fakeStockAPI.js"

setInterval(function() {
    const stockData = getStockData()
    renderStockTicket(stockData)
}, 1500)

function renderStockTicket(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const { name, sym, price, time } = stockData
    
}