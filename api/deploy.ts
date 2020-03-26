import { NowRequest, NowResponse } from '@now/node';

type Deploy = (req: NowRequest, res: NowResponse) => void;

const deploy: Deploy = (req, res) => {
  res.send('hello from api');
};

export default deploy;
