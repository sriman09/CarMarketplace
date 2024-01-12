const AWS = require("aws-sdk");

const imageUpload = async (req, res, next) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No files provided" });
  }

  // Configure AWS SDK
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
  });

  // Create an S3 instance
  const s3 = new AWS.S3();

  // Upload each file to S3

  const key = `${Date.now()}.${file.originalname.split(".").pop()}`;
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: key,
    Body: file.buffer,
  };
  let filePath;
  try {
    const data = await s3.upload(params).promise();
    filePath = data.key;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error uploading files to S3" });
  }

  res.status(200).json({
    path: filePath,
  });
};

module.exports = { imageUpload };
