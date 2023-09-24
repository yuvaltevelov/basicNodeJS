"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _livereload = /*#__PURE__*/ _interop_require_default(require("livereload"));
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const port = 3000;
const liveReloadServer = _livereload.default.createServer();
liveReloadServer.watch(__dirname + "/dist"); // adjust this path as needed
liveReloadServer.server.once("connection", ()=>{
    console.log("LiveReload is connected!");
    setTimeout(()=>{
        liveReloadServer.refresh("/");
    }, 100);
});
_app.default.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
