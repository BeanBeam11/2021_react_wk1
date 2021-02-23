import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <header className="header">
            <a href="index.html" className="logo">
                <img className="logo_img" src="img/the-hunger-games-logo-1.png" alt="logo"/>
            </a>
            <div className="burger">
              <img className="icon_menu" src="img/icon_menu.png" alt=""/>
            </div>
            <div className="float-nav">
              <ul className="nav_list">
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="page_404.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">STORY</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="people.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_1_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">PEOPLE</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="district.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_2_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">DISTRICT</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="page_404.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">AUTHOR</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="books.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_1_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">BOOKS</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="page_404.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_2_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">BTS</span>
                  </a>
                </li>
              </ul>
            </div>
        </header>
        <div className="content_area">
          <div className="bg_img"></div>
          <div className="box_content">
            <div className="box_katniss_explain">
              <img className="img_bgi_black" src="img/bg_black.png" alt="explain img"/>
              <div className="explain">
                <p className="center box_name">
                  <span className="explain_name">Katniss Everdeen</span>
                </p>
                <br/>
                <p className="center box_quote">
                  <span className="explain_quote">"Fire Is Catching, And If We Burn, You Burn With Us!"</span>
                </p>
                <br/>
                <p className="center box_quote_name">
                  <span className="explain_quote_name">- Katniss Everdeen</span>
                </p>
                <br/>
                <p className="center box_word">
                  <span className="explain_word">Katniss Everdeen is the main protagonist and the narrator of The Hunger Games trilogy. After her younger sister, Primrose, was reaped to participate in the 74th Hunger Games, Katniss volunteered to take her place as the female tribute from District 12. This action set in motion the events of the entire series.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="box_people">
            <div className="box_img_katniss_1">
              <img className="img_katniss_1" src="img/katniss_1.jpeg" alt="katniss"/>
            </div>
            <div className="box_katniss_2">
              <a href="district.html"><img className="img_district_12" src="img/12.png" alt="district 12"/></a>
              <img className="img_katniss_2" src="img/katniss_2.jpg" alt="katniss"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
