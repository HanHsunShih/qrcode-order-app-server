# Online order System for my sister's cafe shop☕️

### Live Demo 🏄🏻‍♀️
Check out the live demo: [QR Code Order Application](https://seaward-migration-plan.netlify.app/)</br>

### Frontend 🏄
Check out the backend README: [frontend README](https://github.com/HanHsunShih/qrcode-order-app-client)

# About this Project
This QR code ordering app is built for my sister's cafe in Taiwan, allowing customers to order online. The client side handles menu display and ordering, while the admin dashboard, with login access, lets authorized users view orders and history.

client-side|admin-side
--|--
<img src="https://github.com/HanHsunShih/qrcode-order-app-client/blob/main/images/client-side_compressed.gif" width="300" />|<img src="https://github.com/HanHsunShih/qrcode-order-app-client/blob/main/images/admin-side_compressed.gif" width="300" />

<img src="https://github.com/HanHsunShih/qrcode-order-app-client/blob/main/images/Capstone%20one%20page%20slide.JPG?raw=true" width="650">

# Features 🤿
### Customer Interface:
- Browse the menu and place orders.
- Add meals to or remove them from the cart.
- Navigate through tabs with scroll synchronization.

### Admin Dashboard:
- View all pending orders.
- Mark orders as "complete" to save them to the order history.

# Built With:
<p align="left">
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
  <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> 
  <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
</p>

# Data Schema:
- `menu` table: Stores cafe menu data
- `order` table: Stores table number and status ( default to Processing )
- `order_product`: Acts as an intermediate table to manage the many-to-many relationship between orders and product tables.

# APIs 
GET /menu: Fetch the menu details.</br>
GET /menu/:id : Fetch the meal details.</br>
POST /order: Submit a customer's order.</br>
POST /users/register: Register as an admin.</br>
POST /users/login: Login as an admin.</br>
GET /order: View all processing orders as an admin.</br>
PUT /order: Change order status from processing to completed.</br>
GET /order/history: View all completed orders as an admin.</br>


# Getting Started 🤩
## Prerequisities
- Node.js
- MySQL

## Installation
- clone the repo
  ```
  git clone https://github.com:HanHsunShih/qrcode-order-app-server.git
  ```
- Install dependencies:
```
npm install
```
- Configure the `.env` file:
```
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
```
to create a JWT_SECRET: 
Created via Node JS by running `node` and then `const crypto = require('crypto');` then `crypto.randomBytes(64).toString("hex")` in the terminal, 
after you got the JWT_SECRET, run `.exit` to exit Node environment.


- Start the server:
```
npm run start
```

# Usage ☕️

1. **For Customers:**
   - Scan the QR code provided by the cafe.
   - Browse the menu and add items to your cart.
   - Proceed to checkout and place your order.

2. **For Admins:**
   - Log in to the admin dashboard with your credentials.
   - View live customer orders and their details.
   - Access the order history for management purposes.
  
# Roadmap 🚀
- [ ] Add a Chinese version for Taiwanese users.
- [ ] Integrate a payments API for seamless online transactions.
- [ ] Implement a feature to allow real-time menu updates.
