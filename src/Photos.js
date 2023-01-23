import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "./Pics";

function Photos() {

  const pageTitle = "Photographs";
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <Fragment>
    <Helmet>
      <title>{pageTitle} by Naeem Noor</title>
    </Helmet>

    <div className="nn_hero nn_about">
          <div className="container">
            <h1>{pageTitle}</h1>
             
      <p>Like most people, I take a lot of photos. Here is a selection of some of the photos I shot using  <strong>Lumix GX9</strong> (15mmm, 20mm, 12-60mm), <strong>Fujifilm XF10</strong> and <strong>Pentax Q-S1</strong> (01, 02, 06). </p>
         
          </div>
        </div>

    <div className="container">

    <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={320}
        margin={4}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}

    </div>
  </Fragment>
  );
};

export default Photos;