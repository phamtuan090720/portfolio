import React from "react";
import Style from "./index.module.scss";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
interface HomePageProps {
  children: React.ReactNode;
}
export default function HomePage({ children }: HomePageProps) {
  return (
    <div className={Style["container"]}>
      <Header />
      <div className={Style["bg--right"]}></div>
      <div className={Style["content"]}>{children}</div>
      <Footer />
    </div>
  );
}
