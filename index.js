require('dotenv').config()
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const {sequelize} = require('./orm/sequelize')
const router = require('./router/index');
const runMigrations = require('./orm/runMigrations');
const errorMiddleware = require('./middlewares/error')


const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);


app.get('/', (req, res, next) => {
    res.send('ok')
})

sequelize.sync({alter: false, force: true}).then(async () => {
    await runMigrations()
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.error(err)
})