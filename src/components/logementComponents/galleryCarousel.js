import { useState } from 'react'
import leftArrow from '../../images/chevron-left-solid.svg'
import rightArrow from '../../images/chevron-right-solid.svg'

function GalleryCarousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <>
      {images.length > 1 ? (
        <>
          <img
            onClick={
              imageIndex === 0
                ? () => setImageIndex(images.length - 1)
                : () => setImageIndex(imageIndex - 1)
            }
            src={leftArrow}
            alt="arrowToLeft"
            className="leftArrow"
          />
          <img
            src={images[imageIndex]}
            alt="mainImageOfTheGallery"
            className="galleryImage"
          />
          <p className="imageIndex">{`${imageIndex + 1}/${images.length}`}</p>
          <img
            onClick={
              imageIndex === images.length - 1
                ? () => setImageIndex(0)
                : () => setImageIndex(imageIndex + 1)
            }
            src={rightArrow}
            alt="arrowToRight"
            className="rightArrow"
          />
        </>
      ) : (
        <img
          src={images[imageIndex]}
          alt="mainImageOfTheGallery"
          className="galleryImage"
        />
      )}
    </>
  )
}

export default GalleryCarousel
