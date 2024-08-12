import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CATEGORY_INFOS } from "../../constants/constants";
import { useNav } from "../../context/useNav";

const NavItem = ({ category, activeCategory, onClick, currentPath }) => {
  const isActive = activeCategory === category.id;
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(isActive);

  useEffect(() => {
    setIsSubMenuOpen(isActive);
  }, [isActive]);

  const handleClick = (e) => {
    if (category.twoDepthRoute && category.twoDepthRoute.length > 0) {
      e.preventDefault();
      setIsSubMenuOpen(!isSubMenuOpen);
    }
    onClick(category.id);
  };

  return (
    <li>
      <NavLink
        to={category.menu.path}
        className={`${isActive ? "active" : ""} ${
          category.id === "member" ? "member" : ""
        }`}
        onClick={handleClick}
      >
        {category.menu.name}
        {category.twoDepthRoute && category.twoDepthRoute.length > 0 && (
          <>
            <ArrowWrap $isOpen={isSubMenuOpen}>
              <ChevronRight />
            </ArrowWrap>
            <TailImg $isOpen={isSubMenuOpen} src="/img/tail.png" alt="tail" />
          </>
        )}
      </NavLink>

      {category.twoDepthRoute && category.twoDepthRoute.length > 0 && (
        <SubMenu $isOpen={isSubMenuOpen}>
          {category.twoDepthRoute.map((route) => (
            <li key={route.path}>
              <SubNavLink
                to={route.path}
                className={currentPath === route.path ? "active" : ""}
              >
                {route.name}
              </SubNavLink>
            </li>
          ))}
        </SubMenu>
      )}
    </li>
  );
};

function Nav() {
  const { isNavVisible } = useNav();
  const [activeCategory, setActiveCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const currentCategory = CATEGORY_INFOS.find(
      (category) =>
        category.menu.path === location.pathname ||
        (category.twoDepthRoute &&
          category.twoDepthRoute.some(
            (route) => route.path === location.pathname
          ))
    );
    if (currentCategory) {
      setActiveCategory(currentCategory.id);
    }
  }, [location.pathname]);

  const toggleCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  if (!isNavVisible) return null;

  return (
    <NavWrap>
      <MainMenu>
        {CATEGORY_INFOS.map((category) => (
          <NavItem
            key={category.id}
            category={category}
            activeCategory={activeCategory}
            onClick={toggleCategory}
            currentPath={location.pathname}
          />
        ))}
      </MainMenu>
    </NavWrap>
  );
}

const NavWrap = styled.nav`
  width: 300px;
  min-height: calc(100vh - 60px);
  background: #1f3e74;
  box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, 0.4);
`;

const MainMenu = styled.ul`
  width: 100%;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.7rem;
  padding: 10px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  background: ${(props) =>
    props.className.includes("active") ? "#295095" : "transparent"};
`;

const SubNavLink = styled(Link)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  font-size: 1.7rem;
  background: #fff;
  font-weight: 500;
  text-decoration: none;
  &.active {
    background: #f0f0f0;
    font-weight: bold;
  }
`;

const ArrowWrap = styled.span`
  margin-left: 5px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(90deg)" : "rotate(0)")};
`;

const TailImg = styled.img`
  position: absolute;
  bottom: -15px;
  left: 10px;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

const SubMenu = styled.ul`
  width: 100%;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  height: ${(props) => (props.$isOpen ? "240px" : "0")};
`;

export default Nav;
