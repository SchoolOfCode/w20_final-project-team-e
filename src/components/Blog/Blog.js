import React from "react";

import Menu from "../Menu/Menu";
import Sticky from "react-sticky-el";
import HelpModal from "../HelpModal/HelpModal";

export default function Blog(props) {
  return (
    <div className="blog">
      {/* to be fixed at the top of the page? */}
      <Sticky>
        <Menu />
      </Sticky>
      <button
        className={props.openModal ? "closeModalBtn" : "openModalBtn"}
        onClick={() => {
          props.setOpenModal(!props.openModal);
        }}
      >
        ?
      </button>
      {props.openModal && <HelpModal closeModal={props.setOpenModal} />}
      <p>LOTS OF LOVELY BLOG STUFF!</p>
    </div>
  );
}
