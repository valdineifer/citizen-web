import styled from 'styled-components';

export const Content = styled.section`
  h1.ant-typograph {
    font-weight: 300 !important;
    font-size: 5em;
  }
`;

export const ContentHeader = styled.section`
  background: linear-gradient(221deg, #d3adf7 0%, #FFFFFF00 90%), url('https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80');
  background-image: ;
  padding: 100px 10%;
`;

export const Section = styled.section`
  padding: 20px 0;
  background: #d3adf7;
  text-align: ${props => (props.textCenter ? 'center' : 'left')};
`;
