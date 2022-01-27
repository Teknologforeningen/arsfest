require('dotenv').config()

module.exports = {
   "type": "postgres",
   "host": process.env.DB_HOST || "localhost",
   "username": process.env.DB_USER || "arsfest",
   "password": process.env.DB_PW || "arsfest",
   "database": process.env.DB_NAME || "arsfest",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}