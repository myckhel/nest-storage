import { PutObjectCommandInput } from "@aws-sdk/client-s3";

export interface FileOptions {
  mimeType?: string;
  s3Meta?: PutObjectCommandInput;
}
