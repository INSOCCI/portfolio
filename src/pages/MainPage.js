import React from "react";
import styled from "styled-components";
import { Inner } from "../components/style/layouts/ScrollSection";

const MainPage = () => {
  return (
    <Wrap>
      <Main>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjhfMTg1/MDAxNTgwMjEyMTQxNTU2.yGCUkR41pN3uXwEI3yh0B4whKSotCPYzsGonjkLBA14g.HcMFWkiZrB21NN41ADecUJq2ONNXU7hvRO1OI8Np0Vwg.JPEG.dmsrud7202/%EB%A7%A5%EB%B6%81%EC%95%84%EC%9D%B4%EB%A7%A5%EB%B0%94%ED%83%95%ED%99%94%EB%A9%B4.jpg?type=w800" />
      </Main>
      <Text>
        <h1> So Hhyun , And ...</h1>
        <p> 안녕하세요, 프론트엔드 개발자를 꿈꾸는 인소현입니다.</p>
      </Text>
    </Wrap>
  );
};

const Wrap = styled(Inner)`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  width: fit-content;
  border: #d6bb4e solid 1rem;
  margin-top: 4rem;
  img {
    width: 1320px;
    height: 600px;
  }
`;
const Text = styled.div`
  width: 50rem;
  text-align: center;
  color: #fff;
  h1 {
    font-size: 3rem;
    margin: 2.5rem 0;
  }
`;

export default MainPage;
