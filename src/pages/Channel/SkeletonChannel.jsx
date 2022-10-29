import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonChannel = (props) => (
  <ContentLoader
    speed={3}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 375 375"
    backgroundColor="#16173C"
    foregroundColor="#1D1F50"
    {...props}
  >
    <rect x="-20" y="25" rx="20" ry="20" width="120" height="25" />
    <circle cx="453" cy="48" r="46" />
    <circle cx="196" cy="66" r="46" />
    <rect x="325" y="25" rx="0" ry="0" width="25" height="25" />
    <rect x="125" y="122" rx="0" ry="0" width="145" height="30" />
    <rect x="30" y="205" rx="0" ry="0" width="325" height="70" />
    <rect x="105" y="165" rx="0" ry="0" width="185" height="25" />
  </ContentLoader>
)

export default SkeletonChannel;