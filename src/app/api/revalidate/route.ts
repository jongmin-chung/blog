import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";
import { formatISO } from "date-fns";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (tag !== null) {
    revalidateTag(tag);
  }

  return Response.json({ revalidated: true, now: formatISO(new Date()) });
}
