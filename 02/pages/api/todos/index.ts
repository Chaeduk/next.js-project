import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

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
  if (req.method === "POST") {
    const { text, color } = req.body;
    if (!text || !color) {
      res.statusCode = 400;
      return res.end("text 혹은 color가 없습니다.");
    }
  }

  res.statusCode = 405;
  return res.end();
};
