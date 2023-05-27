# E-Commerce MERN Stack Project

## Basic setup

1. Envireonment Setup

   1. Create a Project Directory

      ```console
      mkdir e-commerce-project
      ```

   2. Change directoey to `e-commerce-project`

      ```console
      cd e-commerce-project
      ```

   3. Create a `client` and `server` Directory

      ```console
      mkdir client
      mkdir server
      ```

   4. Change directoey to `server`

      ```console
      cd server
      ```

   5. Initialised as Node Project

      ```console
      npm init -y
      ```

   6. Install express

      ```console
      npm i express
      ```

   7. Install nodemon as dev dependency

      ```console
      npm i nodemon -D
      ```

   8. Go to the **`package.json`** file and add this script

      ```json
      "scripts": {
        "dev": "nodemon ./src/server.js",
        "start": "node ./src/server.js"
      }
      ```

   9. Create a **`server.js`** file inside `src`

      ***

2. Create Express Server
3. HTTP request & response
4. Install morgan

   ```console
   npm i morgan
   ```

5. API tesing with Postman
6. Middleware & its type -> Body parser

   1. Install body-parser

      ```console
      npm i body-parser
      ```

7. Express Error Handling Middleware -> http-errors

   1. Install http-errors

      ```console
      npm i http-errors
      ```

8. Handle HTTP errors using http-errors
9. To secure API install -> xss-clean, express-rate-limit
10. Install dot-env

    ```console
    npm i dot-env
    ```

11. MVC(Model View Controller) Architecture setup
