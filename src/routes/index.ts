import express from 'express';
const router  = express.Router();

router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

 router.get('/version', (_req, res) => {
  const version: string = "1.0.0";
  const jsonResp= {"name":"FODA Be","version": version};
  res.json(jsonResp);
 });

export default router;
