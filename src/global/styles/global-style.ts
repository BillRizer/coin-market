import { createGlobalStyle } from "styled-components";
import { theme } from "./theme-base";
import { device } from "../utils/device";
import { mediaQ } from "../utils/_media-query";

const GlobalStyle = createGlobalStyle`
html{
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
    font-size:62.5%
    
}

@media screen and (${device.tablet}) {
    html{
        font-size:52%;
    }
}
@media screen and (${device.mobile}) {
    html{
        font-size:44%
    }
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial;
  box-sizing: border-box;
  /* font-size: 1.6rem; */
}
*{
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6,p,a,.text-label,.text-small-label{
    color: ${(p) => `${p.theme.colors.textBase}`};
    margin: 20px 0;
    font-weight :normal;
}
p,a{
    font-size: ${(p) => `${p.theme.fonts.p.size}`};
    line-height: ${(p) => `${p.theme.fonts.p.LineHeight}`};
    letter-spacing: ${(p) => `${p.theme.fonts.p.LetterSpacing}`};
    text-decoration:none
}

.text-label{
    font-size: ${(p) => `${p.theme.fonts.label.size}`};
    line-height: ${(p) => `${p.theme.fonts.label.LineHeight}`};
    letter-spacing: ${(p) => `${p.theme.fonts.label.LetterSpacing}`};
}
.text-small-label{
    font-size: ${(p) => `${p.theme.fonts.smallLabel.size}`};
    line-height: ${(p) => `${p.theme.fonts.smallLabel.LineHeight}`};
    letter-spacing: ${(p) => `${p.theme.fonts.smallLabel.LetterSpacing}`};
}
h1{
    font-size: ${(p) => `${p.theme.fonts.h1.size}`};
    line-height: ${(p) => `${p.theme.fonts.h1.LineHeight}`};
    letter-spacing: ${(p) => `${p.theme.fonts.h1.LetterSpacing}`};
}
h2{
    font-size: ${(p) => `${p.theme.fonts.h2.size}`};
    
}
h3{
    font-size: ${(p) => `${p.theme.fonts.h3.size}`};
}
h4{
    font-size: ${(p) => `${p.theme.fonts.h5.size}`};
    @media screen and (${device.tablet}) {
        font-size: ${(p) => `${p.theme.fonts.h4.size}`};
  }
}
h5{
    font-size: ${(p) => `${p.theme.fonts.h5.size}`};
}
.w400{
    font-weight:400;
}
.w500{
    font-weight:500;
}
.w600{
    font-weight:600;
}
.w700{
    font-weight:700;
}
.color-primary{
    color:${(p) => `${p.theme.colors.primary.base}`};
}
.color-sec-1{
    color:${(p) => `${p.theme.colors.secondary.w100}`};
}
.color-sec-2{
    color:${(p) => `${p.theme.colors.secondary.w200}`};
}
.color-sec-3{
    color:${(p) => `${p.theme.colors.secondary.w300}`};
}
.color-sec-4{
    color:${(p) => `${p.theme.colors.secondary.w400}`};
}
.color-sec-base{
    color:${(p) => `${p.theme.colors.secondary.base}`};
}
.color-sec-8{
    color:${(p) => `${p.theme.colors.secondary.w800}`};
}
.color-sec-9{
    color:${(p) => `${p.theme.colors.secondary.w900}`};
}
.flex-center{
    justify-content:center;
}
.flex-space-between{
    justify-content: space-between;
}
.center{
    text-align:center;
}
.full-width{
    width:100%;
}
.block-130{
    height:130px;
    display:block;
    width:100%;
}
.no-margin,.no-margin-all > *{
    margin:0;
}
.no-padding{
    padding:0;
}
.generic-box-shadow{
    background: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
`;

export default GlobalStyle;
