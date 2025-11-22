# RulesManager - backend app - Node + Express + Sequelize + SQLite

This is the backend RESTful API for Rules Manager, which is currently deployed on [render.com](https://rulesmanager-back.onrender.com/).

## Download and setup this repository locally

Do not forget to check if node.js and npm on your computer before trying to work on this app. This app has been developped with the following versions:
- npm: 10.9.4
- nvm: 0.39.2
- node: v22.21.1

After you cloned this repo with command "git clone", go in root folder of the repository in Command Line Interface, and run this command in order to set up dependencies:
```
npm install
```

This should take a few moments. After that, stay in the root folder and create a ".env" file, where you will be able to set up your environment variables. At this point, two are required:
```
API_BASE_URL=http://localhost
API_PORT=8080
```

## Run this API locally

Once your .env file is properly set up and your node_modules folder is downloaded, you may run this command on your root repository, in Command Line Interface, in order to use it:
```
node index.js
```

Then, you can interact with your api with Postman, with your browser or any other tool.
