import React, { HTMLAttributes } from "react";
import * as S from "./style";
interface Props extends HTMLAttributes<HTMLDivElement> {
  image: any;
  title?: string;
  subTitle: string;
}
export const NotFoundComponent = ({
  image,
  title,
  subTitle,
  ...rest
}: Props) => {
  return (
    <S.Container className="no-margin-all">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <div className="text-label">{subTitle}</div>
    </S.Container>
  );
};
