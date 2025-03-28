import { revalidatePath } from "next/cache";

export async function POST(req, res) {
  revalidatePath("/");

  return Response.json(res);
}
