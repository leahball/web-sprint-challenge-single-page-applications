import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 100px;
  padding: 20px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin: 0px 0px 5px;
    box-shadow: 0px 0px 10px 0px grey;
  }
`;
