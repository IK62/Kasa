import Collapse from '../components/mainComponents/collapse'
import GalleryCarousel from '../components/logementComponents/galleryCarousel'
import RatingStars from '../components/logementComponents/ratingStars'
import TagsList from '../components/logementComponents/tagsList'
import ErrorPage from './errorPage'
import data from '../data.json'
import { useParams } from 'react-router-dom'

function Logement() {
  const params = useParams()

  let location

  for (let i = 0; i < data.length; i++) {
    const element = data[i]
    if (element.id === params.id) {
      location = element
    }
  }

  if (!location) {
    return <ErrorPage />
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
            <img src={image} alt="imageDuProprietaire" />
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
