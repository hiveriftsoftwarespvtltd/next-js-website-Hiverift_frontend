<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | HiveRift</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1e293b;
            background-color: #0f172a;
            margin: 0;
            padding: 30px;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            padding: 28px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }
          h1 {
            color: #0284c7;
            font-size: 26px;
            margin-top: 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          p.intro {
            font-size: 14px;
            color: #64748b;
            line-height: 1.5;
            margin-bottom: 20px;
          }
          .badge {
            background-color: #e0f2fe;
            color: #0369a1;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 13px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            font-size: 13px;
          }
          th {
            background-color: #f8fafc;
            color: #334155;
            text-align: left;
            padding: 12px 14px;
            border-bottom: 2px solid #e2e8f0;
            font-weight: 600;
          }
          td {
            padding: 10px 14px;
            border-bottom: 1px solid #f1f5f9;
            word-break: break-all;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          a {
            color: #0284c7;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority-pill {
            background: #f1f5f9;
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 12px;
            color: #475569;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>HiveRift XML Sitemap</h1>
          <p class="intro">
            This XML sitemap is generated for search engines like Google, Bing, and Yandex. It contains <span class="badge"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span>.
          </p>
          <table>
            <thead>
              <tr>
                <th width="65%">URL Location</th>
                <th width="15%">Priority</th>
                <th width="20%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="priority-pill">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
