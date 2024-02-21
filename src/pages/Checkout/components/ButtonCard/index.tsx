import { IconProps } from "@phosphor-icons/react";
import { Button } from "./style";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  Icon: React.ComponentType<IconProps>;
  size: number;
}

export const ButtonComponent = ({title, onClick,Icon,size,}: ButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Icon size={size} />
      {title}
    </Button>
  );
};
