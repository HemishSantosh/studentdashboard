import { useMemo, useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

export const useThemeMode = () => {
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return { theme, mode, setMode };
};

