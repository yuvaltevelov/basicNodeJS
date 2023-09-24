
#  TypeScript Express Live Reload Server 

##  Project Overview 

This is an enhanced student project focusing on web development with TypeScript and Express.js. The key features include live reloading using `connect-livereload`, logging of incoming IP addresses, and logging of the server's local IP address. A few example routes are also included.

---

## 📑 Table of Contents 
1. [Installation](#Installation )
2. [Usage](#usage-)
3. [Features](#features-)
4. [Contribution](#contribution-)

---

## 🛠️ Installation 

### Clone the Repository
```
git clone https://github.com/your-username/your-repo-name.git
```
Navigate to the Project Directory
```
cd your-repo-name
```
Install Required Packages

# Dependencies
```
npm install dotenv express --save
```
# Dev Dependencies
```
npm install @swc/cli @swc/core @types/connect-livereload @types/express @types/livereload @types/node chokidar concurrently connect-livereload livereload nodemon typescript --save-dev
```

# 🖥️ Usage
```
To run the server, execute:
```
npm run dev
```
Visit http://[Server-Local-IP]:3000 in your web browser, replacing [Server-Local-IP] with the IP address logged in the console when the server starts.

# 🌟 Features
Live Reload: Automatically reloads the web page upon code changes.
IP Logging: Logs the IP address of each incoming connection.
Server Local IP Logging: Logs the local IP address of the server machine.
TypeScript Support: Enhanced type checking and modern JavaScript features.
Example Routes: Demonstrative routes to showcase project features.
# 🤝 Contribution
Feel free to fork the project and submit a pull request for contributions.
I would also be glad for any suggestions or comment for me to keep improving :D
