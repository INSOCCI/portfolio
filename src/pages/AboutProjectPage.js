import React from 'react'
import styled from 'styled-components'
import { Inner } from '../components/style/layouts/ScrollSection'
import Card from '../components/purpose/Card'

const AboutProjectPage = () => {
  return (
    <Wrap>
      <ProjectCards>
        <Card><div>약해지지마</div></Card>
      </ProjectCards>
    </Wrap>
  )
}

const Wrap = styled(Inner)`

`;
const ProjectCards = styled.div``;

export default AboutProjectPage