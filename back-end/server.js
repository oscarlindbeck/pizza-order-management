import "dotenv/config";
import app from "./src/app.js";

const port = 3000;

app.listen(port, () => {
    console.log(`Express server running in: http://localhost:${port}`);
})