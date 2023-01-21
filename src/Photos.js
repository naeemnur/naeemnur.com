import React, { useState, useCallback, Fragment } from "react";
import { Helmet } from "react-helmet";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Pics";

function Photos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const pageTitle = "Photos";

    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

  return (
    <Fragment>
    <Helmet>
      <title>{pageTitle} by Naeem Noor</title>
    </Helmet>

    <div className="nn_hero">
          <div className="container">
            <h1>{pageTitle}</h1>
             
      <p>Like most people, I take a lot of not-so-great photos. Here is a collection of some of my selected shots using <strong>Lumix GX9</strong> (15mmm, 20mm, 12-60mm), <strong>Fujifilm XF10</strong> and <strong>Pentax Q-S1</strong> (01, 02, 06). </p>
         
          </div>
        </div>

    <div className="container">
      <Gallery photos={photos} direction={"row"} onClick={openLightbox} />
  <ModalGateway>
    {viewerIsOpen ? (
      <Modal onClose={closeLightbox}>
        <Carousel
          currentIndex={currentImage}
          views={photos.map(x => ({
            ...x,
            srcset: x.srcSet,
            caption: x.title
          }))}
        />
      </Modal>
    ) : null}
  </ModalGateway>
    </div>
  </Fragment>
  );
};

export default Photos;