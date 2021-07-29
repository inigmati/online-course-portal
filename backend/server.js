import express from 'express';
import data from './data'

const app = express();

app.get("/api/courses", (req, res) => {
    res.send(data.courses);
});

app.listen(5000, () => { console.log('server start at localhost:5000'); })