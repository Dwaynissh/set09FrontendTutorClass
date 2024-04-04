import styled from "styled-components";
import piggyvest from "../../assets/logo.svg";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleHeaderChange = () => {
    const scroll = window.pageYOffset;

    if (scroll >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", handleHeaderChange);

  return (
    <div>
      <HeaderHolder header={header}>
        <HeaderWrapp>
          <LogoNavsHolder>
            <LogoHold>
              <Logo src={piggyvest} alt="logo" />
            </LogoHold>
            <NavsHolder>
              <Navs>Save</Navs>
              <Navs>Invest</Navs>
              <Navs>Stories</Navs>
              <Navs>FAQs</Navs>
              <Navs>Resources</Navs>
            </NavsHolder>
          </LogoNavsHolder>

          <AllButtonHolder>
            <Sigin>SignIn</Sigin>
            <CreateAccount>Create Free Account</CreateAccount>
          </AllButtonHolder>
          <HamburgerHolder>
            {toggle ? (
              <AiOutlineClose onClick={handleToggle} />
            ) : (
              <AiOutlineMenu onClick={handleToggle} />
            )}
          </HamburgerHolder>
        </HeaderWrapp>
      </HeaderHolder>
      {/* Dropdown Card for Mobile Phone */}
      {toggle ? (
        <div>
          <Phonedrop>Hello</Phonedrop>
        </div>
      ) : null}
    </div>
  );
};

export default Header;

const Phonedrop = styled.div`
  top: 80px;
  height: calc(100vh - 80px);
  width: 100%;
  background-color: red;
  color: white;
  position: absolute;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;
const HamburgerHolder = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

const CreateAccount = styled.button`
  padding: 17px 15px;
  border: 1px solid black;
  border-radius: 12px;
  background-color: #112130;
  font-weight: 600;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Sigin = styled.button`
  padding: 17px 15px;
  border: 1px solid black;
  border-radius: 12px;
  background-color: #f2f7f8;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const AllButtonHolder = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const Logo = styled.img``;
const Navs = styled.nav`
  color: #3d4f60;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const NavsHolder = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const LogoHold = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoNavsHolder = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;
const HeaderWrapp = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderHolder = styled.div<{ header: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ header }) => (header ? "white" : "#f2f7f8")};
  position: fixed;
  top: 0;
  box-shadow: ${({ header }) =>
    header ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : ""};
  transition: background-color 0.3s ease-in;
  transition: all 350ms;
`;
