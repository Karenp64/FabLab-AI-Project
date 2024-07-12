//@ts-nocheck
import express, { static } from 'express';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(static(join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});