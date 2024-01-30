function TopBanner({title}) {
  return (
    <div className={title ? 'isTitle topBanner' : 'topBanner'}>
        <h2>
            {title ? title : null}
        </h2>
    </div>
  )
}

export default TopBanner
