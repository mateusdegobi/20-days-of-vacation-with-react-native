import React from "react";
import icons from "../../constants/icons";
import { IconContainer } from "./styles";
import { IconProps } from "./types";

const Icon: React.FC<Omit<IconProps, "source">> = ({
  icon,
  size = 20,
  activeColor,
  style,
}) => {
  if (activeColor) {
    return (
      <IconContainer
        size={size}
        source={icons[icon]}
        style={[{ tintColor: activeColor }, style]}
      />
    );
  }
  return <IconContainer size={size} source={icons[icon]} />;
};

export default Icon;
