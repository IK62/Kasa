function TagsList({ tags }) {
  const tagList = tags.map((element) => {
    return <li key={element[0]}>{element}</li>
  })

  return (
    <ul>
      {tagList}
    </ul>
  )
}

export default TagsList
