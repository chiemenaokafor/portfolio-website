import React, { useState } from "react";
import logo from "./photos/Logo.png";
import {
  MdWork,
  MdAddTask,
  MdContactPhone,
  MdAccountCircle,
  MdHome,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.css";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  &.active {
    border-right: 4px solid var(--color-grey-dark);
  }
`;

const Button = styled.button`
  background-color: var(--color-blue);
  width: 5rem;
  height: 5rem;
  border: none;
  font-size: 0px;
  border-radius: 50%;
  margin: 4rem 0 0 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    background-color: var(--color-white);
    height: 2px;
    width: 2.5rem;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5  " : "1.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    bottom: ${(props) => (props.clicked ? "1.2" : "1.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--color-blue);
  width: 10rem;
  height: 80vh;
  margin-top: 5rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SlickBar = styled.ul`
  z-index: 5;

  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-blue);
  padding: 3rem 0;

  top: 30vh;
  left: 0;
  position: absolute;

  width: ${(props) => (props.clicked ? "30rem" : "10rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;
const Items = styled(Link)`
  width: 100%;
  padding: 2.2rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 2rem;
  color: var(--color-white);

  &:hover {
    border-right: 1rem solid var(--color-grey-dark);
    color: var(--color-grey-dark);
  }

  & i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
  }
  
`;

const Text = styled.span`
  font-size: 3rem;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "5rem" : "0")};
  transition: all 0.3s ease;
`;
const Sidebar = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Button
        clicked={click}
        onClick={() => handleClick()}
        className="sidebar-button"
      >
        Click
      </Button>
      <SidebarContainer>
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
        </div>
        <SlickBar clicked={click}>
          <Items
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
            <i>
              <MdHome />
            </i>
            <Text clicked={click}>Home</Text>
          </Items>
          <Items
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/about"
          >
            <i>
              <MdAccountCircle />
            </i>
            <Text clicked={click}>About</Text>
          </Items>
          <Items
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/skills"
          >
            <i>
              <MdAddTask />
            </i>
            <Text clicked={click}>Skills</Text>
          </Items>
          <Items
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/portfolio"
          >
            <i>
              <MdWork />
            </i>
            <Text clicked={click}>Work</Text>
          </Items>
          <Items
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/contact"
          >
            <i>
              <MdContactPhone />
            </i>
            <Text clicked={click}>Contact</Text>
          </Items>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
