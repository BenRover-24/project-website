import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function PageHeading({ title, bgSrc, pageLinkText, subText }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <p className="lead">{subText}</p>
        </Div>
      </Div>
    </Div>
  );
}
