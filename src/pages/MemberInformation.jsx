import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import * as M from "../styles/MemberInformationStyles";
import Arrow from "../assets/arrow.png";
import Set from "../assets/set.png";
import MingleLogo from "../assets/minglelogowhite1.png";
import Pencil from "../assets/pencil.png";
import Help from "../assets/help.png";
import Computer from "../assets/computer.png";
import Logout from "../assets/logout.png";
import Delete from "../assets/delete.png";
import Line from "../assets/line.png";

const MemberInformation = () => {
  const [isInvitePopupOpen, setIsInvitePopupOpen] = useState(false);
  const [isGroupPopupOpen, setIsGroupPopupOpen] = useState(false);
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  const [isSetPopupOpen, setIsSetPopupOpen] = useState(false);
  const [isOutPopupOpen, setIsOutPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const handleInviteClick = () => {
    setIsInvitePopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsInvitePopupOpen(false);
  };

  const handleGroupClick = () => {
    setIsGroupPopupOpen(true);
  };

  const handleGroupClosePopup = () => {
    setIsGroupPopupOpen(false);
  };

  const handleNameClick = () => {
    setIsNamePopupOpen(true);
  };

  const handleNameClosePopup = () => {
    setIsNamePopupOpen(false);
  };

  const handleSetClick = () => {
    setIsSetPopupOpen(true);
  };

  const handleSetClosePopup = () => {
    setIsSetPopupOpen(false);
  };

  const handleOutClick = () => {
    setIsOutPopupOpen(true);
  };

  const handleOutClosePopup = () => {
    setIsOutPopupOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true);
  };

  const handleDeleteClosePopup = () => {
    setIsDeletePopupOpen(false);
  };

  const handleCopyCode = () => {
    const groupCode = "GD88YB";
    navigator.clipboard
      .writeText(groupCode)
      .then(() => {
        alert("그룹코드가 복사되었습니다!");
      })
      .catch(() => {
        alert("코드 복사에 실패했습니다. 다시 시도해주세요.");
      });
  };

  const navigate = useNavigate();

  const handleIntroductionClick = () => {
    navigate("/introduction");
  };

  const handleMainClick = () => {
    navigate(`/main`);
  };

  const [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState({ user: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.user.token);
  const galaxyId = useSelector((state) => state.user.galaxy_id);
  console.log("Current token:", token);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/galaxy/me/profile`, {
          headers: { Authorization: token },
        });
        setProfileData(response.data || { user: [], user: [] });
        setIsLoading(false);
      } catch (err) {

        console.error('Full error response:', err.response);

        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/me/profile`, {
          headers: { Authorization: token },
        });
        console.log(response.data); // API 응답 구조 확인
        setUserData(response.data); // users 속성이 포함되어 있는지 확인
      } catch (err) {
        console.error('Full error response:', err.response);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profileData) {
    return <div>No profile data available</div>;
  }

  return (
    <M.Container>
      <M.Header>
        <M.Arrow onClick={handleMainClick}>
          <img id="Arrow" src={Arrow} />
        </M.Arrow>
        <M.Set>
          <M.SetChange onClick={handleSetClick}>
            <img id="Set" src={Set} />
          </M.SetChange>
        </M.Set>
      </M.Header>
      <M.Body>
        <M.Logo>
          <img id="MingleLogo" src={MingleLogo} />
        </M.Logo>
        <M.GroupTitle>
          <M.GroupName>
            <p>{profileData.name}</p>
          </M.GroupName>
          <M.Pencil>
            <M.GroupChange onClick={handleGroupClick}>
              <img id="Pencil" src={Pencil} />
            </M.GroupChange>
          </M.Pencil>
        </M.GroupTitle>
        <M.Intimacy>
          <p>{profileData.relationship}</p>
        </M.Intimacy>
        <M.User>
          <M.Name>
            <M.NickName>
              <p>닉네임</p>
            </M.NickName>
            <M.MemberName>
              {/* <p>수연</p> */}
              {userData && userData.nickname
                ? userData.nickname
                : 'No members available'}
            </M.MemberName>
            <M.Change onClick={handleNameClick}>
              <img id="Pencil" src={Pencil} />
            </M.Change>
          </M.Name>
          <M.Id>
            <M.IdTitle>
              <p>아이디</p>
            </M.IdTitle>
            <M.IdInformation>
              {/* <p>limsoo</p> */}
              {userData && userData.username
                ? userData.username
                : 'No members available'}
            </M.IdInformation>
          </M.Id>
        </M.User>
        <M.GroupInformation>
          <M.GroupInformation2>그룹 정보</M.GroupInformation2>
          <M.GenderInformation>
            <M.Sex>성별</M.Sex>
            <M.SexInformation>{profileData.gender}</M.SexInformation>
          </M.GenderInformation>
          <M.Age>
            <M.AgeTitle>나이</M.AgeTitle>
            <M.AgeInformation>{profileData.age}</M.AgeInformation>
          </M.Age>
          <M.Group>
            <M.GroupMember>멤버</M.GroupMember>
            <M.GroupMemberName>
              {profileData.users && profileData.users.length > 0
                ? profileData.users.map((user) => user.nickname).join(', ')
                : 'No members available'}

            </M.GroupMemberName>
            <M.GroupMemberId>
              {profileData.users && profileData.users.length > 0
                ? profileData.users.map((user) => user.username).join(', ')
                : 'No members available'}
            </M.GroupMemberId>
          </M.Group>
        </M.GroupInformation>
      </M.Body>
      <M.Footer>
        <M.ButtonInvite onClick={handleInviteClick}>초대하기</M.ButtonInvite>
        <M.ButtonLogout onClick={() => console.log("로그아웃 버튼 클릭")}>
          로그아웃
        </M.ButtonLogout>

        {isSetPopupOpen && (
          <M.SetPopup>
            <M.SetPopupHelp>
              <p>도움말</p>
              <img id="Help" src={Help} />
            </M.SetPopupHelp>
            <M.SetPopupIntroduction onClick={handleIntroductionClick}>
              <p>프로젝트 소개</p>
              <img id="Computer" src={Computer} />
            </M.SetPopupIntroduction>
            {/* <M.SetPopupLine>
              <img id="Line" src={Line} />
            </M.SetPopupLine> */}
            {/* <M.SetPopupOut onClick={handleOutClick}> */}
            <M.SetPopupOut
              onClick={() => {
                handleSetClosePopup();
                handleOutClick();
              }}
            >
              <p>그룹 나가기</p>
              <img id="Logout" src={Logout} />
            </M.SetPopupOut>
            <M.SetPopupDelete
              onClick={() => {
                handleSetClosePopup();
                handleDeleteClick();
              }}
            >
              <p>그룹 삭제</p>
              <img id="Delete" src={Delete} />
            </M.SetPopupDelete>
            <M.SetPopup2>
              <M.SetCloseButton onClick={handleSetClosePopup}>
                취소
              </M.SetCloseButton>
            </M.SetPopup2>
          </M.SetPopup>
        )}

        {isOutPopupOpen && (
          <M.OutPopup>
            <M.OutPopupTitle>
              <p>그룹을 떠나시나요?</p>
            </M.OutPopupTitle>
            <M.OutPopupMiddle>
              <M.OutPopupSmall1>
                <p>그룹을 나가면 더 이상</p>
                <p>그룹 활동에 참여할 수 없으며,</p>
              </M.OutPopupSmall1>
              <M.OutPopupSmall2>
                <p>그룹 내에서 공유된 데이터에</p>
                <p>접근할 수 없습니다.</p>
              </M.OutPopupSmall2>
            </M.OutPopupMiddle>
            <M.OutPopup2>
              <M.OutCloseButton onClick={handleOutClosePopup}>
                취소
              </M.OutCloseButton>
              <M.OutDeleteButton>나가기</M.OutDeleteButton>
            </M.OutPopup2>
          </M.OutPopup>
        )}

        {isDeletePopupOpen && (
          <M.DeletePopup>
            <M.DeletePopupTitle>
              <p>그룹을 삭제하시겠어요?</p>
            </M.DeletePopupTitle>
            <M.DeletePopupMiddle>
              <M.DeletePopupSmall1>
                <p>그룹 삭제 시 그룹과 관련된</p>
                <p>모든 데이터와 기록이 영구 삭제됩니다.</p>
              </M.DeletePopupSmall1>
              <M.DeletePopupSmall2>
                <p>삭제를 확인하려면</p>
                <p>아래에 그룹 이름을 입력해 주세요</p>
              </M.DeletePopupSmall2>
              <M.TextInput type="text" placeholder="그룹 이름 입력" />
            </M.DeletePopupMiddle>
            <M.DeletePopup2>
              <M.DeleteCloseButton onClick={handleDeleteClosePopup}>
                취소
              </M.DeleteCloseButton>
              <M.DeleteDeleteButton>삭제</M.DeleteDeleteButton>
            </M.DeletePopup2>
          </M.DeletePopup>
        )}

        {isGroupPopupOpen && (
          <M.GroupPopup>
            <M.GroupPopupName>
              <p>{profileData.name}</p>
            </M.GroupPopupName>
            <M.GroupPopup2>
              <M.GroupCloseButton onClick={handleGroupClosePopup}>
                취소
              </M.GroupCloseButton>
              <M.GroupchangeButton>수정</M.GroupchangeButton>
            </M.GroupPopup2>
          </M.GroupPopup>
        )}

        {isNamePopupOpen && (
          <M.NamePopup>
            <M.NamePopupName>
              <p>
                {userData && userData.nickname
                  ? userData.nickname
                  : 'No members available'}
              </p>
            </M.NamePopupName>
            <M.NamePopup2>
              <M.NameCloseButton onClick={handleNameClosePopup}>
                취소
              </M.NameCloseButton>
              <M.NamechangeButton>수정</M.NamechangeButton>
            </M.NamePopup2>
          </M.NamePopup>
        )}

        {isInvitePopupOpen && (
          <M.Popup>
            <M.GroupCode>
              <p>GD88YB</p>
            </M.GroupCode>
            <M.PopupContent>
              <p>그룹코드를 복사해서 친구들을 초대하세요!</p>
            </M.PopupContent>
            <M.CopyButton onClick={handleCopyCode}>코드 복사하기</M.CopyButton>
            <M.CloseButton onClick={handleClosePopup}>완료</M.CloseButton>
          </M.Popup>
        )}
      </M.Footer>
    </M.Container>
  );
};

export default MemberInformation;
