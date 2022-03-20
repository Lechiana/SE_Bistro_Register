import React from "react";
import Hero from "../../components/Hero/Hero";
import Reviews from "../../components/Reviews/Reviews";
import Banner from "./Banner";
import Section from "./Section";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Section
        title="โปรโมชั่น"
        description="ช่วงเวลาอันแสนมีค่า แวะสักนิดกับความสุดยอดของอาหาร ย่อมเป็นสิ่งที่คุ้มค่ากับโปรโมชั่นสุดแสนวิเศษ"
      />
      <Section
        title="ยอดนิยม"
        description="เมนูยอดฮิต เอาใจใส่มนุษย์แสนล้ำค่า ด้วยเมนูอาหารที่เลิศล้ำอย่ามัวพลาด อย่าลังเลกับสิ่งที่แสนวิเศษที่จะทำให้คุณเพลิดเพลินจนไม่รู้ลืม"
      />
      <Section
        title="ไหม่"
        description="โฉมใหม่มาแรง ทั้งยอมฮิต ทั้งเร้าใจ ด้วยความเกิดใหม่เปร่งประกาย จนเจริญตามองแวบเดียวถึงกับดึงดูด ไม่อาจละสายตากับอาหารโฉมใหม่สุดวิเศษนี้"
      />
      <Banner />
      <Reviews
        title="แสดงความคิดเห็นลูกค้า"
        name="เอาให้เละ ถล่มให้ยับ"
        review="ห่วยแตกเกิ๊นนน!!! คำบรรยายอาหารเลี้ยนจนกินไม่ได้ แบบนี้ใครจะแดกลงว่ะ!! เอาไปขายให้หมากินเถอะ ยังจะมีประโยชน์ซะมากกว่า ให้พวกกูกิน f.u.c.k.er"
      />
    </div>
  );
};

export default Home;
