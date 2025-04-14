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
      score: 75,
      bio: "Fullstack engineer focused on React and Django.",
      joiningDate: "2020-06-22",
    },
    {
      id: 4,
      name: "Dana White",
      email: "dana@example.com",
      score: 95,
      bio: "Team lead and agile coach.",
      joiningDate: "2018-09-12",
    },
    {
      id: 5,
      name: "Evan Green",
      email: "evan@example.com",
      score: 42,
      bio: "Intern developer exploring frontend stacks.",
      joiningDate: "2023-01-05",
    },
    {
      id: 6,
      name: "Fiona Lee",
      email: "fiona@example.com",
      score: 28,
      bio: "QA engineer passionate about automation.",
      joiningDate: "2019-11-17",
    },
    {
      id: 7,
      name: "George Clark",
      email: "george@example.com",
      score: 63,
      bio: "Node.js backend expert with microservice experience.",
      joiningDate: "2022-07-30",
    },
    {
      id: 8,
      name: "Hannah Ray",
      email: "hannah@example.com",
      score: 88,
      bio: "React Native developer, loves mobile UI/UX.",
      joiningDate: "2020-04-10",
    },
    {
      id: 9,
      name: "Ian Thomas",
      email: "ian@example.com",
      score: 54,
      bio: "DevOps enthusiast, CI/CD automation.",
      joiningDate: "2017-12-20",
    },
    {
      id: 10,
      name: "Julia West",
      email: "julia@example.com",
      score: 39,
      bio: "Learning cloud technologies and Kubernetes.",
      joiningDate: "2021-02-28",
    }
  ];
  