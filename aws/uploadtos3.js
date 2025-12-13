import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "./s3.js";

export const uploadToS3 = async (file, folder = "uploads") => {
  const fileKey = `${folder}/${Date.now()}-${file.originalname}`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  await s3.send(new PutObjectCommand(params));

  return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
};
