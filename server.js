import express from "express";
import path from "path";

const app = express();
app.use(express.static(process.cwd()));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

app.get("/whatsapp", (req, res) => {
  const product = req.query.product || "your products";
  const message = encodeURIComponent(`Hi! I'm interested in ${product} from West Wynad Spices. Could you provide more details?`);
  res.redirect(`https://api.whatsapp.com/send/?phone=919443019626&text=${message}&type=phone_number&app_absent=0`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});