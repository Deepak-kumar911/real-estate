export default async function handler(req, res) {
    const apiKey = process.env.POSITION_STACK_API_KEY;
    const {location} = req.query
  
    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }
  
    const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${location}`);
    const data = await response.json();
  
    res.status(200).json(data);
  }
  