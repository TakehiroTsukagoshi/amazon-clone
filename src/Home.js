import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img 
        className="home__image"
        src="https://images-fe.ssl-images-amazon.com/images/G/09/2020/Pantry/Jisshitu_Muryo/gw/18_gw_desktop_hero_3000x1200._CB406248172_.jpg" alt=""
      />

      <div className="home__row">
        <Product
          id={38798373}
          title={"ワイヤレスイヤホン"}
          image="https://www.pakutaso.com/shared/img/thumb/AirPAKU1755_TP_V.jpg"
          price={10000}
          rating={3}
        />
        <Product
          id={47592187}
          title={"カメラ"}
          image="https://www.pakutaso.com/shared/img/thumb/gorime6458A8502_TP_V.jpg"
          price={30000}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={4972815}
          title={"タブレット"}
          image="https://www.pakutaso.com/shared/img/thumb/ipadpro2018-2-23_TP_V.jpg"
          price={40000}
          rating={4}
        />
        <Product
          id={498275}
          title={"マウス"}
          image="https://www.pakutaso.com/shared/img/thumb/ms458A2814_TP_V.jpg"
          price={2500}
          rating={3}
        />
        <Product
          id={4517637}
          title={"バッテリー"}
          image="https://www.pakutaso.com/shared/img/thumb/bitcoin19510457_TP_V.jpg"
          price={5000}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={18475}
          title={"PC"}
          image="https://blog.8bit.co.jp/wp-content/uploads/2014/11/Responsive-Showcase-PSD-Mockups.jpg"
          price={100000}
          rating={5}
        />
      </div>

    </div>
  )
}

export default Home
