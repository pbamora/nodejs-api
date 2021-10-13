import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { especificationRoutes } from "./routes/specifications.route";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", especificationRoutes);

app.listen(3333, () => console.log("Server listen in port 3333"));
