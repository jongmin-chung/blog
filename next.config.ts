import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "images.unsplash.com" },
      { hostname: "prod-files-secure.s3.amazonaws.com" },
      { hostname: "www.notion.so" },
    ],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx", "md"],
};

export default nextConfig;
