import "./styles.css";
import { useState, useReducer } from "react";

let GlobleCounter = 1;

function NavBar(props) {
  const [data, newdata] = useState("");
  return (
    <nav className="nav">
      <div className="spn">
        <h1 className="Logo">Sky-Team</h1>
        <span className="btn">
          <button
            onClick={function () {
              props.SetShow("Home");
            }}
          >
            HOME
          </button>
          <button
            onClick={function () {
              props.SetShow("MyOrder");
            }}
          >
            My Orders
          </button>
        </span>
      </div>
      <div className="spn">
        <form
          onSubmit={function (evn) {
            evn.preventDefault();
          }}
        >
          <input
            onChange={function (props) {
              newdata(props.target.value);
            }}
            type="search"
            list="browsers"
            name="brower"
            placeholder="Search"
          />
          <datalist id="browsers">
            <option value="Bakery food" />
            <option value="Chocolate" />
            <option value="Vegetables" />
            <option value="Aata" />
            <option value="Rice" />
            <option value="Sop and shampoo" />
          </datalist>
          <button
            type="submit"
            onClick={function () {
              props.SetShow(data);
              newdata("");
            }}
          >
            SEARCH
          </button>
        </form>
      </div>
    </nav>
  );
}

function FT() {
  return (
    <footer>
      <div className="AboutUs">
        <span className="ContactUs">Contact-Us</span>
        <a href="https://www.instagram.com/ramprasad_shinde_2025/">
          <img src="https://www.informatique-mania.com/wp-content/uploads/2021/06/instagram.png?ezimgfmt=rs:300x300/rscb1/ng:webp/ngcb1" />
        </a>
        <a href="https://www.facebook.com/ramprasad.shinde.129/">
          <img src="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-600w-593204357.jpg" />
        </a>
        <a href="https://github.com/ram2025">
          <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" />
        </a>
      </div>
      <h1 className="SkyTeam">SKY-TEAM</h1>
      <p>
        "We don't want to push our ideas on to customers, we simply want to make
        what they want."
      </p>
    </footer>
  );
}

function HomeItem(props) {
  return (
    <>
      <h1 className="Happy">HAPPY SHOPPING</h1>
      <div className="HomePage">
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Dairy-Milk",
                Price: 100
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kihqz680-0/chocolate/e/3/v/dairy-milk-chocolate-home-treats-126g-pack-of-2-cadbury-original-imafya2zjx5mnvbh.jpeg?q=70"
              alt="img"
            />
          </div>
          <p style={{ color: "white" }}>Dairy-Milk (Rs-100)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Cooking Oil",
                Price: 200
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://5.imimg.com/data5/DW/UA/LS/SELLER-47257817/edible-oil-packaging-pouches-500x500.jpg" />
          </div>
          <p style={{ color: "white" }}>Cooking Oil (Rs-200)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Rice-5kg",
                Price: 250
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://4.imimg.com/data4/GQ/RU/ANDROID-53192496/product-500x500.jpeg" />
          </div>
          <p style={{ color: "white" }}>Rice-5kg (Rs-250)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "TATA-Salt-1kg",
                Price: 20
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://rukminim1.flixcart.com/image/416/416/k0463rk0/salt/8/r/j/1-salt-1kg-iodized-salt-tata-original-imafjz67wuwmwenf.jpeg?q=70" />
          </div>
          <p style={{ color: "white" }}>TATA Salt (Rs-20)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Biryani-Masala",
                Price: 100
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://rukminim1.flixcart.com/image/416/416/km9ht3k0/spice-masala/p/x/q/800-chicken-biryani-masala-200g-pouch-pack-of-4-pouch-suhana-original-imagf7guhgzrjz4z.jpeg?q=70" />
          </div>
          <p style={{ color: "white" }}>Biryani Masala (Rs-100)</p>
        </div>
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Chips-Pack",
                Price: 50
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://5.imimg.com/data5/AN/XX/QD/SELLER-77460638/lays-500x500.jpg" />
          </div>
          <p style={{ color: "white" }}>Chips Pack (Rs-50)</p>
        </div>
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Onion-Hair-Oil",
                Price: 150
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://5.imimg.com/data5/SELLER/Default/2021/11/WR/IU/FK/119203967/onion-hair-shampoo-300-ml-500x500.jpg" />
          </div>
          <p style={{ color: "white" }}>Onion-Hair-Shampoo(Rs-150)</p>
        </div>
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Dettol-Soap",
                Price: 50
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://m.media-amazon.com/images/I/51uSr9jA3tL._SY450_.jpg" />
          </div>
          <p style={{ color: "white" }}>Dettol-Soap(Rs-50)</p>
        </div>
      </div>
    </>
  );
}

