import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
} from "@mui/material";
import ChatModal from "./ChatModal"; // Importe o modal que criamos

const initialData = {
  columns: {
    novo: {
      title: "Novo",
      tasks: [
        { id: "1", user: "João Silva", phone: "(11) 91234-5678", avatar: "JS" },
        { id: "2", user: "Maria Santos", phone: "(21) 97654-3210", avatar: "MS" },
        { id: "3", user: "Ana Oliveira", phone: "(31) 93333-4444", avatar: "AO" },
        { id: "4", user: "Carlos Pereira", phone: "(41) 95555-6666", avatar: "CP" },
      ],
    },
    ativo: {
      title: "Ativo",
      tasks: [
        { id: "5", user: "Beatriz Costa", phone: "(51) 98888-9999", avatar: "BC" },
        { id: "6", user: "Lucas Martins", phone: "(61) 91234-0000", avatar: "LM" },
      ],
    },
    resolvido: {
      title: "Resolvido",
      tasks: [
        { id: "7", user: "Fernanda Souza", phone: "(71) 90000-1111", avatar: "FS" },
      ],
    },
    fechado: {
      title: "Fechado",
      tasks: [
        { id: "8", user: "Pedro Lima", phone: "(81) 99999-8888", avatar: "PL" },
        { id: "9", user: "Camila Rocha", phone: "(91) 94444-5555", avatar: "CR" },
      ],
    },
  },
};

const Kanban = () => {
  const [data, setData] = useState(initialData);
  const [draggedTask, setDraggedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDragStart = (task, sourceColumn) => {
    setDraggedTask({ ...task, sourceColumn });
  };

  const handleDrop = (targetColumnId) => {
    if (!draggedTask) return;

    const { sourceColumn, ...task } = draggedTask;

    // Remove tarefa da coluna de origem
    const sourceTasks = data.columns[sourceColumn].tasks.filter(
      (t) => t.id !== task.id
    );

    // Adiciona tarefa à coluna de destino
    const targetTasks = [...data.columns[targetColumnId].tasks, task];

    setData({
      columns: {
        ...data.columns,
        [sourceColumn]: { ...data.columns[sourceColumn], tasks: sourceTasks },
        [targetColumnId]: { ...data.columns[targetColumnId], tasks: targetTasks },
      },
    });
    setDraggedTask(null);
  };

  const handleCardClick = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  return (
    <Box display="flex" gap={2} p={2} alignItems="flex-start" sx={{ overflowX: "auto" }}>
      {Object.entries(data.columns).map(([columnId, column]) => (
        <Box
          key={columnId}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(columnId)}
          sx={{
            minWidth: 250,
            maxWidth: 250,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            p: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            flexGrow: 1,
          }}
        >
          <Typography sx={{ marginBottom: 2, fontWeight: "500", color: "#333" }}>
            {column.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {column.tasks.map((task) => (
              <Card
                key={task.id}
                draggable
                onDragStart={() => handleDragStart(task, columnId)}
                onClick={() => handleCardClick(task)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1.5,
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#ffffff",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  '&:hover': {
                    transform: "scale(1.03)",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Avatar sx={{ bgcolor: "#3f51b5", color: "#ffffff", marginRight: 2, width: 30, height: 30, fontSize: 12 }}>
                  {task.avatar}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: "bold", color: "#333", fontSize: 12 }}>
                    {task.user}
                  </Typography>
                  <Typography color="textSecondary" fontSize={10}>
                    {task.phone}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
      {selectedTask && (
        <ChatModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          user={selectedTask.user}
          phone={selectedTask.phone}
        />
      )}
    </Box>
  );
};

export default Kanban;
