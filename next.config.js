/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['xn--63-6kcaj1b8ag1aic4c8g.xn--p1ai','diesel-exp.ru','www.enisey-servis.ru','cdn-icons-png.flaticon.com','dizelstore.ru','traktortula.ru','diz-avto.ru'],
  }
}

module.exports = nextConfig
