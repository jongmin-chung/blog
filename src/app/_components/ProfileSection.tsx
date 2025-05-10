import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Github from "@/lib/lucide-react/Github";
import Gitlab from "@/lib/lucide-react/Gitlab";
import { ProfileImage } from "@/components/ProfileImage";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/jongmin-chung",
  },
  {
    icon: Gitlab,
    href: "https://gitlab.com/jongmin-chung",
  },
];

export default function ProfileSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <div className="h-36 w-36 overflow-hidden rounded-full">
                <ProfileImage />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">제이미</h3>
            <p className="text-primary text-sm">Software Engineer</p>
          </div>

          <div className="flex justify-center gap-2">
            {socialLinks.map((item, index) => (
              <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
