import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    location: "San Fran, CA",
    role: "employee",
    employeeId: "EMP12345",
    visitorId: "VIS12345",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "$2b$10$1jkldjfljalf/ldfjlJxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p12.jpeg",
    location: "Los Angeles, CA",
    role: "employee",
    employeeId: "EMP12346",
    visitorId: "VIS12346",
    createdAt: 1615211422,
    updatedAt: 1615211422,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    password: "$2b$10$2dfsdfsdf/5dfsdJxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p13.jpeg",
    location: "New York, NY",
    role: "employee",
    employeeId: "EMP12347",
    visitorId: "VIS12347",
    createdAt: 1715211422,
    updatedAt: 1715211422,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Alice",
    lastName: "Brown",
    email: "alice.brown@example.com",
    password: "$2b$10$3adadadad/3kjlkJxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p14.jpeg",
    location: "Chicago, IL",
    role: "employee",
    employeeId: "EMP12348",
    visitorId: "VIS12348",
    createdAt: 1815211422,
    updatedAt: 1815211422,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    password: "$2b$10$4sdafafds/4asfJxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p15.jpeg",
    location: "Houston, TX",
    role: "employee",
    employeeId: "EMP12349",
    visitorId: "VIS12349",
    createdAt: 1915211422,
    updatedAt: 1915211422,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    password: "$2b$10$5sdfdsfsd/5dflsdJxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p16.jpeg",
    location: "Phoenix, AZ",
    role: "employee",
    employeeId: "EMP12350",
    visitorId: "VIS12350",
    createdAt: 2015211422,
    updatedAt: 2015211422,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "David",
    lastName: "Martinez",
    email: "david.martinez@example.com",
    password: "$2b$10$6sdfsdfs/6klsdJxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p17.jpeg",
    location: "Philadelphia, PA",
    role: "employee",
    employeeId: "EMP12351",
    visitorId: "VIS12351",
    createdAt: 2115211422,
    updatedAt: 2115211422,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Sophia",
    lastName: "Lopez",
    email: "sophia.lopez@example.com",
    password: "$2b$10$7sdfsdfsdf/7dfsdfJxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p18.jpeg",
    location: "San Diego, CA",
    role: "employee",
    employeeId: "EMP12352",
    visitorId: "VIS12352",
    createdAt: 2215211422,
    updatedAt: 2215211422,
    __v: 0,
  },
];

export const rides = [];