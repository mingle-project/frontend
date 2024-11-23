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
import { useDispatch } from "react-redux";
import { logout } from "../userSlice";

const MemberInformation = () => {
  const [isInvitePopupOpen, setIsInvitePopupOpen] = useState(false);
  const [isGroupPopupOpen, setIsGroupPopupOpen] = useState(false);
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [nicknameError, setNicknameError] = useState(null);
  const [isSetPopupOpen, setIsSetPopupOpen] = useState(false);
  const [isOutPopupOpen, setIsOutPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isGalaxyPopupOpen, setIsGalaxyPopupOpen] = useState(false);
  const [groupNameInput, setGroupNameInput] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setNewNickname("");
    setNicknameError(null);
  };

  const handleGalaxyPopupClick = () => {
    setIsGalaxyPopupOpen(true);
  };

  const handleGalaxyPopupClose = () => {
    setIsGalaxyPopupOpen(false);
  };

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  const handleNicknameSubmit = async () => {
    if (!newNickname.trim()) {
      setNicknameError("닉네임을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.put(
        `/api/users/me/nickname`,
        { nickname: newNickname },
        { headers: { Authorization: token } }
      );
      alert("닉네임이 성공적으로 변경되었습니다!");
      setUserData((prev) => ({ ...prev, nickname: response.data.nickname }));
      handleNameClosePopup();
    } catch (err) {
      console.error("Nickname update error:", err.response);
      setNicknameError("닉네임 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleGroupNameSubmit = async () => {
    if (!newNickname.trim()) {
      setNicknameError("그룹명을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.put(
        `/api/galaxy/me/name`,
        { name: newNickname },
        { headers: { Authorization: token } }
      );
      alert("그룹명이 성공적으로 변경되었습니다!");
      setProfileData((prev) => ({ ...prev, name: response.data.name }));
      setIsEditing(false);
    } catch (err) {
      console.error("Group name update error:", err.response);
      setNicknameError("그룹명 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleGalaxyInfoSubmit = async () => {
    console.log("Galaxy ID:", galaxyId);
    console.log("Current token:", token);
    const galaxyOptions = {
      gender: profileData.gender || "",
      age: profileData.age || "",
      relationship: profileData.relationship || "",
    };

    try {
      const response = await axios.put(
        `/api/galaxy/me/options`,
        galaxyOptions,
        {
          headers: { Authorization: token },
        }
      );
      alert(response.data.message || "그룹 정보가 성공적으로 수정되었습니다!");
      setProfileData((prev) => ({
        ...prev,
        name: response.data.name || prev.name,
        ...galaxyOptions,
      }));
      handleGalaxyPopupClose();
    } catch (err) {
      console.error(
        "Galaxy info update error:",
        err.response?.data || err.message
      );
      if (err.response?.status == 403) {
        console.log(galaxyId);
        alert("권한이 없습니다. 다시 확인해주세요.");
      } else {
        alert("그룹 정보 수정에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleGalaxyFieldChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGroupLeave = async () => {
    try {
      const groupId = galaxyId;
      const userId = userData.user_id;
      console.log("Group ID:", groupId);
      console.log("User ID:", userId);

      const response = await axios.delete(
        //`/api/groups/${groupId}/members/${userId}`,
        `/api/users/me/galaxy`,
        {
          headers: { Authorization: token },
        }
      );

      alert(response.data.message || "그룹에서 탈퇴했습니다.");

      navigate("/login");
    } catch (err) {
      console.error(
        "Group leave error details:",
        err.response?.data || err.message
      );

      if (err.response?.status === 403) {
        alert("그룹 탈퇴 권한이 없습니다. 다시 확인해주세요.");
      } else {
        alert("그룹 탈퇴에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleGroupDelete = async () => {
    if (groupNameInput !== profileData.name) {
      alert("입력한 그룹 이름이 정확하지 않습니다.");
      return;
    }

    try {
      const groupId = galaxyId;
      console.log("Group ID to delete:", groupId);

      const response = await axios.delete(`/api/galaxy/me`, {
        headers: { Authorization: token },
      });

      alert(response.data.message || "그룹이 성공적으로 삭제되었습니다.");

      navigate("/main");
    } catch (err) {
      console.error(
        "Group delete error details:",
        err.response?.data || err.message
      );

      if (err.response?.status === 403) {
        alert("그룹 삭제 권한이 없습니다. 다시 확인해주세요.");
      } else {
        alert("그룹 삭제에 실패했습니다. 다시 시도해주세요.");
      }
    }
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

  //const navigate = useNavigate();

  const handleIntroductionClick = () => {
    navigate("/introductiontransition");
  };

  const handleMainClick = () => {
    navigate(`/main`);
  };

  const [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState({ user: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
        console.error("Full error response:", err.response);
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

        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        console.error("Full error response:", err.response);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  useEffect(() => {
    const fetchGroupCode = async () => {
      try {
        const response = await axios.get(`/api/galaxy/me/code`, {
          headers: {
            Authorization: token,
          },
        });
        setGroupCode(response.data); // API에서 받은 코드 설정
      } catch (error) {
        console.error("Failed to fetch group code", error);
      }
    };

    fetchGroupCode();
  }, [token]);

  // 그룹 코드 복사 기능
  const handleCopyCode = () => {
    navigator.clipboard
      .writeText(groupCode)
      .then(() => {
        alert("그룹코드가 복사되었습니다!");
      })
      .catch(() => {
        alert("코드 복사에 실패했습니다. 다시 시도해주세요.");
      });
  };

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.put(`/api/users/me/nickname`, {
          headers: { Authorization: token },
        });
        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        console.error("Full error response:", err.response);
        setError(err.message);
        setIsLoading(false);
      }
    };
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
                : "No members available"}
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
              {userData && userData.username
                ? userData.username
                : "No members available"}
            </M.IdInformation>
          </M.Id>
        </M.User>
        <M.GroupInformation>
          <M.GroupInformation2>
            <M.GroupInformation3>은하 정보</M.GroupInformation3>
            <M.GroupInformationChange onClick={handleGalaxyPopupClick}>
              <img id="Pencil" src={Pencil} />
            </M.GroupInformationChange>
          </M.GroupInformation2>
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
                ? profileData.users.map((user) => user.nickname).join(", ")
                : "No members available"}
            </M.GroupMemberName>
            <M.GroupMemberId>
              {profileData.users && profileData.users.length > 0
                ? profileData.users.map((user) => user.username).join(", ")
                : "No members available"}
            </M.GroupMemberId>
          </M.Group>
        </M.GroupInformation>
      </M.Body>
      <M.Footer>
        <M.ButtonInvite onClick={handleInviteClick}>초대하기</M.ButtonInvite>
        <M.ButtonLogout onClick={handleLogout}>로그아웃</M.ButtonLogout>

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
              <M.OutDeleteButton onClick={handleGroupLeave}>
                나가기
              </M.OutDeleteButton>
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
              <M.TextInput
                type="text"
                placeholder="그룹 이름 입력"
                value={groupNameInput}
                onChange={(e) => setGroupNameInput(e.target.value)}
              />
            </M.DeletePopupMiddle>
            <M.DeletePopup2>
              <M.DeleteCloseButton onClick={handleDeleteClosePopup}>
                취소
              </M.DeleteCloseButton>
              <M.DeleteDeleteButton onClick={handleGroupDelete}>
                삭제
              </M.DeleteDeleteButton>
            </M.DeletePopup2>
          </M.DeletePopup>
        )}

        {isGroupPopupOpen && (
          <M.GroupPopup>
            <M.GroupPopupName>
              {isEditing ? (
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    setNewNickname(e.target.textContent);
                    handleGroupNameSubmit();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setNewNickname(e.target.textContent);
                      handleGroupNameSubmit();
                    }
                  }}
                  autoFocus
                >
                  {profileData.name || "그룹명을 입력하세요"}
                </p>
              ) : (
                <p onClick={() => setIsEditing(true)}>
                  {profileData.name || "그룹명을 입력하세요"}
                </p>
              )}
            </M.GroupPopupName>
            <M.GroupPopup2>
              <M.GroupCloseButton onClick={handleGroupClosePopup}>
                취소
              </M.GroupCloseButton>
              <M.GroupchangeButton onClick={handleGroupNameSubmit}>
                수정
              </M.GroupchangeButton>
            </M.GroupPopup2>
          </M.GroupPopup>
        )}

        {isNamePopupOpen && (
          <M.NamePopup>
            <M.NamePopupName>
              {isEditing ? (
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    setNewNickname(e.target.textContent);
                    handleNicknameSubmit();
                    setIsEditing(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setNewNickname(e.target.textContent);
                      handleNicknameSubmit();
                      setIsEditing(false);
                    }
                  }}
                  autoFocus
                >
                  {userData && userData.nickname
                    ? userData.nickname
                    : "No members available"}
                </p>
              ) : (
                <p onClick={() => setIsEditing(true)}>
                  {userData && userData.nickname
                    ? userData.nickname
                    : "No members available"}
                </p>
              )}
            </M.NamePopupName>
            <M.NamePopup2>
              <M.NameCloseButton onClick={handleNameClosePopup}>
                취소
              </M.NameCloseButton>
              <M.NamechangeButton onClick={handleNicknameSubmit}>
                수정
              </M.NamechangeButton>
            </M.NamePopup2>
          </M.NamePopup>
        )}

        {isGalaxyPopupOpen && (
          <M.GalaxyPopup>
            <M.GalaxyPopupContent>
              <h3>그룹 정보 수정</h3>

              <div>
                <strong>성별: </strong>
                <select
                  value={profileData.gender || ""}
                  onChange={(e) =>
                    handleGalaxyFieldChange("gender", e.target.value)
                  }
                >
                  <option value="">선택</option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                  <option value="혼성">혼성</option>
                </select>
              </div>

              <div>
                <strong>연령대: </strong>
                <select
                  value={profileData.age || ""}
                  onChange={(e) =>
                    handleGalaxyFieldChange("age", e.target.value)
                  }
                >
                  <option value="">선택</option>
                  <option value="10대">10대</option>
                  <option value="20대">20대</option>
                  <option value="30대">30대</option>
                  <option value="40대 이상">40대 이상</option>
                </select>
              </div>

              <div>
                <strong>친밀도: </strong>
                <select
                  value={profileData.relationship || ""}
                  onChange={(e) =>
                    handleGalaxyFieldChange("relationship", e.target.value)
                  }
                >
                  <option value="">선택</option>
                  <option value="알아가는 사이">알아가는 사이</option>
                  <option value="편한 사이">편한 사이</option>
                  <option value="비밀 없는 사이">비밀 없는 사이</option>
                </select>
              </div>
            </M.GalaxyPopupContent>
            <M.GalaxyPopupActions>
              <M.GalaxyPopupActionClosebutton onClick={handleGalaxyPopupClose}>
                취소
              </M.GalaxyPopupActionClosebutton>
              <M.GalaxyPopupActionChangebutton onClick={handleGalaxyInfoSubmit}>
                수정
              </M.GalaxyPopupActionChangebutton>
            </M.GalaxyPopupActions>
          </M.GalaxyPopup>
        )}

        {isInvitePopupOpen && (
          <M.Popup>
            <M.GroupCode>
              <p>{groupCode}</p> {/* API에서 불러온 그룹 코드 표시 */}
            </M.GroupCode>
            <M.PopupContent>
              <p>그룹코드를 복사해서 친구들을 초대하세요!</p>
            </M.PopupContent>
            <M.CopyButton
              onClick={() => {
                handleCopyCode();
                handleClosePopup();
              }}
            >
              코드 복사하기
            </M.CopyButton>
            {/* <M.CloseButton onClick={handleClosePopup}>완료</M.CloseButton> */}
          </M.Popup>
        )}
      </M.Footer>
    </M.Container>
  );
};

export default MemberInformation;
