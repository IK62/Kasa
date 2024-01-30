import { useState } from 'react'
import { ReactComponent as ArrowTop } from '../images/chevron-up-solid.svg'

function Collapse({ title, content }) {
  const  [isOpen, setIsOpen] = useState(false)

  return (
    <div className='collapseDiv'>
      <div className="collapseOutside">
        <p className="collapseTitle">{title}</p>
        <ArrowTop
          className={isOpen ? 'collapseArrow isArrowOpen' : 'collapseArrow'}
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        />
      </div>
      <div className={isOpen ? 'collapseInside isCollapseOpen' : 'collapseInside'}>
        {typeof content === 'object' ? (
          <ul className="collapseContent">
            {content.map((element) => {
              return <li key={element}>{element}</li>
            })}
          </ul>
        ) : (
          <p className="collapseContent">{content}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse
