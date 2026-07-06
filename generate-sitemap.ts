import { writeFileSync } from 'fs';

const baseUrl = 'https://herohandymanpro.com';

const pages = [
  { url: '', priority: '1.0', changefreq: 'weekly' }, // Home
  { url: '/services/', priority: '0.9', changefreq: 'weekly' },
  { url: '/service-areas/', priority: '0.9', changefreq: 'monthly' },
  { url: '/reviews/', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly' },
  
  // GBP Landing Pages
  { url: '/gbp/des-peres', priority: '0.9', changefreq: 'weekly' },
  { url: '/gbp/ofallon', priority: '0.9', changefreq: 'weekly' },
  { url: '/gbp/edwardsville', priority: '0.9', changefreq: 'weekly' },
  
  // Service Pages
  { url: '/services/deck-repair', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/bathroom-remodeling', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/door-installation', priority: '0.9', changefreq: 'weekly' },
  
  // City Pages
  { url: '/service-areas/ofallon-il-handyman/', priority: '0.8', changefreq: 'monthly' },
  { url: '/service-areas/edwardsville-il-handyman/', priority: '0.8', changefreq: 'monthly' },
  { url: '/service-areas/belleville-il-handyman/', priority: '0.8', changefreq: 'monthly' },
  { url: '/service-areas/st-louis-mo-handyman/', priority: '0.8', changefreq: 'monthly' },
  { url: '/service-areas/collinsville-il-handyman/', priority: '0.8', changefreq: 'monthly' },
  { url: '/service-areas/glen-carbon-il-handyman/', priority: '0.8', changefreq: 'monthly' },
  { url: '/service-areas/st-charles-mo-handyman/', priority: '0.8', changefreq: 'monthly' },
  { url: '/service-areas/fenton-mo-handyman/', priority: '0.8', changefreq: 'monthly' },
];

const currentDate = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
writeFileSync('/home/ubuntu/hero-handyman-pro/client/public/sitemap.xml', sitemap, 'utf-8');
console.log('✓ Sitemap generated at /client/public/sitemap.xml');

// Create/update robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

writeFileSync('/home/ubuntu/hero-handyman-pro/client/public/robots.txt', robotsTxt, 'utf-8');
console.log('✓ robots.txt updated at /client/public/robots.txt');

console.log(`\n✓ Sitemap includes ${pages.length} pages`);
console.log('✓ All SEO files generated successfully!');