function Chocolate(props) {
  return (
    <>
      <h1 className="Happy">Chocolates</h1>
      <div className="HomePage">
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Dairy-Milk",
                Price: 100
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://rukminim1.flixcart.com/image/416/416/kihqz680-0/chocolate/e/3/v/dairy-milk-chocolate-home-treats-126g-pack-of-2-cadbury-original-imafya2zjx5mnvbh.jpeg?q=70" />
          </div>
          <p style={{ color: "white" }}>Dairy-Milk (Rs-100)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "KitKat",
                Price: 50
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://www.kitkatarabia.com/sites/default/files/2022-04/KITKAT%C2%AE%204%20Finger%20Milk%20Chocolate%20Bar%20_Desktop-428x428px.png" />
          </div>
          <p style={{ color: "white" }}>KitKat (Rs-50)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "KisMi-Chocolate",
                Price: 20
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img
              src="https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.6435-9/61977216_896608877368679_6442281906972131328_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=AQ54Cmtv5GsAX9tjyLC&_nc_ht=scontent.fpnq13-1.fna&oh=00_AT_5YBWlCOTq2vl1-C_AFtb9AZ4mNPsRAGCiBkBqirGUrw&oe=62CB259B"
              alt="img"
            />
          </div>
          <p style={{ color: "white" }}>KisMi (Rs-20)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Mango-Chocolate",
                Price: 50
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://images.picxy.com/cache/2018/7/19/46d2ec6583d82f6c9588269fe64a3409.jpg" />
          </div>
          <p style={{ color: "white" }}>Mango-Chocolate (Rs-50)</p>
        </div>

        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Imali-chocolate",
                Price: 100
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://5.imimg.com/data5/YJ/HT/MY-40439168/imli-goli-500x500.jpg" />
          </div>
          <p style={{ color: "white" }}>Imali-chocolate (Rs-100)</p>
        </div>
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Melody-chocolate",
                Price: 40
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://m.media-amazon.com/images/I/819KQPlk3xL._SY741_.jpg" />
          </div>
          <p style={{ color: "white" }}>Melody-chocolate Pack (Rs-50)</p>
        </div>
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "5-Star",
                Price: 5
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://frugivore-storage.s3.amazonaws.com/media/package/img_one/2019-09-19/5_Star_20_Gm_1.jpg" />
          </div>
          <p style={{ color: "white" }}>5-Star(Rs-5)</p>
        </div>
        <div
          onClick={function () {
            if (confirm("For Confirmation Order Press OK !")) {
              props.SetItem({
                Id: GlobleCounter++,
                Task: "Add",
                Product: "Dark-chocolate",
                Price: 30
              });
            }
          }}
          className="ItemBox"
        >
          <div>
            <img src="https://5.imimg.com/data5/OX/CQ/AN/SELLER-11168889/dark-choco-hearts-500x500.png" />
          </div>
          <p style={{ color: "white" }}>Dark (Rs-50)</p>
        </div>
      </div>
    </>
  );
}

function MyReducer(ItemList, ActionList) {
  const CopyItemList = ItemList.slice();

  if (ActionList.Task === "Add") {
    CopyItemList.push({
      id: ActionList.Id,
      Product: ActionList.Product,
      Price: ActionList.Price
    });
    return CopyItemList;
  } else if (ActionList.Task === "Delete") {
    const tem = CopyItemList.filter((el) => el.id !== ActionList.Id);
    console.log(tem);
    return tem;
  }
  return CopyItemList;
}

function MyOrder(props) {
  let k = 9;
  let Total = 0;
  const item = props.Item.slice();
  let list = item.map(function (el) {
    Total = Total + el.Price;
    return (
      <>
        <li key={k}>
          <div>
            {el.Product} --Rs {el.Price}
          </div>
        </li>
        <button
          onClick={function () {
            props.SetItem({
              Id: el.id,
              Task: "Delete",
              Product: el.Product,
              Price: el.Price
            });
          }}
        >
          Cancel
        </button>
      </>
    );
  });

  if (true) {
    return (
      <div className="MyO">
        <div className="adress">
          <h1>List Of Product : </h1>
          <ol>{list}</ol>
          <h1>Total-Price : Rs {Total}</h1>
        </div>
      </div>
    );
  }
}

