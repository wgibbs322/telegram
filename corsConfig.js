
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = ['http://127.0.0.1:5500']; // Add your frontend origin(s) here
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Enable credentials (cookies/auth headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions;