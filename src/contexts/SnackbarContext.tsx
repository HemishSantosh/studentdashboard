import React, { createContext, useState, useContext } from "react";
import { Snackbar, Alert } from "@mui/material";

type SnackbarContextType = {
  showMessage: (msg: string, severity?: "success" | "info" | "warning" | "error") => void;
};

const SnackbarContext = createContext<SnackbarContextType>({ showMessage: () => {} });

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "info" | "warning" | "error">("info");

  const showMessage = (msg: string, severity: "success" | "info" | "warning" | "error" = "info") => {
    setMessage(msg);
    setSeverity(severity);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
