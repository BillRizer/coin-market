import styled from "styled-components";
import { device } from "../../../../global/utils/device";

export const ContainerCards = styled.div`
  width: 100%;
  height: 610px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f7f7f7 100%);
  @media screen and (${device.mobile}) {
    height: 518px;
  }
`;

export const SectionCards = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  @media screen and (${device.tablet}) {
    display: flex;
    width: 100%;
    flex-direction: column-reverse;
    height: 100%;
    & > div {
      margin-bottom: 32px;
    }
  }
`;

export const SectionCardsLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template:
    "card0 card0 card1 card1 . . . "
    ". card2 card2 card3 card3 . . ";
  gap: 32px;

  @media screen and (${device.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template:
      "card0 card1"
      "card2 card3";
    grid-auto-columns: max-content;
  }
  @media screen and (${device.mobile}) {
    display: -webkit-inline-box;
    overflow: scroll;
    width: 100%;
    padding-left: 20px;
  }
`;

export const SectionCardsRight = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
