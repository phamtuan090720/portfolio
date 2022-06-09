import React from "react";
import Header from "../../Components/Header";
interface HomePageProps {
  children: React.ReactNode;
}
export default function HomePage({ children }: HomePageProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
