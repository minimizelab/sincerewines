import { NowRequest, NowResponse } from '@now/node';
import got from 'got';

const mini_teamId = 'TEAM ID HERE';

const nowApi = got.extend({
  prefixUrl: 'https://api.zeit.co',
  headers: {
    Authorization: `Bearer ${process.env.NOW_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

type Deploy = (req: NowRequest, res: NowResponse) => void;

const deploy: Deploy = async (req, res) => {
  try {
    const data = await nowApi(`/v5/now/deployments?teamId=${mini_teamId}`);
    res.status(200).send(JSON.parse(data.body));
  } catch (error) {
    res.status(503).send(`Error: ${error}`);
  }
};

export default deploy;
