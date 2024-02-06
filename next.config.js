/** @type {import('next').NextConfig} */
const nextConfig = {
    
      // output:"export"
      
}

module.exports = nextConfig





const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true'
  })
    
  module.exports = withBundleAnalyzer({
      env: {
          NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
      },
  })