import { createGlobalStyle } from "styled-components";
import { theme } from "./theme-base";
import { device } from "../utils/device";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial;
}
h1,h2,h3,h4,h5,h6,p,a,.text-label,.text-small-label{
    color: ${(p) => `${p.theme.colors.textBase}`};
    margin: 20px 0;
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
.color-primary{
    color:${(p) => `${p.theme.colors.primary.base}`};
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
`;

export default GlobalStyle;
