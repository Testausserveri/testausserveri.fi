import { NextApiRequest, NextApiResponse } from "next/types";
import { apiServer } from "../../utils/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query
  if (!code) res.status(400).end("Bad Request")

  // TODO: check for authentication errors.
  console.log(apiServer)
  const response = await fetch(apiServer + `/v1/authenticate`, {
    body: JSON.stringify({ code }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST"
  })

  console.log(response.headers, response.headers.get("set-cookie"))
  console.log(await response.json())
  res.setHeader("set-cookie", response.headers.get("set-cookie"))

  res.redirect("/me")

}
