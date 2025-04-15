import { saveAs } from "file-saver";
import { UserData } from "../data/mockData";

export const exportToCSV = (data: UserData[]) => {
  const headers = "Name,Email,Score,Status\n";
  const rows = data.map(
    (row) => `${row.name},${row.email},${row.score},${row.score >= 40 ? "Pass" : "Fail"}`
  );
  const csvContent = headers + rows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  saveAs(blob, "student_data.csv");
};
