import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";

const Main = styled.div`
  background-image: linear-gradient(135deg, #5efce8 10%, #736efe 100%);
  width: 5%;
  height: 80%;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const Btn = styled.button`
  background: none;
  color: #fff;
  width: 15vh;
  height: 4vw;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transform: rotate(-90deg);
  padding: 10px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  font-size: 18px;
  cursor: pointer;
  .icon {
    font-size: 22px;
  }
  &.focus {
    background-color: #fff;
    color: #2f80ed;
  }
`;
const list = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome className="icon" />,
  },
  {
    id: 2,
    name: "Bills",
    icon: <RiBillLine className="icon" />,
  },
  {
    id: 3,
    name: "Admin",
    icon: <IoMdSettings className="icon" style={{ fontSize: "24px" }} />,
  },
];
function Sidebar() {
  const [curr, setCurr] = useState(1);
  return (
    <Main>
      {list.map((i) => {
        return (
          <Btn
            onClick={() => setCurr(i.id)}
            className={`${curr === i.id && "focus"}`}
          >
            {i.icon}
            {i.name}
          </Btn>
        );
      })}
    </Main>
  );
}
// TODO:
// AiFillHome
// RiBillLine
// MdOutlineReceipt
export default Sidebar;
