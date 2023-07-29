export const checkImageFormat = (req, file, callback) => {
  if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new Error(
        'File format is incorrect. Allowed file formats: jpg/jpeg, png lub gif.',
      ),
      false,
    );
  }
  callback(null, true);
};
