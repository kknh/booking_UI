import './featuredProperties.css'
function FeaturedProperties() {
	return (
		<section className="fProperties">
			<div className="fPropertyItem">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
					alt="hotel in madrid"
					className="fPropertyImg"
				/>

				<div className="fPropertyItemDesc">
					<h2 className="fPropertyName">Aparthotel Stare Miastro</h2>
					<span className="fPropertyCity">Madrid</span>
					<span className="fPropertyPrice">Starting from $120</span>
					<div className="fPropertyRating">
						<div className="fPropertyRatingNum">8.9</div>
						<div className="fPropertyRatingText">Excellent</div>
					</div>
				</div>
			</div>

			<div className="fPropertyItem">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
					alt="hotel in austin"
					className="fPropertyImg"
				/>

				<div className="fPropertyItemDesc">
					<h2 className="fPropertyName">Comfort Suites Airport</h2>
					<span className="fPropertyCity">Austin</span>
					<span className="fPropertyPrice">Starting from $140</span>
					<div className="fPropertyRating">
						<div className="fPropertyRatingNum">9.3</div>
						<div className="fPropertyRatingText">Exceptional</div>
					</div>
				</div>
			</div>

			<div className="fPropertyItem">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
					alt="hotel in lisbon"
					className="fPropertyImg"
				/>

				<div className="fPropertyItemDesc">
					<h2 className="fPropertyName">Four Seasons Hotel</h2>
					<span className="fPropertyCity">Lisbon</span>
					<span className="fPropertyPrice">Starting from $99</span>
					<div className="fPropertyRating">
						<div className="fPropertyRatingNum">8.8</div>
						<div className="fPropertyRatingText">Excellent</div>
					</div>
				</div>
			</div>

			<div className="fPropertyItem">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
					alt="hotel in berlin"
					className="fPropertyImg"
				/>

				<div className="fPropertyItemDesc">
					<h2 className="fPropertyName">Hilton Garden Inn</h2>
					<span className="fPropertyCity">Berlin</span>
					<span className="fPropertyPrice">Starting from $105</span>
					<div className="fPropertyRating">
						<div className="fPropertyRatingNum">8.9</div>
						<div className="fPropertyRatingText">Excellent</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default FeaturedProperties
