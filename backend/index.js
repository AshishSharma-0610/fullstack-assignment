const express = require('express');
const connectDB = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api', cardRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});
