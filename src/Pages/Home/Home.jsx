import {
  Header,
  Item,
  Left,
  Main,
  Right,
  Search,
  SearchCont,
  ItemCont,
} from "./HomeStyle";
import { FcSearch } from "react-icons/fc";
import Cart from "../../Components/Cart/Cart";
import { useGlobalContext } from "../../Context/Context";
import { data } from "../../dammy";
import { addComma } from "../../utils/addComma.js";
const now = new Date();
const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
const Home = () => {
  const { cart, addToCart } = useGlobalContext();
  console.log(cart);
  return (
    <Main>
      <Left>
        <Header>
          <h2>Order No. #005</h2>
          <p>{date}</p>
        </Header>
        <SearchCont>
          <FcSearch className="icon" size={25} />
          <Search placeholder="Enter item code.. " />
        </SearchCont>
        <ItemCont>
          {data.map((i) => {
            return (
              <Item
                onClick={() => {
                  addToCart(i);
                  console.log("hi");
                }}
              >
                <img src={"https://picsum.photos/640/360"} alt="" />
                <p>{i.name}</p>
                <p>{addComma(i.price)}</p>
              </Item>
            );
          })}
        </ItemCont>
      </Left>
      <Right>
        <Cart />
      </Right>
    </Main>
  );
};

export default Home;
