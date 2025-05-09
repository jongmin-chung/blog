"use client";

import { useEffect, useRef, useState } from "react";

export default function Utterances() {
  const commentsEl = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"pending" | "success" | "failed">("pending");

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.onload = () => setStatus("success");
    scriptEl.onerror = () => setStatus("failed");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";

    const username = "jongmin-chung";
    const repoName = "blog";

    scriptEl.setAttribute("repo", `${username}/${repoName}`);
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "preferred-color-scheme");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return (
    <div className="comments-wrapper">
      {status === "failed" && <div>Error. Please try again.</div>}
      {status === "pending" && <div>Loading script...</div>}
      <div ref={commentsEl} />
    </div>
  );
}
