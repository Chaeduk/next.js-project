import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = Data.todo.getList();
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      res.statusCode = 500;
      return res.send(e);
    }
  }

  res.statusCode = 405;
  return res.end();
};
