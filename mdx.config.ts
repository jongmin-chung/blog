import remarkGfm from "remark-gfm";
import withSlugs from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypePrettyCode from "rehype-pretty-code";

/**
 * MDX Config's Settings Dynamic MDX and Static MDX for Reuse.
 */
const mdxConfig = {
  remarkPlugins: [remarkGfm], // 정적 mdx 파일
  rehypePlugins: [withSlugs, rehypeSanitize, rehypePrettyCode],
};

export default mdxConfig;
