
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use("/api", require("./routes/routes"));

server.listen(process.env.PORT, async () => {
    console.log(`### Server is running on port ${process.env.PORT || 2025}  ###`);
    require("./config/db");
});