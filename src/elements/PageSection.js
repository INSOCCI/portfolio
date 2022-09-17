import React from "react";
import { useState, useEffect, useRef } from "react";
import AboutProjectPage from "../pages/AboutProjectPage";
import MainPage from "../pages/MainPage";
import ResumePage from "../pages/ResumePage";
import NavBar from "./NavBar";
import { Divider, Wrap } from "../components/style/layouts/ScrollSection";

const PageSection = () => {
  const dividerHeight = 5;
  const wrapRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = wrapRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          wrapRef.current.scrollTo({
            top: pageHeight + dividerHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          wrapRef.current.scrollTo({
            top: pageHeight * 2 + dividerHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          wrapRef.current.scrollTo({
            top: pageHeight * 2 + dividerHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          wrapRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          wrapRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          wrapRef.current.scrollTo({
            top: pageHeight + dividerHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };

    const wrapRefCurrent = wrapRef.current;
    wrapRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      wrapRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <Wrap ref={wrapRef}>
      <NavBar scrollIndex={scrollIndex} />
      <MainPage />
      <Divider />
      <ResumePage />
      <Divider />
      <AboutProjectPage />
    </Wrap>
  );
};

export default PageSection;
