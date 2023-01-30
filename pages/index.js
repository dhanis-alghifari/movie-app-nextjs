import Footer from "components/atom/Footer";
import Title from "components/atom/Title";
import ListMovie from "components/organism/ListMovie";
import React from "react";

function HomePage() {
  return (
    <div>
      <Title title={"List Movie"} />
      <ListMovie />
      <Footer />
    </div>
  );
}

export default HomePage;
