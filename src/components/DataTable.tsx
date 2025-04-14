import React, { useState, useMemo } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, TextField, IconButton, Collapse, Button
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp, Delete, Visibility } from "@mui/icons-material";
import { UserData } from "../data/mockData";
import { saveAs } from "file-saver";

// Export the Column type for reuse
export type Column = {
  label: string;
  accessor: keyof UserData | "status" | "actions";
  sortable?: boolean;
};

type Props = {
  data: UserData[];
  columns: Column[];
};

const DataTable: React.FC<Props> = ({ data, columns }) => {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof UserData | "score" | "name">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);
  const [openRow, setOpenRow] = useState<number | null>(null);

  const rowsPerPage = 5;

  const handleSort = (field: keyof UserData) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortField(field);
  };

  const filteredData = useMemo(() => {
    return data
      .filter(row =>
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.email.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        const valA = a[sortField];
        const valB = b[sortField];
        if (typeof valA === "number" && typeof valB === "number") {
          return sortOrder === "asc" ? valA - valB : valB - valA;
        }
        return sortOrder === "asc"
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
  }, [search, sortField, sortOrder, data]);

  const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const exportCSV = () => {
    const headers = columns.map(col => col.label).join(",");
    const rows = data.map(row => `${row.name},${row.email},${row.score},${row.score >= 40 ? "Pass" : "Fail"}`);
    const csv = [headers, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "data.csv");
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        label="Search by Name or Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button onClick={exportCSV} variant="contained" color="primary" sx={{ mb: 2 }}>
        Export to CSV
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              {columns.map(col => (
                <TableCell key={col.accessor}>
                  {col.label}
                  {col.sortable && (
                    <IconButton size="small" onClick={() => handleSort(col.accessor as keyof UserData)}>
                      {sortField === col.accessor ? (sortOrder === "asc" ? "🔼" : "🔽") : "↕️"}
                    </IconButton>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow
                  sx={{
                    backgroundColor: row.score < 40 ? "#ffe5e5" : "inherit",
                  }}
                >
                  <TableCell>
                    <IconButton onClick={() => setOpenRow(openRow === row.id ? null : row.id)}>
                      {openRow === row.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>{row.score >= 40 ? "Pass" : "Fail"}</TableCell>
                  <TableCell>
                    <IconButton color="primary"><Visibility /></IconButton>
                    <IconButton color="error"><Delete /></IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={6} sx={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={openRow === row.id}>
                      <div style={{ padding: "10px 20px" }}>
                        <strong>Bio:</strong> {row.bio} <br />
                        <strong>Joining Date:</strong> {row.joiningDate}
                      </div>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
      />
    </Paper>
  );
};

export default DataTable;
