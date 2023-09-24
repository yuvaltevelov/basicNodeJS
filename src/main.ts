import livereload from "livereload";
import app from "./app";  // make sure this is imported correctly

const port = 3000;

const liveReloadServer = livereload.createServer();

liveReloadServer.watch(__dirname + "/dist");  // adjust this path as needed

liveReloadServer.server.once("connection", () => {
    console.log("LiveReload is connected!");
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
