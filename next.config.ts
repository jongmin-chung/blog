import type { NextConfig } from "next";
import createMDX from "@next/mdx"

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

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);
