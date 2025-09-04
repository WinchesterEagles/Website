/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://winchestervolleyball.co.uk',
  generateRobotsTxt: true,          // creates robots.txt automatically
  changefreq: 'monthly',            // default for all pages
  priority: 0.7,                    // default priority for all pages
  sitemapSize: 5000,                // default size, good for small sites
  // optional: you can still override priorities per page if needed
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,                     // homepage most important
      '/adults': 0.9,
      '/juniors': 0.9,
      '/teams': 0.8,
      '/important-documents': 0.7,
      '/commitee': 0.5,
    };

    return {
      loc: path,
      changefreq: 'monthly',
      priority: priorities[path] || 0.7, // fallback to default
    };
  },
};