import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_town_r6pc from '../../images/undraw_town_r6pc.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Demodam</StyledHeading>
        <StyledParagraph>Een digitale gemeente gebouwd op commonground</StyledParagraph>
        <StyledSubParagraph>Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er beschikbaar zijn voor gemeenten.</StyledSubParagraph>
        <StyledSubParagraph><a href="https://commonground.nl/blog/view/6c422c0a-e541-41c8-8261-9c8bc90f4d87/doe-mee-met-demodam-de-common-ground-showcase-website">Lees hier meer over Demodam</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_town_r6pc} alt="Illustratie van man met vrouw op straat in stad" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
