/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@/lib'] = path.join(__dirname, 'lib');
    return config;
  }
}

export default nextConfig
