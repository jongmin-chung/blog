"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Utterances() {
  const commentsEl = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;

    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";

    const username = "jongmin-chung";
    const repoName = "blog";

    scriptEl.setAttribute("repo", `${username}/${repoName}`);
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", `github-${themeRef.current}`);
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);

    return () => {
      if (commentsEl.current) {
        const script = commentsEl.current.querySelector("script");
        if (script) script.remove();
      }
    };
  }, []);

  useEffect(() => {
    themeRef.current = theme;

    const timer = setTimeout(() => {
      const utterancesIframe =
        commentsEl.current?.querySelector<HTMLIFrameElement>(".utterances-frame");
      if (utterancesIframe?.contentWindow) {
        utterancesIframe.contentWindow.postMessage(
          {
            type: "set-theme",
            theme: `github-${theme}`,
          },
          "https://utteranc.es",
        );
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [theme]);

  return <div ref={commentsEl} className="comments-wrapper" />;
}
