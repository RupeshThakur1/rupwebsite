const images = {};
const imageContext = require.context('./Photos', false, /\.(jpg|jpeg|png)$/);

imageContext.keys().forEach((key) => {
  const imageName = key.replace('./', '');
  images[imageName] = imageContext(key);
});

export default images;
