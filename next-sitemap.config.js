/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zanardomarcenaria.com.br',
  generateRobotsTxt: true,
  sitemapSize: 5000,

  additionalSitemaps: [
    'https://zanardomarcenaria.com.br/sitemap-paginas.xml',
  ],

  exclude: ['/404', '/api/*'],
  changefreq: 'monthly',
  priority: 0.8,
};