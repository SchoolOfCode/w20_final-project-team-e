import Menu from "../Menu/Menu";
import Sticky from "react-sticky-el";
import HelpModal from "../HelpModal/HelpModal";
import BlogArticles from "../BlogArticles/BlogArticles";
import Footer from "../Footer/Footer";

export default function Blog(props) {
  return (
    <div className="blog">
      <Sticky>
        <Menu />
      </Sticky>
      <BlogArticles />
      {/* Help modal Button logic*/}
      <button
        className={props.openModal ? "closeModalBtn" : "openModalBtn"}
        onClick={() => {
          props.setOpenModal(!props.openModal);
        }}
      >
        ?
      </button>
      {props.openModal && <HelpModal closeModal={props.setOpenModal} />}
      <Footer />
    </div>
  );
}
