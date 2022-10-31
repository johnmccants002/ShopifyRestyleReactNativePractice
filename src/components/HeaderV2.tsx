import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={375}
      height={176}
      viewBox="0 0 375 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1890_4390)">
        <Path d="M-18-1h375v174H-18V-1z" fill="#00428C" />
        <G filter="url(#filter0_d_1890_4390)">
          <Path
            d="M20.504 137.004c-41.661 2.433-69.98-7.989-100.504-36.99V176h476V74.405C363.673 22.58 320.854-1.266 260.598-.998c-59.777.267-134.006 75.403-134.006 75.403s-58.294 59.808-106.088 62.599z"
            fill="#4D7BAF"
          />
        </G>
        <G filter="url(#filter1_d_1890_4390)">
          <Path
            d="M59.273 140.818C13.147 143.512-18.205 131.971-52 99.858V184h527V71.5c-35.791-57.39-83.198-83.795-149.909-83.498-66.183.295-148.364 83.498-148.364 83.498s-64.54 66.228-117.454 69.318z"
            fill="#80A1C6"
          />
        </G>
        <G filter="url(#filter2_d_1890_4390)">
          <Path
            d="M70.463 156.412C19.7 159.381-14.806 146.662-52 111.271V204h580V80.02c-39.391-63.246-91.565-92.345-164.985-92.017-72.839.325-163.285 92.017-163.285 92.017s-71.03 72.986-129.267 76.392z"
            fill="#EDF2F8"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1890_4390">
          <Path fill="#fff" transform="translate(-80 -1)" d="M0 0H476V177H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent