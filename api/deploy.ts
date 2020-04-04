import { NowRequest, NowResponse } from '@now/node';
import got from 'got';

const nowAPI = got.extend({
  headers: {
    Authorization: `bearer ${process.env.NOW_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

type Deploy = (req: NowRequest, res: NowResponse) => void;

const deploy: Deploy = async (req, res) => {
  const { projectId, teamId, deployUrl } = req.query;
  try {
    const { body } = await nowAPI(
      `https://zeit.co/api/v5/now/deployments?projectId=${projectId}&limit=10&teamId=${teamId}`
    );
    const isActive =
      JSON.parse(body).deployments.filter(item => item.state === 'QUEUED')
        .length > 0;
    if (!isActive) {
      await got(deployUrl as string);
    }
    res
      .status(200)
      .send(isActive ? 'Build already in progress' : 'Build started or queued');
  } catch (error) {
    res.status(503).send(`Error: ${error}`);
  }
};

export default deploy;
