import React, { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

type SnackbarContextType = {
  showMessage: (msg: string, severity?: "success" | "error" | "info" | "warning") => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw new Error("useSnackbar must be used within SnackbarProvider");
  return ctx;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error" | "info" | "warning">("info");

  const showMessage = (msg: string, sev: "success" | "error" | "info" | "warning" = "info") => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert severity={severity} onClose={() => setOpen(false)} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
