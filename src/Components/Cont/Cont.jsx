import styled from "styled-components";

const Main = styled.div`
  width: 98%;
  height: 95%;
  background-color: rgba(246, 247, 250, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cont = ({ children }) => {
  return (
    <div
      style={{
        width: "95%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Main>{children}</Main>
    </div>
  );
};

export default Cont;
