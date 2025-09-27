const express = require("express");
const app = express();
app.use(express.json());
const todoRoutes = require("./Routes/todos");
const setRoutes = require("./Routes/sets");

const port = 5050;

app.use("/", express.static("./public"));
app.use("/api/todos", todoRoutes);

app.use("/api/sets", setRoutes);

app.listen(port, () => {
  console.log("server is up");
});

const dairy = [
  {
    title: "",
    note: "",
    programItems: [
      {
        program: "chest",
        sets: 5,
        note: "",
        date: "2025-9-27",
      },
      {
        program: "arm",
        sets: 5,
      },
    ],
  },
  {
    date: "2025-9-28",
    title: "",
    note: "",
    programItem: [
      {
        program: "chest",
        sets: 5,
      },
      {
        program: "arm",
        sets: 5,
      },
    ],
  },
];
