import React from "react";

import Menu from "../Menu/Menu";
import Sticky from "react-sticky-el";
import HelpModal from "../HelpModal/HelpModal";
import HeroSection from "../HeroSection/HeroSection";
import BlogButtons from "../BlogButtons/BlogButtons";
import BlogArticles from "../BlogArticles/BlogArticles";
import Footer from "../Footer/Footer";

export default function Blog(props) {
  return (
    <div className="blog">
      {/* to be fixed at the top of the page? */}
      <Sticky>
        <Menu />
      </Sticky>
      <HeroSection />
      <BlogButtons />
      <BlogArticles />
      <Footer />
      <button
        className={props.openModal ? "closeModalBtn" : "openModalBtn"}
        onClick={() => {
          props.setOpenModal(!props.openModal);
        }}
      >
        ?
      </button>
      {props.openModal && <HelpModal closeModal={props.setOpenModal} />}
    </div>
  );
}
