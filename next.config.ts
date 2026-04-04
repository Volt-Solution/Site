import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',          // Gera site estático (pasta /out)
  trailingSlash: true,       // Compatibilidade com servidores Apache/Nginx
  images: {
    unoptimized: true,       // Necessário para export estático
  },
}

export default nextConfig
