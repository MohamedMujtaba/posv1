import styled from "styled-components";
import Cont from "./Components/Cont/Cont";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function App() {
  return (
    <Main>
      <Sidebar />
      <Cont >
        <Home />
      </Cont>
    </Main>
  );
}

export default App;
