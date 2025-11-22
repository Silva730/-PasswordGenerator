import express from 'express';
import path from 'path';

const app = express();
const PORT: number = 8080;

app.use(express.static(path.join(__dirname, '../public')));



app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
})