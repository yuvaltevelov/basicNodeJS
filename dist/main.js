"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _os = /*#__PURE__*/ _interop_require_default(require("os"));
const _livereload = /*#__PURE__*/ _interop_require_default(require("livereload"));
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getLocalIP = ()=>{
    const networkInterfaces = _os.default.networkInterfaces();
    for (const name of Object.keys(networkInterfaces)){
        const nets = networkInterfaces[name];
        for (const net of nets){
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
const liveReloadServer = _livereload.default.createServer();
liveReloadServer.watch(__dirname + "/dist"); // adjust this path as needed
liveReloadServer.server.once("connection", ()=>{
    console.log("LiveReload is connected!");
    setTimeout(()=>{
        liveReloadServer.refresh("/");
    }, 100);
});
_app.default.listen(port, '0.0.0.0', ()=>{
    console.log(`Server is running on http://${localIP}:${port}`);
});
