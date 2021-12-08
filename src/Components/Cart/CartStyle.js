import styled from "styled-components";

export const Main = styled.div`
  background: rgba(246, 247, 250, 0.5);;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 1rem;
`;
export const Header = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* align-self: flex-start; */
  div{
    width: 35px;
    height: 35px;
    background: #FFECEC;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .icon{
    color: #FC4444;
  }
`;
export const CartItems = styled.div` 
  width: 90%;
  height: 70%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  display: none;
}
  `
export const Item = styled.div` 
  width: 100%;
  min-height: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content:space-between ;
  background: #fff;
  border-radius: 10px;
  padding: .5rem 1rem;
  // TODO:
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }
  `

export const Footer = styled.div` 
  width: 90%;
  padding: 1rem 0;
  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  `
export const SubFooter = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding:1rem 0;
  margin-top: 5px;
  border-top: solid 1px #f4f4f4;
  border-radius: 20px;
  box-shadow:0px -5px 7px 0px rgba(47,128,237,0.3);
  div{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Btn = styled.button` 
  border: none;
  width: 90%;
  padding: 1rem;
  border-radius: 10px;
  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5  51%, #00d2ff  100%);
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  &:hover{
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`
export const Input = styled.input` 
  width: 70px;
  height: 30px;
  font-size: 1.5rem;
  border: none;
  text-align: center;
  &:focus{
    border: none;
    outline: none;
  }
`





