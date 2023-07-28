/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        NEXT_APP_WEATHER_KEY: process.env.NEXT_APP_WEATHER_KEY,
    },
}

module.exports = nextConfig
