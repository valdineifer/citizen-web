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

export const Container = styled.section`
  padding: 50px 0;
  background: #d3adf7;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex: 1 0 auto; */

  .ant-typography {
    margin-top: 10px;
    font-weight: lighter;
  }
`;
