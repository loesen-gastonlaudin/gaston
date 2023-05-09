export default (_req, res) => {
  res.status(200).json({
    buildId: process.env.NEXT_PUBLIC_BUILD_ID,
  });
};
