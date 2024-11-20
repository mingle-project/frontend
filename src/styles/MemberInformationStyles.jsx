import { styled } from "styled-components";
import Rectangle from "../assets/rectangle4.png";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  /* height: 100vh; */
  /* min-height: 100vh; */
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: skyblue;
`;

export const Header = styled.div`
  position: relative;
  margin: 0;
  margin-top: 20px;
  width: 393px;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const Arrow = styled.div`
  position: absolute;
  transform: translateX(-450%);
  margin: 0 auto;
  margin-top: 7%;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  img {
    width: 32px;
    height: auto;
    margin-top: 8%;
  }
`;

export const Set = styled.div`
  position: absolute;
  transform: translateX(300%) translateY(40%);
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  display: block;
  img {
    width: 45px;
    height: 45px;
    display: block;
    margin: 0;
  }
`;

export const Body = styled.div``;

export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-left: 28px;
`;

export const Logo = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 75px;
  padding: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  img {
    width: 125px;
  }
`;

export const GroupName = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  font-family: "MaplestoryOTFBold";
  font-size: 26px;
`;

export const Pencil = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  img {
    margin-left: -70%;
    margin-top: 13px;
    width: 16px;
  }
`;

export const GroupChange = styled.div`
  cursor: pointer;
`;

export const Intimacy = styled.div`
  margin-top: 10px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
`;

export const User = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 15px;
  width: 300px;
  height: 120px;
  border-radius: 10px;
  background-image: url(${Rectangle});
  background-size: cover;
  background-position: center;

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const Name = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 28px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const NickName = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  margin-right: 40px;
`;

export const MemberName = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
`;

export const Change = styled.div`
  margin-top: 2px;
  font-family: "MaplestoryOTFBold";
  image {
    width: 6px;
  }
  cursor: pointer;
`;

export const Id = styled.div`
  margin-top: 20px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  margin-left: 30px;
`;

export const IdTitle = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const IdInformation = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const GroupInformation = styled.div`
  margin-top: 40px;
  font-family: "MaplestoryOTFBold";
`;

export const GroupInformation2 = styled.div`
  font-size: 22px;
  text-align: left;
`;
export const GenderInformation = styled.div`
  margin-top: 40px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  display: flex;
  text-align: left;
`;

export const Sex = styled.div`
  font-family: "MaplestoryOTFBold";
  margin-right: 30px;
`;

export const SexInformation = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const Age = styled.div`
  margin-top: 20px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  display: flex;
  text-align: left;
`;

export const AgeTitle = styled.div`
  font-family: "MaplestoryOTFBold";
  margin-right: 30px;
`;

export const AgeInformation = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const Group = styled.div`
  margin-top: 20px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  display: flex;
  text-align: left;
`;

export const GroupMember = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const GroupMemberName = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const GroupMemberId = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const Footer = styled.div`
  margin-top: 80px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
`;

export const ButtonInvite = styled.div`
  background-color: #606060;
  color: white;
  border: none;
  margin-bottom: 10px;
  padding: 10px 60px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const ButtonLogout = styled.div`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const GroupPopup = styled.div`
  position: fixed;
  top: 410px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  z-index: 1000;
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const GroupPopupName = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  color: black;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const GroupPopup2 = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const GroupCloseButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 150px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const GroupchangeButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 150px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const NamePopup = styled.div`
  position: fixed;
  top: 410px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  z-index: 1000;
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const NamePopupName = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  color: black;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const NamePopup2 = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const NameCloseButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 150px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const NamechangeButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 150px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 560px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  z-index: 1000;
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const GroupCode = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  color: black;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 200px;
  margin-bottom: 11px;
`;

export const PopupContent = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 15px;
  color: black;
`;

export const CopyButton = styled.button`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 200px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const CloseButton = styled.button`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 120px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;
