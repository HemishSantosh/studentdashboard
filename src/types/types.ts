export interface UserData {
    id: number;
    name: string;
    email: string;
    score: number;
    bio: string;
    joiningDate: string;
  }
  
  export type Column = {
    label: string;
    accessor: keyof UserData | "status" | "actions";
    sortable?: boolean;
  };
  