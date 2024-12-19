import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Modal,
  IconButton,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data = [
  {
    id: 1,
    name: "Carlos Silva",
    status: "Comprado",
    description: "Café Dream Coffee - 250g - Torra Média",
    email: "carlos.silva@gmail.com",
    phone: "(31) 99999-9999",
    location: "Belo Horizonte",
    trackingLink: "https://rastreamento.com/12345",
    lastUpdated: "1 dia atrás",
  },
  {
    id: 2,
    name: "Ana Souza",
    status: "Em Análise",
    description: "Café Dream Coffee - 250g - Torra Escura",
    email: "ana.souza@gmail.com",
    phone: "(11) 98888-8888",
    location: "São Paulo",
    trackingLink: "https://rastreamento.com/54321",
    lastUpdated: "2 horas atrás",
  },
  {
    id: 3,
    name: "Pedro Santos",
    status: "Enviado",
    description: "Café Dream Coffee - 1kg - Torra Clara",
    email: "pedro.santos@gmail.com",
    phone: "(21) 97777-7777",
    location: "Rio de Janeiro",
    trackingLink: "https://rastreamento.com/67890",
    lastUpdated: "3 dias atrás",
  },
];

const Vendas = () => {
  const [open, setOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleOpen = (profile) => {
    setSelectedProfile(profile);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProfile(null);
  };

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
      {data.map((profile) => (
        <Card
          key={profile.id}
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
                {profile.name[0]}
              </Avatar>
              <Box>
                <Typography fontWeight="bold" fontSize={12}>
                  {profile.name}
                </Typography>
                <Typography color="gray" fontSize={10}>
                  {profile.status}
                </Typography>
              </Box>
            </Box>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>

          <Divider />

          <CardContent>

            <Typography color="gray" fontSize={12} lineHeight={1.5} mb={3}>
              {profile.description}
            </Typography>

            <Box
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gap={2}
              mb={3}
              alignItems="center"
            >

              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon fontSize="small" sx={{ color: "#555" }} />
                <Typography fontSize={12} sx={{ color: "#333" }}>
                  {profile.email}
                </Typography>
              </Box>


              <Box display="flex" alignItems="center" gap={1}>
                <PublicIcon fontSize="small" sx={{ color: "#555" }} />
                <Typography fontSize={12} sx={{ color: "#333" }}>
                  {profile.location}
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon fontSize="small" sx={{ color: "#555" }} />
                <Typography fontSize={12} sx={{ color: "#333" }}>
                  {profile.phone}
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <PublicIcon fontSize="small" sx={{ color: "#555" }} />
                <a
                  href={profile.trackingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    textDecoration: "none",
                    color: "#007bff",
                  }}
                >
                  Rastreio
                </a>
              </Box>
            </Box>

            <Button
              variant="outlined"
              onClick={() => handleOpen(profile)}
              fullWidth
              sx={{
                textTransform: "none",
                fontSize: 12,
                borderColor: "#007bff",
                color: "#007bff",
                "&:hover": {
                  borderColor: "#0056b3",
                  backgroundColor: "#f8f9fa",
                },
              }}
            >
              Preview
            </Button>
          </CardContent>
        </Card>
      ))}

      {selectedProfile && (
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "#fff",
              boxShadow: 24,
              borderRadius: 2,
              p: 3,
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography fontWeight="bold" fontSize={14}>
                  {selectedProfile.name}
                </Typography>
                <Typography color="gray" fontSize={12}>
                  {selectedProfile.status}
                </Typography>
              </Box>
              <IconButton onClick={handleClose}>
                <MoreVertIcon />
              </IconButton>
            </Box>

            <Divider />

            <Box mt={2}>
              <Typography fontWeight="bold" fontSize={14} mb={1}>
                Descrição do Produto
              </Typography>
              <Typography fontSize={12} color="gray" mb={3}>
                {selectedProfile.description}
              </Typography>

              <Typography fontWeight="bold" fontSize={14} mb={1}>
                Rastreio
              </Typography>
              <a
                href={selectedProfile.trackingLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  textDecoration: "none",
                  color: "#007bff",
                }}
              >
                Clique aqui para rastrear
              </a>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default Vendas;
