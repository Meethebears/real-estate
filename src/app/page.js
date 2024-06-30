'use client'
import styles from "./page.module.css";
import Image from 'next/image'
import { Input } from "antd";
import Content from "./Component/content";


const { Search } = Input;

export default function Home() {

  const likes = 100;
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value)
  }
  return (
    <main style={{ display:'flex' ,alignItems:'center', flexDirection:'column' }}>
      <div className="warp" style={{ position: "relative" }}>
        <Image
          id="background"
          src="https://img.iproperty.com.my/thinkofliving/1620x5000-fit,format=webp/wp-content/uploads/1/2019/02/01162532/66-1.jpg"
          alt="backgroundImg"
          draggable="false"
          width={1350}
          height={600}
          quality={100}
        // style={{ position: "relative" }}
        />
        <div className="inner_position_top" style={{ position: "absolute", display: "flex", justifyContent: 'center', height: 50, width: '100%', top: '30%', zIndex: '999' }}>
          <Search
            className="search"
            placeholder="input search"
            onSearch={onSearch}
            style={{ width: 300 }} />
        </div>
        <div style={{ position: "absolute", display: "flex", justifyContent: 'center', height: 50, width: '100%', bottom: 0, zIndex: '999' }}>
          <button className={styles.btn_icon} style={{ marginRight:10 }}>
            <Image src='/img/icon-home.png' alt='icon-home' width={70} height={70} quality={100} />
            บ้าน
          </button>
          {/* </div> */}
          <button className={styles.btn_icon} style={{ marginRight:10 }}>
            <Image src='/img/icon-condo.png' alt='icon-condo' width={70} height={70} quality={100} style={{ marginTop: 5 }} />
            คอนโด
          </button>
          <button className={styles.btn_icon}>
            <Image src='/img/icon-land.png' alt='icon-land' width={70} height={70} quality={100} style={{ marginTop: 5 }} />
            ที่ดิน
          </button>
        </div>
      </div>
      <Content/>
    </main>
  );
}
