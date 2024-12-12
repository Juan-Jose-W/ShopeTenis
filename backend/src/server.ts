import app from './app';
import connectDB from './utils/db';
import detenv from 'dotenv';

detenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server corriendo en el puerto ${PORT}`);
});