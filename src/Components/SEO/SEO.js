// src/components/SEO/SEO.js

import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, name, type, keyword }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}

      {/* self tags */}
      <meta name="creator" content={name} />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
      {/* End self tags */}
    </Helmet>
  );
}
