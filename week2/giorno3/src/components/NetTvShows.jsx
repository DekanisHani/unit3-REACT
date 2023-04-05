import NetCarousel1 from "./NetCarousel1"

const NetTvShows = () => {
    return (
        <main>
            <h2>Best Sellers</h2>
          <NetCarousel1 films='Naruto' />
          <h2>Trending Now</h2>
          <NetCarousel1 films='Dragon%20Ball' />
          <h2>Watch It Again</h2>
          <NetCarousel1 films='Marvel' />
          <h2>New Releases</h2>
          <NetCarousel1 films='Fast' />
        </main>
    )
}

export default NetTvShows