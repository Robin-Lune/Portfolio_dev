const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  
}



module.exports = withPWA({
  pwa: {
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  nextConfig
})


    
