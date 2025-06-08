import { NextApiRequest, NextApiResponse } from "next/types";
import { apiServer } from "../../utils/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, error, state } = req.query

  if (error) {
    console.error("OAuth error:", error);
    const sanitizedError = String(req.query.error_description || "")
      .replace(/[^a-zA-Z0-9 _-]/g, "");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(`Kirjautuminen epäonnistui: \n\n${sanitizedError}`);
    return;
  }

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
  res.setHeader("set-cookie", response.headers.get("set-cookie") || "")

  if (state == "opener") {
    res.end(`<script>parent.opener.postMessage('login');window.close();</script>`);
    return;
  }
  res.redirect("/me")
}
