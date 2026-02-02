// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello World from Vercel! We are redeployying fine. 3rd redeploy" });
}
