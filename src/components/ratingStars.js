import { ReactComponent as StarActivated } from '../images/star-red.svg'
import { ReactComponent as StarDeactivated } from '../images/star-grey.svg'

function RatingStars({ rating }) {
  const ratingList = []

  for (let i = 0; i < 5; i++) {
    ratingList.push(
      <li key={i}>{i < rating ? <StarActivated /> : <StarDeactivated />}</li>
    )
  }

  return <ul>{ratingList}</ul>
}

export default RatingStars
