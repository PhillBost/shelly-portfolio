import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import artRoutes from './routes/art.js';
import cloudinary from 'cloudinary';


dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://phillbost.github.io',
    'https://shellyoliveira.com',
    'https://www.shellyoliveira.com'
  ],
  methods: ['GET'],
}));
app.use(express.json());
app.use('/api', artRoutes);

// this starts the server on either the port provided by env or port 5000
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running on http://0.0.0.0:${PORT}`);
    console.log({key: !!process.env.CLOUDINARY_API_KEY, secret: !!process.env.CLOUDINARY_API_SECRET})
})

