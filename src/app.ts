// import express from "express";
import connectLiveReload from "connect-livereload";
import express, { Request, Response } from 'express';


const app = express();

// Middleware to log IP address
app.use((req: Request, res: Response, next) => {
    let ip = req.ip;
  
    // Remove the ::ffff: prefix if it exists
    if (ip.startsWith('::ffff:')) {
      ip = ip.substring(7);
    }
  
    console.log(`${ip} connected to ${req.originalUrl}`);
    
    // Call the next middleware or route handler
    next();
  });

app.use(connectLiveReload());

app.use((req: Request, res: Response, next) => {
    const originalSend = res.send;
    res.send = function (body) {
        if (typeof body === 'string' && res.get('Content-Type') === 'text/html') {
            body += "<script src='http://localhost:35729/livereload.js'></script>";
        }
        return originalSend.call(this, body);
    };
    next();
});


app.get("/", (req: Request, res: Response) => {
    // console.log("User connected to main page");
    res.setHeader('Content-Type', 'text/html');
    // Full HTML response
    res.send(`
      <html>
        <head>
          <style>
          .routes-snippet {
                background-color: #f9f9f9;
                border: 1px solid #ccc;
                border-radius: 16px;
                padding: 2%;
                font-family: monospace;
                overflow-x: auto;
                max-width: 40%; /* Limit the maximum width */
                margin: auto;  /* Center the element */
                display: block; /* Make it a block element so it takes up its own line */

          }
            .code-snippet {
                background-color: #f9f9f9;
                border: 1px solid #ccc;
                border-radius: 16px;
                padding: 2%;
                font-family: monospace;
                overflow-x: auto;
                max-width: 40%; /* Limit the maximum width */
                margin: auto;  /* Center the element */
                display: block; /* Make it a block element so it takes up its own line */
            }
            
            .code-snippet #routes-links {
                max-width: 80%;
                margin: auto;
            }
            
            .code-snippet a {
                white-space: normal;  /* Allow the text to wrap */
                word-break: break-all; /* Break the text */
                margin: auto;
            }
            
            .footer {
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                padding: 1rem;
            }
          </style>
        </head>
        <body>
          <h1>One way of making the liveloader work</h1>
          <div class="routes-snippet">
            <p id="routes-links">Routes:</p>
            <br>
            
            <a href="http://127.0.0.1:3000/">http://127.0.0.1/</a> -> Main page<br>
            <a href="http://127.0.0.1:3000/hello">http://127.0.0.1/hello</a> -> Hello page<br>
            <a href="http://127.0.0.1:3000/message">http://127.0.0.1/message</a> -> Message page
          </div>
          <div class="footer">
            Hello user, this is the ${req.originalUrl}main page<br>All rights reserved &reg to Yuval.T;
          </div>
        </body>
      </html>
    `);
  });


app.get("/hello", (req: Request, res: Response) => {
    // console.log("User connected to hello page");
    // Code snippet with syntax highlighting
    const p = `
      <span class="ressend">res.send(</span>
        <span class="html-tag">&lt;html&gt;</span>
          <span class="indent">&nbsp;&nbsp;</span><span class="html-tag">&lt;body&gt;</span>
             <span class="indent">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="html-tag">&lt;h1&gt;</span><span class="html-content">One way of making the liveloader work</span><span class="html-tag">&lt;/h1&gt;</span>
          <span class="indent">&nbsp;&nbsp;</span><span class="html-tag">&lt;/body&gt;</span>
        <span class="html-tag">&lt;/html&gt;</span>
      <span class="ressend">);</span>
    `;
  
    // Full HTML response
    res.send(`
      <html>
        <head>
          <style>
            .code-snippet, .routes-snippet {
              background-color: #f9f9f9;
              border: 1px solid #ccc;
              border-radius: 16px;
              padding: 30px;
              font-family: monospace;
              overflow-x: auto;
              max-width: 40%; /* Limit the maximum width */
              margin: auto;  /* Center the element */
              display: block; /* Make it a block element so it takes up its own line */

            }
            .ressend {
                color: red;
            }
            .html-tag {
              color: blue;
            }
            .html-content {
              color: green;
            }
            .indent {
              color: gray;
            }
            .footer {
              position: absolute;
              bottom: 0;
              width: 100%;
              text-align: center;
              padding: 1rem;
            }
          </style>
        </head>
        <body>
          <h1>One way of making the liveloader work</h1>
          <pre class="code-snippet">
            <code>${p}</code>
          </pre>
          <div class="routes-snippet">
            <p id="routes-links">Routes:</p>
            <br>
            <a href="http://127.0.0.1:3000/">http://127.0.0.1/</a> -> Main page<br>
            <a href="http://127.0.0.1:3000/hello">http://127.0.0.1/hello</a> -> Hello page<br>
            <a href="http://127.0.0.1:3000/message">http://127.0.0.1/message</a> -> Message page
          </div>
          <div class="footer">
            Hello user, this is the ${req.originalUrl} page<br>All rights reserved &reg to Yuval.T;
          </div>
        </body>
      </html>
    `);
  });

app.get("/message", (req: Request, res: Response) => {
    // console.log("User connected to message page");
    // console.log(req)
    res.setHeader('Content-Type', 'text/html');
    res.send(`
    <html>
      <head>
      <style>
      .routes-snippet {
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 16px;
            padding: 2%;
            font-family: monospace;
            overflow-x: auto;
            max-width: 40%; /* Limit the maximum width */
            margin: auto;  /* Center the element */
            display: block; /* Make it a block element so it takes up its own line */

      }
        .code-snippet {
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 16px;
            padding: 2%;
            font-family: monospace;
            overflow-x: auto;
            max-width: 40%; /* Limit the maximum width */
            margin: auto;  /* Center the element */
            display: block; /* Make it a block element so it takes up its own line */
        }
        
        .code-snippet #routes-links {
            max-width: 80%;
            margin: auto;
        }
        
        .code-snippet a {
            white-space: normal;  /* Allow the text to wrap */
            word-break: break-all; /* Break the text */
            margin: auto;
        }
        
        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 1rem;
        }
      </style>
      </head>
      <body>
        <h1>One way of making the liveloader work</h1>
        <div class="routes-snippet">
            <p id="routes-links">Routes:</p>
            <br>
            <a href="http://127.0.0.1:3000/">http://127.0.0.1/</a> -> Main page<br>
            <a href="http://127.0.0.1:3000/hello">http://127.0.0.1/hello</a> -> Hello page<br>
            <a href="http://127.0.0.1:3000/message">http://127.0.0.1/message</a> -> Message page
        </div>
        <div class="footer">
          Hello user, this is the ${req.originalUrl} page<br>All rights reserved &reg to Yuval.T;
        </div>
      </body>
    </html>
  `);    
});

export default app;


// app.get("/ipv6", (req: Request, res: Response) => {
//     let ip = req.ip;
  
//     // Remove the ::ffff: prefix if it exists
//     if (ip.startsWith("::ffff:")) {
//       ip = ip.substring(7);
//     }
  
//     // console.log(`${ip} connected to hello page`);
//     res.send("Hello, World!");
//   });

// app.get('/ipv4', (req: Request, res: Response) => {
//      const ipAddress = req.ip;
//      res.send(ipAddress)
//      console.log(`${req.ip} connected to hello page`);
//      return res
// })