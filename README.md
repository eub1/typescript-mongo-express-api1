I'm starting this project to learn and practice with mongoDB, typescript and express.

In this respository I'm following the MERN stack api that is tought on this youtube video from Web Deb Junkie: https://www.youtube.com/watch?v=G_XyAfcLeqI

# installation

npm init -f
npm i --save express
npm i --save-dev ts-node
npm i --save-dev @types/express
npm i --save-dev nodemon
npm i mongoose
npm i --save-dev @types/mongoose
npm i dotenv --save
npm i --save cors
npm i --save-dev @types/cors
npx tsc --init

# scripts

npm run dev: nodemon watch's for changes in src folder, with extention ts or json, and executes ts-node src/index.ts
