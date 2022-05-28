import { useState, useEffect } from "react";
import "../../assets/css/table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderServices from "../../services/orderServices";

const TableList = () => {
  const [rows, setRows] = useState([]);

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "short",
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        page: 1,
        limit: 5,
      };
      const result = await OrderServices.getOrder(params);

      setRows(
        result.data.map((item) => {
          const monthNumber = toMonthName(
            new Date(item.created).getMonth() + 1
          );
          return {
            id: item._id,
            customer: item.user_name,
            amount: item.details.reduce((acc, i) => {
              return acc + i.price * i.quantity;
            }, 0),
            date: `${new Date(item.created).getDate()} ${monthNumber}`,
            method: item.payment_type,
            status: item.state,
          };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>

              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}đ</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
