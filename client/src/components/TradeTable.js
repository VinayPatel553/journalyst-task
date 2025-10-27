// client/src/components/TradeTable.js
import React from "react";
import { Table, Badge } from "react-bootstrap";

const TradeTable = ({ trades }) => {
  return (
    <div>
      <h5 className="fw-bold mb-3">Recent 10 Trades</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Symbol</th>
            <th>Result</th>
            <th>Return (%)</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, i) => (
            <tr key={trade.id}>
              <td>{i + 1}</td>
              <td>{trade.symbol}</td>
              <td>
                <Badge bg={trade.result === "Profit" ? "success" : "danger"}>
                  {trade.result}
                </Badge>
              </td>
              <td
                className={
                  trade.percent >= 0 ? "text-success fw-semibold" : "text-danger fw-semibold"
                }
              >
                {trade.percent}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TradeTable;
