import React from "react";
import DataTable from "./components/DataTable";
import { mockData } from "./data/mockData";
import { Column } from "./components/DataTable"; // Correct import

const columns: Column[] = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Email", accessor: "email" },
  { label: "Score", accessor: "score", sortable: true },
  { label: "Status", accessor: "status" },
  { label: "Actions", accessor: "actions" },
];

function App() {
  const enhancedData = mockData.map((row) => ({
    ...row,
    status: row.score >= 40 ? "Pass" : "Fail",
    actions: (
      <>
        <button onClick={() => handleView(row.id)}>View</button>
        <button onClick={() => handleDelete(row.id)}>Delete</button>
      </>
    ),
  }));

  const handleView = (id: number) => {
    alert(`Viewing details for user ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Deleted user ID: ${id}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Student Results</h2>
      <DataTable data={enhancedData} columns={columns} />
    </div>
  );
}

export default App;
