import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Component/style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ImageShow() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/448474623_1014513156732060_2637327742649680328_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEljVqafesKbuTkllpnL51ATeSP3JSrPDhN5I_clKs8OKhzkukhHTzPF2jTXBaeFsJ6txUpro9XCL9CiB3S4h21&_nc_ohc=WuJ5TH-DDw4Q7kNvgEMI6NJ&_nc_ht=scontent.fbkk13-2.fna&oh=00_AYC6OEFqWHJ0gHyxLxI8TxH0z4HBFa43Fdv6fCRAkxyRVw&oe=6674EF5B" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/448360447_1014513516732024_8404519833449117410_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE-JriLuVac8InvI5521kg40K3EkxGVEhTQrcSTEZUSFMr8fZ7MEK_gI-gBevnRHnpLcI12QUXjjbAd-_fg0K5R&_nc_ohc=IHTSOgk1_-kQ7kNvgH6j6TE&_nc_ht=scontent.fbkk9-3.fna&oh=00_AYAUnxOEfCc9yrUazSExOL41hWJ4ILqEfG14MYP29ltBSg&oe=6674E279" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/448305365_1014513050065404_4831302049252764085_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHEQLKKF6I1pYT7OcVYv7dKHXw6OKlRXsgdfDo4qVFeyNmWnGdc_6vNmRtqOyXMmAqE19I3fhruPP7XRjnoD2YC&_nc_ohc=UcWx6CYHvjEQ7kNvgFjG-2g&_nc_ht=scontent.fbkk9-3.fna&oh=00_AYAdqXe5kZZJhf0kTBu6_d72ASPONyjaEswtFJJwLNM0xg&oe=6674F3BF" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/448548453_1014512816732094_1289075671673768867_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGk61tNgrFbrNYZFR8io2RqeAFyBweG7rl4AXIHB4buuVl3zjwUxOhAgnqaMh_umQ1RzPVczySBmWN-yP4Nj6CJ&_nc_ohc=YuyYJHdRCOQQ7kNvgEsrojK&_nc_ht=scontent.fbkk12-2.fna&oh=00_AYCdKH0i3VyEsn0PphQTgBrRHP_p8vKDBlrth98qtTGNHg&oe=6674E490" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/448547220_1014513216732054_755885843053828382_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHfj0iHoYgeJxIhmvTLDw3u5IHc6t9LLivkgdzq30suK7QRBRcw9prQG77Li0ORhhpl3Ztqlj5vPuLAAHa6JFQc&_nc_ohc=p9TpwN72xmoQ7kNvgHe45QX&_nc_ht=scontent.fbkk12-5.fna&oh=00_AYCNACbtpQnV_UQ2Ip3Oi8QBVUD8mceFINXeqcXL7Or-UA&oe=6674E0CE" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/448354396_1014513353398707_8004443812199403584_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFBRBUMSHa4Efr4M3Tzz3b74DwNY6iQvb3gPA1jqJC9vWHr6p0kx_rC8I7FJrsr34uJB_TJ9yqcvZbaJz1Br2y1&_nc_ohc=OBwOqTXTBuMQ7kNvgFH2XWx&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYAMgZYuCJ4ROnOU0TDv1IvA2AZmRwBh5XfVkY45Lgm-vA&oe=6674FAB8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/448305208_1014513400065369_7558710432963610221_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHj0kiKJzm1I50hP_F9MQlo89Nit_2tQQ3z02K3_a1BDXH1j3wWZwytqzbR1NLMZ6BGLU7fJSMdIbHUQhB2RyhK&_nc_ohc=drpNF89ka6wQ7kNvgGtzNDL&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYAWZoYHtfkkVei9NndhnXCc2ToLZ2SdUIjul3_3fImXLg&oe=6674DE76" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/448503849_1014513566732019_2557011964233338575_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXBSphGVhMr199YqHFzCfvKqrS58E-_UUqqtLnwT79RVRo3428CJjIVPplOnCfzEbmRZjTgZpI6V6pL8MPuGQT&_nc_ohc=J4joG9dBedsQ7kNvgFs3CPQ&_nc_ht=scontent.fbkk12-2.fna&oh=00_AYAiYzTMYfetOKwIyRSX0BT_JJYVFzvE8QuMzur80bl6dA&oe=6674DBC1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/448264317_1014513620065347_97461652175993221_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZv4p7-HZuHaTeVwuUidBNw1gY2vFS8ubDWBja8VLy5nbI9_CLgjPYsftM9mwLzS-PZHuYO_DBi_YK2YGPNH56&_nc_ohc=iQza78rGHNsQ7kNvgEA_ljn&_nc_ht=scontent.fbkk12-2.fna&oh=00_AYCCn7agUzo9bFU1GylIr4Lv0tJvVHn9NNNa4Q-nJyzY2A&oe=6674E5C4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/448303979_1014513660065343_73849242417150285_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHaKy6sICOBAJBPuwYgh0NejM0Zm87sugCMzRmbzuy6ALlcnehciNOaUsfVcIo5b3kqkxeMXfsW_i38oB7SQQgO&_nc_ohc=z73BAD1LqcYQ7kNvgEOWBxc&_nc_ht=scontent.fbkk12-3.fna&oh=00_AYDNGfDoHcXJpEC3wJhGZ8GphgxTrwou9wBH2G-l_tsQ9Q&oe=6674E270" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/448477542_1014513890065320_2888966047922348272_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFWbOEdGMgSkR5iBk9h6icI7X9-7T2JIUrtf37tPYkhSmyUIwn4kxy8zfdgc-NFAOy2kTw-I1QgIMdQlRbwPd0g&_nc_ohc=N5XNhIgCh-gQ7kNvgHGCy36&_nc_ht=scontent.fbkk13-2.fna&oh=00_AYCtwWBa1XhP0BCFrhhK5ApcHlAG9K0cpU1yKRTsH15HPQ&oe=6674EB2A" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/448302580_1014514146731961_1722321817963046831_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4aASjvQDsvgus3hX9XBFQTPB0O20_VjpM8HQ7bT9WOlE_uLphehHd3VLHNCRe4j8pSZAnf7X-d7KuHo1XZTX_&_nc_ohc=79fjnDsQeMYQ7kNvgF134R7&_nc_ht=scontent.fbkk13-2.fna&oh=00_AYDKOmcn7vcWtKskeXiyK1ifSF0jHATvCv0g-22jO-ZmeA&oe=6674E8A1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/448265489_1014514620065247_3858288854261705239_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhcEJ0odBqXXLl_PVXmKgqKMNnhGZc9TIow2eEZlz1MvnA3KRYyP9Ny_F2fQYqtyqg7C3TrJXfbWm03Z4Is54j&_nc_ohc=NXlCrkVSl0kQ7kNvgG0sL0W&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYAx2pCM7FJ4qiGB1Fhqp1mWCtl8oyeY0GVT-3Om-yd-Jw&oe=6674F930" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/448476457_1014514786731897_2894611578199604437_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhzhBX3dYPgUqWAxvmf-1JnNjrtu3rHs6c2Ou27esezkH-vqSkFzD0v2h-7_58FndP_8RG5FWBLAJ9OH4I9BMY&_nc_ohc=S8bsbKT60R4Q7kNvgFiUjH6&_nc_ht=scontent.fbkk12-4.fna&oh=00_AYDR-SSztZx5xqhggDNnRchINV6wzfxBDbE9pMj6hBsXpw&oe=6675006D" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
