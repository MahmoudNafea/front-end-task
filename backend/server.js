const express = require("express");

const app = express();
app.use(express.json());

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});