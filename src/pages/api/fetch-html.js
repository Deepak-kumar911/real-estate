import * as cheerio from 'cheerio'; 
import { apiUrl } from '@/utils/baseUrl';
export default async function handler(req, res) {
    const { city } = req.query;
    try {
        const url = `${apiUrl}/new-projects-${city}`;
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90.0.4430.93 Safari/537.36",
          Accept: "text/html",
        },
      });
  
      const htmlString = await response.text();
      const html = cheerio.load(htmlString)
      const projects = [];

      html('.mghome__prjblk__imgsec').each((i, el) => {
        const img = html(el).find('img').attr('data-src') || html(el).find('img').attr('src');
        const prjname = html(el).find('.mghome__prjblk__prjname').text().trim();
        const locname = html(el).find('.mghome__prjblk__locname').text().trim();
        const price = html(el).find('.mghome__prjblk__price').text().trim();
        const bhk = html(el).find('.mghome__prjblk__bhk').text().trim()
        projects.push({img,prjname,locname,price,bhk})
      });
      
      res.status(200).json({data:projects});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch external HTML." });
    }
  }
  