function MyList(props) {
  let Total = 0;
  const item = props.Item.slice();
  let list = item.map(function (el) {
    Total = Total + el.Price;
    return (
      <li>
        {" "}
        {el.Product} --Rs {el.Price}
      </li>
    );
  });
  return (
    <>
      <h1>List Of Product : </h1>
      <ol>{list}</ol>
      <h1>Total-Price : Rs {Total}</h1>
    </>
  );
}

function AdrForm(props) {
  const [Name, SetName] = useState("");
  const [Mob, SetMob] = useState("");
  const [Mail, SetMail] = useState("");
  const [Adr, SetAdr] = useState("");

  return (
    <div className="adress">
      <h1>Adress</h1>
      <form
        onSubmit={function (evn) {
          evn.preventDefault();
        }}
      >
        <label>
          Name <br />
          <input
            onChange={function (evn) {
              SetName(evn.target.value);
            }}
            value={Name}
            type="text"
            required
          />
        </label>
        <label>
          {" "}
          Mobile
          <br />
          <input
            onChange={function (evn) {
              SetMob(evn.target.value);
            }}
            value={Mob}
            type="text"
            required
          />
        </label>
        <label>
          Gmail
          <br />
          <input
            onChange={function (evn) {
              SetMail(evn.target.value);
            }}
            value={Mail}
            type="email"
            required
          />
        </label>
        <label>
          Adress
          <br />
          <textarea
            onChange={function (evn) {
              SetAdr(evn.target.value);
            }}
            value={Adr}
            rows="4"
            cols="25"
            required
          />
        </label>
        <button
          onClick={function () {
            if (Name !== "" && Mob !== "" && Mail !== "" && Adr !== "") {
              props.SetAdress({
                State: true,
                Name: Name,
                Mob: Mob,
                Mail: Mail,
                Adr: Adr
              });
              props.SetShow("MyOrder");
            }
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default function App() {
  const [Adress, SetAdress] = useState([]);
  const [Item, SetItem] = useReducer(MyReducer, []);
  const [Show, SetShow] = useState("Home");

  if (Show === "Home") {
    return (
      <>
        <NavBar SetShow={SetShow} />
        <HomeItem Item={Item} SetItem={SetItem} />
        <FT className="foot" />
      </>
    );
  } else if (Show === "MyOrder") {
    if (Adress.State && Adress.Name !== "" && Adress.Mob !== "" && Adress.Adr) {
      return (
        <>
          <NavBar SetShow={SetShow} />
          <MyList SetItem={SetItem} Item={Item} />
          <div className="FullAdr">
            <h2>Order will be delivered tomorrow...</h2>
            <p>Name : {Adress.Name}</p>
            <p>MObile :{Adress.Mob}</p>
            <p>Gmail:{Adress.Mail}</p>
            <p>Adress :{Adress.Adr}</p>
          </div>
          <FT className="foot" />
        </>
      );
    } else {
      return (
        <>
          <NavBar SetShow={SetShow} />
          <MyOrder className="MyOrderSet" SetItem={SetItem} Item={Item} />
          <button
            onClick={function () {
              SetShow("OderConfirm");
            }}
            className="ORDER"
          >
            Continue
          </button>
          <FT className="foot" />
        </>
      );
    }
  } else if (Show === "OderConfirm") {
    return (
      <>
        <NavBar SetShow={SetShow} />
        <AdrForm className="AdrF" SetShow={SetShow} SetAdress={SetAdress} />
        <FT className="foot" />
      </>
    );
  } else if (Show === "Chocolate") {
    return (
      <>
        <NavBar SetShow={SetShow} />
        <Chocolate Item={Item} SetItem={SetItem} />
        <FT className="foot" />
      </>
    );
  } else {
    return (
      <>
        <NavBar SetShow={SetShow} />
        <h1>Woring on this page</h1>
        <hr />
        <p>1. "Life is for service." – Fred Rogers</p>
        <p>
          2. " To earn the respect and eventually love of your customers, you
          first have to respect those customers. That is why Golden Rule
          behavior is embraced by most of the winning companies." – Colleen
          Barrett, Southwest Airlines President Emerita{" "}
        </p>
        <p>
          3. "Strive not to be a success, but rather to be of value." – Albert
          Einstein
        </p>
        <p>
          {" "}
          4. "To keep a customer demands as much skill as to win one." –
          American Proverb
        </p>
        <p>
          {" "}
          5. "To give without any reward, or any notice, has a special quality
          of its own." – Anne Morrow Lindeberg, Author and Aviator
        </p>
        <hr />
        <h1>Thank-You...</h1>
        <FT className="foot" />
      </>
    );
  }
}
