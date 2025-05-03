import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1); // 1부터 100까지의 숫자 배열 생성
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* 섹션 제목 */}
        <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>
        {/* 블로그 카드 그리드 */}
        <div className="space-y-4">
          {/* 블로그 카드 반복 */}
          {numbers.map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>블로그 제목 {i}</CardTitle>
                <CardDescription>
                  이것은 블로그 포스트에 대한 간단한 설명입니다. 여러 줄의 텍스트가 있을 수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
