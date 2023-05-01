import { useState, useEffect, useRef } from "react";
import * as S from "./style";
import { IconComponent } from "../Icon";
import { useScrollBlock } from "../../../../application/hook/useScrollBlock";
import CoverSubBanner from "../../../../assets/img/sub-banner.svg";

interface Props {
  images: Array<string>;
}

export const BannerCarrouselComponent = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <>
      <div
        ref={ref}
        style={{ width: "100%", height: "665px", position: "relative" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
      </div>
      {/* <img src={CoverSubBanner} alt="background banner" /> */}
    </>
  );
};
