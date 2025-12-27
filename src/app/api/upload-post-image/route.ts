import cloudinary from "@/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";
// ========================================================
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;
    const pathname = formData.get("pathname") as string;
    if (!file)
      return NextResponse.json({ error: "No Image Uploaded" }, { status: 400 });
    const fileBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(fileBuffer).toString("base64");
    const imageResponse = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64}`,
      {
        folder: pathname,
        transformation: [
          {
            width: 900,
            height: 600,
            crop: "limit",
            quality: "auto",
            fetch_format: "auto",
          },
        ],
      }
    );
    return NextResponse.json(
      { image: imageResponse.secure_url },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed Upload Image Post" });
  }
}
