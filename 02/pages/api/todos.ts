import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { TodoType } from "../../types/todo";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        fs.readFile("data/todos.json", (err, data) => {
          if (err) {
            return reject(err.message);
          }
          const todosData = data.toString();
          if (!todosData) {
            return resolve([]);
          }
          const todos = JSON.parse(data.toString());
          return resolve(todos);
        });
      });
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
