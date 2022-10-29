import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonChannels = (props) => (
  <ContentLoader
    speed={3}
    width={460}
    height={280}
    viewBox="0 0 476 260"
    backgroundColor="#16173C"
    foregroundColor="#1D1F50"
    {...props}
  >
    <rect x="-20" y="0" rx="15" ry="15" width="160" height="25" />
    <rect x="-2" y="45" rx="0" ry="0" width="350" height="100" />
    <rect x="-2" y="165" rx="0" ry="0" width="350" height="100" />
  </ContentLoader>
)

export default SkeletonChannels;