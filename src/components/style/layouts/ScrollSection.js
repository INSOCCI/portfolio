import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  overflow-y: auto;
  /* 화면에서 스크롤바 안보이게 */
  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Inner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: #273D8E;
`;
