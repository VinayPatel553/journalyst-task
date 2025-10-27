const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const analyticsData = {
  winRate: 72.5,
  profitFactor: 1.85,
  averageReturn: 4.2,
  maxDrawdown: 12.8,
  totalTrades: 150,
  winningTrades: 109,
  losingTrades: 41,
  longestWinStreak: 8,
  longestLossStreak: 4,
  sharpeRatio: 1.45,
  profitLoss: { currency: 12500, percentage: 14.8 },
  recentTrades: [
    { id: 1, symbol: "RELIANCE", result: "Profit", percent: 3.2 },
    { id: 2, symbol: "TCS", result: "Loss", percent: -2.1 },
    { id: 3, symbol: "HDFC", result: "Profit", percent: 5.0 },
    { id: 4, symbol: "ICICI", result: "Profit", percent: 1.9 },
    { id: 5, symbol: "INFYOSYS", result: "Loss", percent: -0.8 },
    { id: 6, symbol: "AIRTEL", result: "Profit", percent: 2.7 },
    { id: 7, symbol: "LIC", result: "Loss", percent: -1.3 },
    { id: 8, symbol: "ITC", result: "Profit", percent: 6.1 },
    { id: 9, symbol: "HUL", result: "Profit", percent: 3.8 },
    { id: 10, symbol: "SBI", result: "Loss", percent: -2.5 },
  ],
};

app.get("/analytics",(req,res)=>{
    res.json(analyticsData)
})

const port = 5000;
app.listen(port,()=>console.log("server started at port"+port));