import { styled } from "styled-components";
import Rectangle from "../assets/rectangle4.png";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f9f9f9;
`;
export const Backdrop = styled.div`
  position: absolute;
  width: 393px;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const Header = styled.div`
  position: relative;
  margin: 0;
  margin-top: -10px;
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
  top: 4px;
  transform: translateX(-450%);
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  cursor: pointer;
  img {
    width: 32px;
    height: 28px;
    display: block;
    margin: 0;
  }
`;

export const Set = styled.div`
  position: absolute;
  transform: translateX(300%) translateY(-10%);
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  display: block;
  cursor: pointer;
  img {
    width: 45px;
    height: 45px;
    display: block;
    margin: 0;
  }
`;

export const SetChange = styled.div`
  cursor: pointer;
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

  margin-top: 10px;
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
    margin-top: 18px;
    width: 16px;
  }
`;

export const GroupChange = styled.div`
  cursor: pointer;
`;

export const Intimacy = styled.div`
  margin-top: 15px;
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
  margin-top: 20px;
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
  margin-bottom: 10px;
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
  margin-top: 10px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 45px;
`;

export const IdTitle = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const IdInformation = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const GroupInformation = styled.div`
  margin-top: 45px;
  font-family: "MaplestoryOTFBold";
`;

export const GroupInformation2 = styled.div`
  display: flex;
  gap: 8px;
`;

export const GroupInformation3 = styled.div`
  font-size: 22px;
  text-align: left;
`;

export const GroupInformationChange = styled.div`
  margin-top: 10px;
  img#Pencil {
    width: 18px !important;
    height: auto !important;
    margin-bottom: 5px;
    margin-top: -5px;
  }
  cursor: pointer;
`;

export const GenderInformation = styled.div`
  margin-top: 25px;
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
  margin-top: 25px;
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
  margin-top: 25px;
  font-family: "MaplestoryOTFBold";

  font-size: 20px;
  display: flex;
  text-align: left;
  gap: 10px;
`;

export const GroupMember = styled.div`
  font-family: "MaplestoryOTFBold";
  margin-right: 30px;
`;

export const GroupMemberName = styled.div`
  font-family: "MaplestoryOTFBold";
  margin-right: 30px;
`;

export const GroupMemberId = styled.div`
  font-family: "MaplestoryOTFBold";
`;

export const Footer = styled.div`
  margin-top: 35px;
  margin-bottom: 25px;
  font-family: "MaplestoryOTFBold";
  font-size: 20px;
`;

export const ButtonInvite = styled.div`
  background-color: #606060;
  color: white;
  border: none;
  margin-bottom: 8px;
  padding: 10px 60px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const ButtonLogout = styled.div`
  color: #666666;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: #464545;
  }
`;

export const SetPopup = styled.div`
  position: fixed;
  top: 290px;
  transform: translate(0%, -68%);
  background-color: white;
  box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 30px;
  z-index: 1000;
  text-align: center;
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const SetPopupHelp = styled.div`
  font-family: "omyu_pretty";
  font-size: 20px;
  color: #606060;
  border: none;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 250px;
  gap: 90px;
  cursor: pointer;
`;

export const SetPopupIntroduction = styled.div`
  font-family: "omyu_pretty";
  font-size: 20px;
  color: #606060;
  border: none;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 250px;
  gap: 40px;
  cursor: pointer;
`;

// export const SetPopupLine = styled.div`
//   width: 10px;
//   margin-top: -20px;
//   margin-bottom: -20px;
//   margin-right: 100px;
// `;

export const SetPopupOut = styled.div`
  font-family: "omyu_pretty";
  font-size: 20px;
  color: #606060;
  border: none;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 250px;
  gap: 55px;
  cursor: pointer;
`;

export const SetPopupDelete = styled.div`
  font-family: "omyu_pretty";
  font-size: 20px;
  color: #606060;
  border: none;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 250px;
  gap: 65px;
  margin-left: 5px;
  cursor: pointer;
`;

export const SetPopup2 = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SetCloseButton = styled.div`
  font-family: "omyu_pretty";
  background-color: #606060;
  color: white;
  border: none;
  padding: 5px 20px;
  border-radius: 18px;
  width: 150px;
  height: 30px;
  font-size: 21px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const OutPopup = styled.div`
  position: fixed;
  top: 470px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  z-index: 1000;
  text-align: center;
  width: 330px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const OutPopupTitle = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 23px;
  color: #606060;
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
  margin-top: 18px;
`;

export const OutPopupMiddle = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 17px;
  color: #606060;
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const OutPopupSmall1 = styled.div`
  font-family: "MaplestoryOTFBold";
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const OutPopupSmall2 = styled.div`
  font-family: "MaplestoryOTFBold";
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const OutPopup2 = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const OutCloseButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 135px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const OutDeleteButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #dc143c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 135px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #be1235;
  }
`;

export const DeletePopup = styled.div`
  position: fixed;
  top: 470px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  z-index: 1000;
  text-align: center;
  width: 330px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
`;

export const DeletePopupTitle = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 21px;
  color: #606060;
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  /* margin-bottom: 11px;
  margin-top: 18px; */
`;

export const DeletePopupMiddle = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 15px;
  color: #606060;
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const DeletePopupSmall1 = styled.div`
  font-family: "MaplestoryOTFBold";
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const DeletePopupSmall2 = styled.div`
  font-family: "MaplestoryOTFBold";
  border: none;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-bottom: 11px;
`;

export const NamePopupContent = styled.div``;

export const ErrorMessage = styled.div``;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #606060;
  border-radius: 15px;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #606060;
  }
`;

export const DeletePopup2 = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const DeleteCloseButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #606060;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 135px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #525151;
  }
`;

export const DeleteDeleteButton = styled.div`
  font-family: "MaplestoryOTFBold";
  background-color: #dc143c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 18px;
  width: 135px;
  font-size: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #be1235;
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

export const GalaxyPopup = styled.div`
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

export const GalaxyPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  h3 {
    text-align: center;
    font-size: 1.5em;
    color: #333;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1em;
      color: #555;
      margin-right: 20px;
    }

    select {
      width: 65%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
      font-size: 0.9em;
      margin-bottom: 10px;
    }
  }
`;

export const GalaxyPopupActions = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

export const GalaxyPopupActionClosebutton = styled.div`
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

export const GalaxyPopupActionChangebutton = styled.div`
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
  /* font-family: "MaplestoryOTFBold";
  font-size: 20px;
  color: black;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 200px;
  margin-bottom: 11px; */
  margin-bottom: 10px;
  width: 198px;
  height: 38px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid var(--gray, #606060);
  background: #f3f3f3;
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
  letter-spacing: -0.6px;
`;

export const PopupContent = styled.div`
  /* font-family: 'MaplestoryOTFBold';
  font-size: 15px;
  color: black; */
  margin-bottom: 5px;
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Noto Sans KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.39px;
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
