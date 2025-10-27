import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container,Row,Col, Spinner } from 'react-bootstrap';
import MetricCard from './components/MetricCard';
import ChartCard from './components/ChartCard';
import TradeTable from './components/TradeTable';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/analytics")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  if (!data)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" /> <p>Loading dashboard...</p>
      </div>
    );

  return (
    <Container fluid className="p-4">
      <h3 className="text-center mb-4 fw-bold text-decoration-underline">Trading Analytics Dashboard</h3>

      <Row xs={1} md={3} className="g-3">
        <MetricCard title="Win Rate (%)" value={data.winRate} />
        <MetricCard title="Profit Factor" value={data.profitFactor} />
        <MetricCard title="Avg Return (%)" value={data.averageReturn} />
        <MetricCard title="Max Drawdown (%)" value={data.maxDrawdown} />
        <MetricCard title="Total Trades" value={data.totalTrades} />
        <MetricCard title="Sharpe Ratio" value={data.sharpeRatio} />
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <ChartCard data={data} />
        </Col>
        <Col md={4}>
          <MetricCard
            title="P/L Breakdown"
            value={`₹${data.profitLoss.currency} (${data.profitLoss.percentage}%)`}
            color={data.profitLoss.percentage > 0 ? "success" : "danger"}
          />
          <MetricCard title="Winning Trades" value={data.winningTrades} />
          <MetricCard title="Losing Trades" value={data.losingTrades} />
          <MetricCard title="Longest Win Streak" value={data.longestWinStreak} />
          <MetricCard title="Longest Loss Streak" value={data.longestLossStreak} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <TradeTable trades={data.recentTrades} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;