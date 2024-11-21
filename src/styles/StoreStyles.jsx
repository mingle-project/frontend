import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background-color: #d9d9d9;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

export const MainStar = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 274px;
    height: auto;
  }
`;

export const Wearing = styled.div`
  position: absolute;
  top: 150px;
  left: 70%;
  transform: translateX(-50%);
  img {
    width: 90px;
    height: auto;
  }
`;

export const BottomBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 393px;
  height: 426px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
  }
`;

export const BottomBar = styled.div`
  position: fixed;
  top: 440px;
  width: 96px;
  height: 5px;
  img {
    width: auto;
    height: auto;
  }
`;

export const ImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 5px;
  width: 100%;
`;

export const ImageItem = styled.div`
  position: relative;
  img {
    width: 70%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemPrice = styled.div`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  font-size: 25px;
  img {
    width: 25px;
    height: auto;
    margin-right: 4px;
    margin-left: -20px;
    margin-top: 5px;
  }
`;

export const ScrollableContent = styled.div`
  position: absolute;
  top: -10px;
  bottom: 10px;
  left: 0;
  right: 0;
  overflow-y: auto;
  padding-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #d9d9d9;
  }

  &::-webkit-scrollbar-track {
    background: #f3f3f3;
    border-radius: 10px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 17px;
  color: #606060;
  margin: 60px 0 10px; /* 상하 여백 */
  text-align: left;
  margin-left: 25px;
  font-weight: bold;
`;
