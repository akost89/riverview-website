// api/track.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { event, ...data } = req.body;
    console.log('Tracked event:', event, data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error in /api/track:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
