import Collapse from './collapse'
import GalleryCarousel from './galleryCarousel'
import RatingStars from './ratingStars'
import TagsList from './tagsList'

function Logement() {
  let location = {}

  if (localStorage.getItem('location')) {
    location = JSON.parse(localStorage.getItem('location'))
  }

  const {
    description,
    equipments: equipements,
    host: { name: nom, picture: image },
    location: region,
    pictures: images,
    rating: note,
    tags,
    title: titre,
  } = location

  return (
    <>
      <div className="galleryCarousel">
        <GalleryCarousel images={images} />
      </div>
      <div className="infoSection">
        <div className="titleDiv">
          <h1>{titre}</h1>
          <h2>{region}</h2>
          <TagsList tags={tags} />
        </div>
        <div className="ownerDiv">
          <div className="ownerInfo">
            <p>{nom}</p>
            <img src={image} />
          </div>
          <RatingStars rating={note} />
        </div>
      </div>
      <div className="collapseInfo">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipements} />
      </div>
    </>
  )
}

export default Logement
