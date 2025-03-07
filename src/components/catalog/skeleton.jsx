import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={225}
    height={280}
    viewBox="0 0 480 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="6" rx="20" ry="20" width="100%" height="300" />
    <rect x="6" y="324" rx="11" ry="11" width="97" height="28" />
    <rect x="-1" y="362" rx="12" ry="12" width="222" height="24" />
    <rect x="7" y="464" rx="27" ry="27" width="144" height="50" />
    <rect x="169" y="463" rx="27" ry="27" width="162" height="58" />
    <rect x="1" y="396" rx="11" ry="11" width="62" height="29" />
  </ContentLoader>
);

export default Skeleton;
