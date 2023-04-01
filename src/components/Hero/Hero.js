import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hey <br />
      Rahul here.
    </SectionTitle>
    <SectionText>
    &#8826; Coder &#8827;<br />
    "Welcome, welcome, welcome! I'm honored you've decided to check out my portfolio. Let's dive into my latest and greatest."
    </SectionText>
    <Button onClick={() => window.location = 'https://www.linkedin.com/in/rahul-prajapati-3ab0331bb/'}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;