import { useState, useEffect, useRef } from "react";
import * as S from "./style";
import { IconComponent } from "../Icon";
import { useScrollBlock } from "../../../../application/hook/useScrollBlock";
import CoverSubBanner from "../../../../assets/img/banner-min.png";
import BannerBg from "../../../../assets/img/banner-bg-min.png";

interface Props {
  images: Array<string>;
}

export const BannerCarrouselComponent = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <S.BannerWrapper >
      {<S.Image src={CoverSubBanner} />}
    </S.BannerWrapper>
  );
};
