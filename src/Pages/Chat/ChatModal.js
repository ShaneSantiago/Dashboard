import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import MicNoneIcon from "@mui/icons-material/MicNone";

const ChatModal = ({ open, onClose, user, phone }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          bgcolor: "#fff",
          boxShadow: 24,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #ddd",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src="/path-to-avatar"
              alt={user}
              sx={{ width: 50, height: 50 }}
            />
            <Box>
              <Typography fontWeight="bold" fontSize="16px">
                {user}
              </Typography>
              <Typography color="gray" fontSize="12px">
                Telefone: {phone}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 2,
            overflowY: "auto",
            bgcolor: "#f9f9f9",
          }}
        >
          <Typography>Converse com {user}</Typography>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid #ddd",
            p: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextField
            placeholder="Digite sua mensagem..."
            multiline
            rows={3}
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: "14px",
                p: 1,
                borderBottom: "2px solid #007bff",
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton>
                <InsertEmoticonIcon />
              </IconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <IconButton>
                <ImageIcon />
              </IconButton>
              <IconButton>
                <MicNoneIcon />
              </IconButton>
            </Box>
            <IconButton sx={{ color: "#007bff" }}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChatModal;
