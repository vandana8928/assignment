const express = require('express');
const app = express();
const authRouter = require('./routes/user');
const PORT = process.env.PORT || 3000;
// Routes
app.use('/api/auth', authRouter);

// Start the server
app.get("/",(req,res)=>{
res.send("hello vandana");
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});