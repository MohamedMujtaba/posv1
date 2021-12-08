import styled from "styled-components";

export const Main = styled.div` 
  width: 97%;
  height: 95%;
  display: flex;
  `
export const Left = styled.div` 
  width: 65%;
  height: 100%;
  `
export const Header = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    color: #3B4859;
    font-size: 2rem;
  }
  p{
    color: #8292A6;
    font-weight: bold;
  }
  `
export const SearchCont = styled.div` 
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  position: relative;
  .icon{
    position: absolute;
    right: 10px;
  }
  `
export const Search = styled.input` 
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  color: #8292A6;
  padding: 0 1.5rem;
  font-size: 1.4rem;
  &:focus{
    border: none;
    outline: none;
  }
  `
export const ItemCont = styled.div`
  display: flex;
  gap:10px;
  flex-wrap:wrap;
`
export const Item = styled.div` 
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius:10px;
  cursor: pointer;
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  `
export const Right = styled.div` 
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  `

