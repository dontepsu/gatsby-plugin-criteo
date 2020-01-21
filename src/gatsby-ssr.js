
import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, { includeInDevelopment = false }) => {
  if (process.env.NODE_ENV === `production` || includeInDevelopment) {
    setHeadComponents([
      <script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true" />,
    ]);
  }
};
