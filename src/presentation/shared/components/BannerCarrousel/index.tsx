import * as S from "./style";
import CoverSubBanner from "../../../../assets/img/banner-min.png";

export const BannerCarrouselComponent = () => {
  return <S.BannerWrapper>{<S.Image src={CoverSubBanner} />}</S.BannerWrapper>;
};
