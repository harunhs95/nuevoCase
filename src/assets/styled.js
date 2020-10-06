import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  background: white;
  border: 1px solid #504f4f;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  > div {
    margin-top: 20px;
  }
  @media (max-width: 959px){
    width: unset!important;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  background: whiteSmoke;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: 1px solid black;
  max-height: 70vh;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  background: white;
`;

export const SearchContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: white;
  align-items: center;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  @media (max-width: 767px){
    flex-direction: column;
    justify-content: center;
    > div {
      width: 100%;
      margin: 5px!important;
    }
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 10px;
  * {
    margin-left: 20px;
  }
  .infoContainer {
    display: flex;
    flex-direction: column;
  }
`;

export const CustomButton = styled(Button)`
  text-transform: none!important;
  color: white!important;
  background: #504f4f!important;
  margin-left: 20px!important;
  width: 150px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  background-color: #504f4f;
  color: white;
`;
