import { PageHeader } from 'antd';
import styled from 'styled-components';

export const StyledHeader = styled(PageHeader)`
  padding: 0;
  text-align: center;

  .ant-menu {
    background-color: #d3adf7 !important;
    border: 0;
    line-height: 55px;
    font-size: 1.25em;
  }

  /* padding 0, to exclude padding-top and others */
  .ant-page-header-content {
    padding: 0;
  }

  /* When an menu item is selected */
  .ant-menu-item-active, .ant-menu-item-selected {
    color: black !important;
    border-color: #7367F0 !important;
  }
  .ant-menu-item-selected {
    background-color: #b37feb !important;
  }
`;
