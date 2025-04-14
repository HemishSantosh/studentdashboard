export interface Column {
    field: string;
    headerName: string;
    width?: number;
}

export interface UserData {
    id: number;
    name: string;
    email: string;
    score: number;
    bio: string;
    joiningDate: string;
  }
  
  export const mockData: UserData[] = [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@example.com",
      score: 85,
      bio: "Frontend developer with 3 years experience.",
      joiningDate: "2021-01-15",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      score: 35,
      bio: "Junior backend developer learning Node.js.",
      joiningDate: "2022-03-10",
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie@example.com",
      score: 58,
      bio: "Data analyst with strong SQL skills.",
      joiningDate: "2020-11-23",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      score: 92,
      bio: "UX designer who loves creating user-centric designs.",
      joiningDate: "2019-07-01",
    },
    {
      id: 5,
      name: "Evan Lee",
      email: "evan@example.com",
      score: 41,
      bio: "QA tester with an eye for detail.",
      joiningDate: "2021-08-17",
    },
    {
      id: 6,
      name: "Fiona Clark",
      email: "fiona@example.com",
      score: 76,
      bio: "DevOps engineer focusing on automation.",
      joiningDate: "2018-06-12",
    },
    {
      id: 7,
      name: "George Brown",
      email: "george@example.com",
      score: 63,
      bio: "Python developer with experience in Django.",
      joiningDate: "2022-01-09",
    },
    {
      id: 8,
      name: "Hannah Wilson",
      email: "hannah@example.com",
      score: 29,
      bio: "Student intern interested in machine learning.",
      joiningDate: "2023-02-14",
    },
    {
      id: 9,
      name: "Ian Martinez",
      email: "ian@example.com",
      score: 48,
      bio: "Full-stack developer with React and Node.js expertise.",
      joiningDate: "2020-09-05",
    },
    {
      id: 10,
      name: "Jane Doe",
      email: "jane@example.com",
      score: 100,
      bio: "Project manager with 10 years of experience.",
      joiningDate: "2017-12-30",
    },
  ];
  