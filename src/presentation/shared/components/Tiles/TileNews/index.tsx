import React, { HTMLAttributes } from "react";
import * as S from "./style";
import { GenericBorderStyle } from "../../../components-styled/GenericBorder";
import { Hidden } from "react-grid-system";
interface Props extends HTMLAttributes<HTMLDivElement> {
  image: any;
  color?: string;
  crypto: string;
  cryptoValue: number;
  data: Array<any>;
}
export const TileNewsComponent = ({
  image,
  color,
  crypto,
  cryptoValue,
  data,
  ...rest
}: Props) => {
  return (
    <GenericBorderStyle>
      <S.Container>
        <S.Left className="no-margin-all">
          <S.Title className="text-label w700">NFT’s NEWS</S.Title>
          <S.Description className="text-label">
            New ElephantX NFT to be lauched!
          </S.Description>
          <Hidden xs>
            <S.Link className="text-small-label">Read more +</S.Link>
          </Hidden>
        </S.Left>
        <S.Right backgroundImage={image} backgroundColor={"#8ED0FF"}>
          {/* <img src={image} alt="about news" /> */}
        </S.Right>
      </S.Container>
    </GenericBorderStyle>
  );
};
