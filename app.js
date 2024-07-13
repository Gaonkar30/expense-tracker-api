const express = require("express");
const expenseRoutes = require("./routes/expense.route");
const cookieParser = require("cookie-parser");
require("./config/config");

const app = express();

app.use(express.json());
app.use(cookieParser()); 
app.use("/api", expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
