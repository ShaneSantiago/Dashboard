import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Home = () => {
  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "12px",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  const totalUsersData = {
    labels: Array(20).fill(""),
    datasets: [
      {
        data: [45, 70, 60, 80, 90, 50, 65, 85, 72, 60, 70, 55, 45, 70, 80, 60, 70, 90],
        backgroundColor: "#2979FF",
        borderRadius: 4,
      },
    ],
  };

  const totalOrdersData = {
    labels: Array(10).fill(""),
    datasets: [
      {
        data: [90, 40, 50, 20, 30, 50, 60, 20],
        borderColor: "#FF3D57",
        tension: 0.4,
        fill: true,
        backgroundColor: "rgba(255, 61, 87, 0.1)",
      },
    ],
  };

  const totalSalesData = {
    labels: Array(10).fill(""),
    datasets: [
      {
        data: [60, 50, 70, 60, 90, 80, 100, 70],
        backgroundColor: "#FFB300",
        borderRadius: 4,
      },
    ],
  };

  const totalMarketingData = {
    labels: Array(10).fill(""),
    datasets: [
      {
        data: [30, 50, 40, 60, 80, 70, 60, 50],
        borderColor: "#2979FF",
        tension: 0.4,
        fill: true,
        backgroundColor: "rgba(41, 121, 255, 0.1)",
      },
    ],
  };

  const visitorData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Page Views",
        data: [100, 60, 140, 30, 80, 120, 100, 90, 130, 110, 140, 50],
        backgroundColor: "rgba(41, 121, 255, 0.4)",
        borderColor: "#2979FF",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const incomeData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [60, 90, 50, 30, 60, 45, 70],
        backgroundColor: "#00BCD4",
        borderRadius: 6,
      },
    ],
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#FFFFFF", minHeight: "100vh", maxWidth: "1400px", margin: "0 auto" }}>
      <Grid container spacing={3}>
        {/* Top Row Cards */}
        {[{
          title: "Total Usuários",
          value: "78,250",
          percent: "70.5%",
          color: "#2979FF",
          icon: <ArrowDropUpIcon />,
          chart: totalUsersData,
        }, {
          title: "Total Vendas Perdidas",
          value: "18,800",
          percent: "27.4%",
          color: "#FF3D57",
          icon: <ArrowDropDownIcon />,
          chart: totalOrdersData,
        }, {
          title: "Total Vendas",
          value: "35,078",
          percent: "27.4%",
          color: "#FFB300",
          icon: <ArrowDropDownIcon />,
          chart: totalSalesData,
        }, {
          title: "Total Marketing",
          value: "1,12,083",
          percent: "70.5%",
          color: "#2979FF",
          icon: <ArrowDropUpIcon />,
          chart: totalMarketingData,
        }].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={cardStyle}>
              <Typography variant="subtitle2" color="textSecondary">
                {item.title}
              </Typography>
              <Box display="flex" alignItems="center" color={item.color}>
                <Typography fontWeight="bold" >
                  {item.value}
                </Typography>
                {item.icon}
                <Typography variant="body2">{item.percent}</Typography>
              </Box>
              <Box height="70px" mt={1}>
                <Bar data={item.chart} options={chartOptions} />
              </Box>
            </Card>
          </Grid>
        ))}

        {/* Bottom Row Charts */}
        <Grid item xs={12} md={8} mt={5}>
          <Card sx={{ borderRadius: 2, p: 2 }}>
            <Typography fontWeight="bold" variant="subtitle1" gutterBottom>
              Unique Visitors
            </Typography>
            <Box height="300px">
              <Line data={visitorData} options={{ ...chartOptions, maintainAspectRatio: false }} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} mt={5}>
          <Card sx={{ borderRadius: 2, p: 2 }}>
            <Typography fontWeight="bold" variant="subtitle1" gutterBottom>
              Income Overview
            </Typography>
            <Box height="300px">
              <Bar data={incomeData} options={{ ...chartOptions, maintainAspectRatio: false }} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
