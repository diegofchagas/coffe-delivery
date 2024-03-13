import { IconProps } from "@phosphor-icons/react";
import { Button } from "./style";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  Icon?: React.ComponentType<IconProps>;
  size: number;
  selected: boolean;
}

export const ButtonComponent = ({title, onClick,Icon,size,selected}: ButtonProps) => {
  return (
    <Button type="button" onClick={onClick} selected={selected}>
      {Icon && <Icon size={size} />}
      {title}
    </Button>
  );
};
