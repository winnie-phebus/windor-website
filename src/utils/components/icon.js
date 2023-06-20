import React from "react";

export const defaultClassStr = "justify-center w-5 h-5";

export default function Icon({
  icon,
  xmlns = "http://www.w3.org/2000/svg",
  classNames = defaultClassStr,
  iconName = "icon",
  viewBox = "0 0 24 24",
  fill = "none",
  width = 5,
  height = 5,
  stroke = "currentColor",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  strokeWidth = 1.5,
  onClick = null,
}) {
  //   console.log(props);
  //   const viewBox = props.viewBox || "0 0 24 24";

  onClick ? (classNames += " cursor-pointer") : (classNames += "");
  return (
    <svg
      xmlns={xmlns}
      class={classNames}
      name={iconName}
      viewBox={viewBox}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      stroke-width={strokeWidth}
      onClick={onClick}>
      <path
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
        d={icon}
      />
    </svg>
  );
}
