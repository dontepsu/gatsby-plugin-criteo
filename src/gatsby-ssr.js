
import React from 'react';

const createTag = () => '<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true"></script>';
exports.onRenderBody = ({ setHeadComponents }, { includeInDevelopment = false }) => {
  if (process.env.NODE_ENV === `production` || includeInDevelopment) {
    setHeadComponents([
      <script
        key="criteo"
        dangerouslySetInnerHTML={{
          __html: createTag(),
        }}
      />,
    ]);
  }
};
