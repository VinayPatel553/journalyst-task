import { Line } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const ChartCard = ({ data }) => {
  const chartData = {
    labels: data.recentTrades.map((t) => t.symbol),
    datasets: [
      {
        label: "Recent Trade Returns (%)",
        data: data.recentTrades.map((t) => t.percent),
        borderColor: "blue",
        backgroundColor: "navyblue",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Performance Curve</Card.Title>
        <Line data={chartData} />
      </Card.Body>
    </Card>
  );
};

export default ChartCard;
