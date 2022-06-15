const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Application started and Listensing on port 3000");
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/form.html");
});
