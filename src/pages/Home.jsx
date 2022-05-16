//components:
import Email from '../components/email/Email'
import Featured from '../components/featured/Featured'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import PropertyTypes from '../components/propertyTypes/PropertyTypes'
import './home.css'
function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<Featured />
				<h2>Browse by property type</h2>
				<PropertyTypes />
				<h2>Homes guests love</h2>
				<FeaturedProperties />
				<Email />
				<Footer />
			</div>
		</>
	)
}
export default Home
