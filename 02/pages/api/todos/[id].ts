import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      res.statusCode = 200;
      return res.end();
    } catch (e) {
      res.statusCode = 500;
      res.send(e);
    }
  }
  res.statusCode = 405;
  return res.end();
};
