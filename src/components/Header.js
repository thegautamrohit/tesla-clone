import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [show, setShow] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="!#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="!#" key={index}>
              {car}
            </a>
          ))}

        <a href="!#">Solar Roof</a>
        <a href="!#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="!#">Shop</a>
        <a href="!#">Tesla Account</a>
        <CustomMenu onClick={() => setShow(true)} />
      </RightMenu>

      <BurgerNav show={show}>
        <CloseWrapper>
          <CustomClose onClick={() => setShow(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="!#"> {car} </a>
            </li>
          ))}

        <li>
          <a href="!#">Existing Inventory</a>
        </li>
        <li>
          <a href="!#">Used Inventory</a>
        </li>
        <li>
          <a href="!#">Trade-in</a>
        </li>
        <li>
          <a href="!#">CyberTruck</a>
        </li>
        <li>
          <a href="!#">Roadster</a>
        </li>
        <li>
          <a href="!#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  list-style: none;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
