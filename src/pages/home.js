import TopBanner from "../components/mainComponents/topBanner"
import LocationGallery from "../components/homeComponents/locationGallery"

function Home() {
    return (
        <>
            <TopBanner title={'Chez vous, partout et ailleurs'} />
            <LocationGallery />
        </>
    )
}

export default Home