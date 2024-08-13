import React, { useState, useEffect, useCallback } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import * as S from "./Burger.styles";
import * as IoIcons from "react-icons/io";

export function Burger() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarLarge, setIsSidebarLarge] = useState(true);
  const [userChoice, setUserChoice] = useState({
    isSidebarLarge: null,
    isSidebarOpen: null,
  });

  // Update of sidebar states

  const updateWindowWidth = useCallback(() => {
    const firstBreakPoint = 992;
    const secondBreakPoint = 576;
    if (window.innerWidth < firstBreakPoint && isSidebarLarge)
      setIsSidebarLarge(false);
    else if (window.innerWidth > firstBreakPoint && userChoice.isSidebarLarge)
      setIsSidebarLarge(true);
    else if (window.innerWidth < secondBreakPoint) setIsSidebarOpen(false);
    else if (window.innerWidth > secondBreakPoint && userChoice.isSidebarOpen)
      setIsSidebarOpen(true);
  }, [isSidebarLarge, userChoice.isSidebarLarge, userChoice.isSidebarOpen]);

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [updateWindowWidth]);

  const handleBurgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setUserChoice({ ...userChoice, isSidebarOpen: !isSidebarOpen });
  };

  const handleTogglerClick = () => {
    setIsSidebarLarge(!isSidebarLarge);
    setUserChoice({ ...userChoice, isSidebarLarge: !isSidebarLarge });
  };

  return (
    <>
      <S.StyledBurger onClick={() => handleBurgerClick()}>
        <S.Bar isSidebarOpen={isSidebarOpen}></S.Bar>
        <S.Bar isSidebarOpen={isSidebarOpen}></S.Bar>
        <S.Bar isSidebarOpen={isSidebarOpen}></S.Bar>
      </S.StyledBurger>
      <S.TogglerContainer onClick={() => handleTogglerClick()}>
        <S.TogglerIcon
          isSidebarLarge={isSidebarLarge}
          isSidebarOpen={isSidebarOpen}
        >
          <IoIcons.IoIosArrowDropleft />
        </S.TogglerIcon>
      </S.TogglerContainer>
      <Sidebar isSidebarOpen={isSidebarOpen} isSidebarLarge={isSidebarLarge} />
    </>
  );
}
