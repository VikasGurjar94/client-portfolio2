import fs from 'fs';
import https from 'https';

https.get('https://aditikathpalia.wordpress.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // WordPress images usually have 'wp-content/uploads'
    const match = data.match(/<img[^>]*src="([^"]*wp-content\/uploads[^"]*(?:png|jpg|jpeg))"/i);
    if (match) {
      const url = match[1];
      console.log('Found Image URL:', url);
      const file = fs.createWriteStream("public/profile.jpg");
      https.get(url, (imgRes) => {
        imgRes.pipe(file);
        imgRes.on('end', () => {
          console.log('Profile image downloaded successfully to public/profile.jpg');
        });
      }).on('error', err => {
        console.error('Error downloading:', err);
      });
    } else {
      console.log('Could not find profile image URL.');
    }
  });
}).on('error', (err) => {
  console.log("Error fetching site:", err.message);
});
