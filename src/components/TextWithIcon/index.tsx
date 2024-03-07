import { ReactNode } from "react";
import { TextInfoContainer, IconContainer } from "./style";

interface  InfoItemsProps{
  icon:ReactNode;
  text: string | ReactNode;
  iconBg: string;

}

export const TextWithIcon = ({icon,text,iconBg}: InfoItemsProps) => {
  return (
    <TextInfoContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </TextInfoContainer>
  )
}
