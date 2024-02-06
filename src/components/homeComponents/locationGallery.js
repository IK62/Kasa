import { useNavigate } from 'react-router-dom'
import data from '../../data.json'

function LocationGallery() {
  const navigate = useNavigate()

  const listLocation = data.map((location) => {
    return (
      <li
        key={location.id}
        onClick={() => {
          navigate(`/Fiche-Logement/${location.id}`)
        }}
      >
        <img src={location.cover} alt={location.title} />
        <p>{location.title}</p>
      </li>
    )
  })

  return <ul className="locationGallery">{listLocation}</ul>
}

export default LocationGallery
