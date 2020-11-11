module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET_KEY,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  unsplash: {
    secret: process.env.UNSPLASH_API_KEY,
  },
  aws: {
    aws_secret: process.env.AWS_SECRET_ACCESS_KEY,
    aws_id: process.env.AWS_ACCESS_KEY_ID
  }
};
