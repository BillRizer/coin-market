import React, { ReactPropTypes, useState } from "react";
import * as S from "./style";
import IconArrowUp from "../../../../../assets/icons/icon-arrow-up.svg";

interface Props {
  isCompact: boolean;
  image: string;
  name: string;
  options?: [{ icon: string; label: string; callback: Function }];
}

export const AvatarComponent = ({ isCompact, image, name, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container onClick={() => setIsOpen(!isOpen)}>
      <S.ImageWrap>
        <img src={image} alt={`Avatar of ${name}`} />
      </S.ImageWrap>
      {!isCompact && <S.Text className="text-label w400">{name}</S.Text>}
      <S.Icon src={IconArrowUp} alt="arrow menu icon" className="open" />
      {options && isOpen && (
        <S.DropdownMenu>
          {options.map((value, k) => (
            <S.DropdownMenuItem key={k} onClick={() => value.callback()}>
              <img src={value.icon} alt={value.label} />
              <div className="text-label">{value.label}</div>
            </S.DropdownMenuItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.Container>
  );
};
