require('dotenv-flow').config();

export const config = {
    PORT: process.env.PORT!,
    DB_HOST: process.env.DB_HOST!,
    DB_PASSWORD: process.env.DB_PWD!,
    DB_NAME: process.env.DB_NAME!,
    DB_USER: process.env.DB_USER!,
    DB_DRIVER: process.env.DB_DRIVER!
}
