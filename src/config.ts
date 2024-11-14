export default {
  inDev: process.env.NODE_ENV === 'development',
  clientId: process.env.KINDE_BACKEND_CLIENT_ID,
  kindeUrl: process.env.KINDE_URL,
  kindeSecret: process.env.KINDE_CLIENT_SECRET,
  frontendUrl: process.env.SITE_URL,
  unAuthorizedUrl: process.env.UNAUTHORIZED_URL,
  awsPublicKey: process.env.AWS_PUBLIC_KEY!,
  awsSecretKey: process.env.AWS_SECRET_KEY!,
  bucketName: process.env.BUCKET_NAME,
  cdnDomain: process.env.CDN_DOMAIN,
};
