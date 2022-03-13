import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Home
      </SectionTitle>
      <SectionText>
        Your portfolio is your resume and your business card. Learn how to build a responsive personal development portfolio from scratch and make your first impression count.
      </SectionText>
      <Button onclick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;