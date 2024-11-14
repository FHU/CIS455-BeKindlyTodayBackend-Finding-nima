import {
  S3,
  PutObjectCommandInput,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import config from './config';

export const uploadFile = async ({
  file,
  folderName,
}: {
  file: File;
  folderName: String;
}) => {
  const fileBuffer = await Buffer.from(await file.arrayBuffer());

  const fileName = await cleanseName(file.name);

  const s3client = new S3({
    region: 'us-east-1',
    credentials: {
      accessKeyId: config.awsPublicKey,
      secretAccessKey: config.awsSecretKey,
    },
  });

  const Key = `images/${config.inDev ? 'dev/' : ''}${folderName}/${fileName}`;

  const options: PutObjectCommandInput = {
    Bucket: config.bucketName,
    Key: Key,
    Body: fileBuffer,
    ContentType: file.type,
    ContentLength: fileBuffer.length,
  };

  const result = await s3client.send(new PutObjectCommand(options));

  return `${config.cdnDomain}${Key}`;
};

export const cleanseName = (fileName: string) =>
  fileName.toLocaleLowerCase().replace(' ', '_');
