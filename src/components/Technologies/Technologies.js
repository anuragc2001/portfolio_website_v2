import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Your portfolio is your resume and your business card. Learn how to build a responsive personal development portfolio from scratch and make your first impression count.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          Front-End
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          Back-End
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          Node.js and Databases
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          DSA
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          Data Structures and Algorithms
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
