import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const carrinhosAbandonados = [
  {
    id: 1,
    userName: "Carlos Silva",
    email: "carlos.silva@gmail.com",
    phone: "(31) 99999-9999",
    location: "Belo Horizonte",
    products: [
      { name: "Café Dream Coffee - 250g - Torra Média", quantity: 2 },
      { name: "Café Dream Coffee - 1kg - Torra Clara", quantity: 1 },
    ],
    totalValue: "R$ 89,90",
    lastActivity: "1 dia atrás",
  },
  {
    id: 2,
    userName: "Ana Souza",
    email: "ana.souza@gmail.com",
    phone: "(11) 98888-8888",
    location: "São Paulo",
    products: [
      { name: "Café Dream Coffee - 250g - Torra Escura", quantity: 3 },
    ],
    totalValue: "R$ 59,70",
    lastActivity: "2 horas atrás",
  },
  {
    id: 3,
    userName: "Pedro Santos",
    email: "pedro.santos@gmail.com",
    phone: "(21) 97777-7777",
    location: "Rio de Janeiro",
    products: [
      { name: "Café Dream Coffee - 1kg - Torra Média", quantity: 1 },
      { name: "Café Dream Coffee - 250g - Torra Clara", quantity: 2 },
    ],
    totalValue: "R$ 129,90",
    lastActivity: "3 dias atrás",
  },
];

const Carrinhos = () => {
  return (
    <Box
      p={3}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
      }}
    >
      {carrinhosAbandonados.map((cart) => (
        <Card
          key={cart.id}
          sx={{
            width: "30%",
            minWidth: 300,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            p: 3,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                sx={{
                  bgcolor: "#3f51b5",
                  color: "#fff",
                  width: 30,
                  height: 30,
                }}
              >
                {cart.userName[0]}
              </Avatar>
              <Box>
                <Typography fontWeight="bold" fontSize={14}>
                  {cart.userName}
                </Typography>
                <Typography color="gray" fontSize={12}>
                  Carrinho Abandonado
                </Typography>
              </Box>
            </Box>
            <ShoppingCartIcon fontSize="medium" sx={{ color: "#007bff" }} />
          </Box>

          <CardContent>
            <Typography fontWeight="bold" fontSize={12} mb={1}>
              Produtos no Carrinho:
            </Typography>
            {cart.products.map((product, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="space-between"
                mb={1}
              >
                <Typography fontSize={12} sx={{ color: "#333" }}>
                  {product.name}
                </Typography>
                <Typography fontSize={12} sx={{ color: "#555" }}>
                  Quantidade: {product.quantity}
                </Typography>
              </Box>
            ))}

            <Typography fontWeight="bold" fontSize={12} mt={2} mb={1}>
              Valor Total:{" "}
              <span style={{ color: "#007bff" }}>{cart.totalValue}</span>
            </Typography>

            <Typography color="gray" fontSize={12} mb={2}>
              Última atividade: {cart.lastActivity}
            </Typography>

            <Box
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gap={2}
              mb={3}
              alignItems="center"
            >
              <Box>
                <Typography fontSize={12} sx={{ color: "#333" }}>
                  Email:
                </Typography>
                <Typography fontSize={12} sx={{ color: "#007bff" }}>
                  {cart.email}
                </Typography>
              </Box>
              <Box>
                <Typography fontSize={12} sx={{ color: "#333" }}>
                  Telefone:
                </Typography>
                <Typography fontSize={12} sx={{ color: "#007bff" }}>
                  {cart.phone}
                </Typography>
              </Box>
            </Box>
{/* 
            <Button
              variant="outlined"
              startIcon={<LocalMallIcon />}
              fullWidth
              sx={{
                textTransform: "none",
                fontSize: 14,
                borderColor: "#007bff",
                color: "#007bff",
                "&:hover": {
                  borderColor: "#0056b3",
                  backgroundColor: "#f8f9fa",
                },
              }}
            >
              Finalizar Compra
            </Button> */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Carrinhos;
