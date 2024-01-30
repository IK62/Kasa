import { useState } from 'react'
import leftArrow from '../images/chevron-left-solid.svg'
import rightArrow from '../images/chevron-right-solid.svg'

function GalleryCarousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <>
      <img
        onClick={
          imageIndex === 0
            ? () => setImageIndex(images.length - 1)
            : () => setImageIndex(imageIndex - 1)
        }
        src={leftArrow}
        className="leftArrow"
      />
      <img
        src={images[imageIndex]}
        alt="mainImageOfTheGallery"
        className="galleryImage"
      />
      <img
        onClick={
          imageIndex === images.length - 1
            ? () => setImageIndex(0)
            : () => setImageIndex(imageIndex + 1)
        }
        src={rightArrow}
        className="rightArrow"
      />
    </>
  )
}

export default GalleryCarousel
