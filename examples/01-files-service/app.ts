import * as express from "express";
import { App, ContextualRouter } from "h4b2"; // from h4b2

import { FilesPlugin } from "./files-plugin";

const myApp = new App();

myApp.load(FilesPlugin);

const expressApp = express();
myApp.getSingleton(ContextualRouter).install("/", expressApp);

console.log("listening on http://localhost:8080/");
expressApp.listen(8080);