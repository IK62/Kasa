import TopBanner from "./topBanner"
import LocationGallery from "./locationGallery"

function Home() {
    return (
        <>
            <TopBanner title={'Chez vous, partout et ailleurs'} />
            <LocationGallery />
        </>
    )
}

export default Home