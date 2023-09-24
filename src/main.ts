import os from "os";
// import express, { Request, Response } from 'express';
import livereload from "livereload";
import app from "./app";  // make sure this is imported correctly

const getLocalIP = (): string => {
    const networkInterfaces = os.networkInterfaces();
    for (const name of Object.keys(networkInterfaces)) {
      const nets = networkInterfaces[name]!;
      for (const net of nets) {
        // Skip over non-IPv4 and internal (i.e., 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
          return net.address;
        }
      }
    }
    return '0.0.0.0';
  };

const port = 3000;
const localIP = getLocalIP();

const liveReloadServer = livereload.createServer();

liveReloadServer.watch(__dirname + "/dist");  // adjust this path as needed

liveReloadServer.server.once("connection", () => {
    console.log("LiveReload is connected!");
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.listen(port,'0.0.0.0', () => {
    console.log(`Server is running on http://${localIP}:${port}`);
});
