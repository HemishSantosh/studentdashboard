import React, { useMemo, useState } from "react";
import DataTable, { Column } from "./components/DataTable";
import { mockData, UserData } from "./data/mockData";
import { useThemeMode } from "./hooks/useTheme";
import { SnackbarProvider, useSnackbar } from "./contexts/SnackbarContext";
import UserDetailModal from "./components/UserDetailModal";

import {
  ThemeProvider,
  CssBaseline,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";

function AppContent() {
  const { showMessage } = useSnackbar();
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleView = (id: number) => {
    const user = mockData.find((u) => u.id === id);
    if (user) {
      setSelectedUser(user);
      setOpenModal(true);
      showMessage(`Viewing user: ${user.name}`, "info");
    }
  };

  const handleDelete = (id: number) => {
    showMessage(`Deleted user ID: ${id}`, "success");
  };

  const columns: Column[] = [
    { label: "Name", accessor: "name", sortable: true },
    { label: "Email", accessor: "email" },
    { label: "Score", accessor: "score", sortable: true },
    { label: "Status", accessor: "status" },
    { label: "Actions", accessor: "actions" },
  ];

  const enhancedData = mockData.map((row) => ({
    ...row,
    status: row.score >= 40 ? "Pass" : "Fail",
    actions: (
      <Box display="flex" gap={1}>
        <Button size="small" variant="outlined" onClick={() => handleView(row.id)}>
          View
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => handleDelete(row.id)}
        >
          Delete
        </Button>
      </Box>
    ),
  }));

  return (
    <>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Student Results
        </Typography>
        <DataTable data={enhancedData} columns={columns} />
      </Container>
      <UserDetailModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={selectedUser}
      />
    </>
  );
}

function App() {
  const { theme, mode, setMode } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <Container sx={{ pt: 4 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5">Dashboard</Typography>
            <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>Toggle {mode === "light" ? "Dark" : "Light"} Mode</Button>
          </Box>
          <AppContent />
        </Container>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
