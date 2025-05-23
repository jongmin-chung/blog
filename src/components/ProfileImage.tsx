"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function ProfileImage() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "light" ? "/images/profile-light.png" : "/images/profile-dark.png"}
      alt="프로필 이미지"
      width={144}
      height={144}
      className="object-cover"
    />
  );
}
