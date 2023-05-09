import { version } from '../../config/version';

export default (_req, res) => {
  res.status(200).json({
    buildId: version.version,
  });
};
