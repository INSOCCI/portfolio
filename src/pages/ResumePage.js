import React from "react";
import styled from "styled-components";
import { Inner } from "../components/style/layouts/ScrollSection";
import myPicture from "../images/insohyun.jpg";

const ResumePage = () => {
  return (
    <Wrap>
      <Section>
        <Table>
          <tr>
            <td
              rowSpan="4"
              style={{
                width: "13%",
                backgroundColor: "#273d8ed",
                textAlign: "center",
              }}
            >
              <MyImg>
                <img src={myPicture} />
              </MyImg>
              <h1 style={{ color: "#D6BB4E" }}>IN SO HYUN</h1>
              <p>
                반갑습니다! <br /> <br /> 저는 웹 프론트엔드 개발자를 꿈꾸고
                있으며,
                <br /> 사람들을 즐겁게 하는 창의적인 작업을 하는 <br />
                모든 것들을 즐깁니다. <br /> <br />
                늘 사용자의 관점을 고안하여 개발에 임하고
                <br />
                지금보다 더 나은 결과를 위해 상호 간, <br />
                커뮤니케이션을 무척 중요하게 생각합니다.
                <br /> <br />
                이런 저의 성장가능성을 믿고 <br />
                함께 나아갈 수있는 회사를 찾고 있습니다.
              </p>
            </td>
            <td>
              <h2>PROFILE</h2>
              <p>
                인 소 현 1997.02.15 (만 25세) <br />
                010-5322-7305 ✉️ 😈 🏧
                {/* 아이콘으로 바꿀 것 - 메일, 깃허브, 블로그...
                  메일 클릭 시 - 메일 주소 뜨면서 자동복사 되도록
                  깃허브,블로그 클릭시 - 자동 이동 되도록  */}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2>SKILLS</h2>
              <p>
                Javascript, React, Redux, Axios ,JQurey, HTML5, CSS3,
                Styled-Componenets <br />
                MongoDB, FireBase, AWS S3/EC2, Netlify
                <br />
                - Socket.io를 이용한 채팅 구현 경험 <br /> - Github Actions를
                통한 CI/CD 경험
                <br />
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2>EDUCATION</h2>
              <p>
                스파르타코딩클럽 항해99 ICT 동북 이노베이션 수료 (22.06~22.09)
                <br />
                대구 SBS 아카데미 컴퓨터학원 - 웹 퍼블리셔 과정 (21.08~22.04)
                <br />
                계명대학교 경제금융학 졸업 (16.03~20.02)
              </p>
            </td>
          </tr>
        </Table>
      </Section>
      <h3> PDF download</h3>
    </Wrap>
  );
};

const Wrap = styled(Inner)`
  background: #273d8e;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 4rem;
  border: 2rem solid #edebe0;
  box-sizing: border-box;
  h3 {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 1.5rem;
    color: #d6bb4e;
    margin: 0% 1%;
  }
`;
const Section = styled.div`
  width: 65%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Table = styled.table`
  width: 100%;
  height: 70%;
  background-color: #edebe0;
  border-collapse: collapse;
  td {
    border: 0.3rem solid #273d8e;
    width: 20%;
    padding: 3.5% 4%;
  }
  h1 {
    font-size: 3rem;
    color: #273d8e;
    margin: 5% 0;
  }
  h2 {
    font-size: 1.5rem;
    color: #273d8e;
  }
  p {
    color: #273d8e;
    font-size: 1.2rem;
  }
`;
const MyImg = styled.div`
  width: 15rem;
  height: 15rem;
  border: none;
  border-radius: 500px;
  background-color: #fff;
  margin: 0 auto;
  img {
    height: 15rem;
    border-radius: 100%;
    margin: 0 auto;
  }
`;

export default ResumePage;
