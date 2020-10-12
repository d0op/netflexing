import React from "react";
import { FaqsContainer } from "./containers/faq";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

//https://github.com/karlhadwen/netflix
//https://www.youtube.com/watch?v=x_EEwGe-a9o&t=4265s&ab_channel=KarlHadwen

export default function App() {
  return (
    <>
      <JumbotronContainer></JumbotronContainer>
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
