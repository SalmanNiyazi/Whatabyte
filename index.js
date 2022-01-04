//index.js

/**
 * Required External Modules
 */
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * App Variables
 */
const app  = express();
const port = process.env.PORT || "3000";
/**
 * App Configurations
 */
 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname, "public")));
/**
 * Routes Definitions
 */
 app.get("/", (req, res) => {
    res.render("index", {title: "Home"}); 
    } );
 app.get("/user", (req, res) => {
 res.render("user", {title: "Profile", userProfile: {nickname: "Salman"}});
 });
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`lstening to request on http://localhost:${port}`);
});