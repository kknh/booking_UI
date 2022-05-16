import './email.css'

function Email() {
	return (
		<section className="email">
			<h1 className="emailTitle">Save time, save money!</h1>
			<p className="emailDesc">Sign up and we'll send the best deals to you</p>
			<div className="emailCTA">
				<input type="text" placeholder="Your Email" className="emailInput" />
				<button type="submit" className="btn btn-dark emailBtn">
					Subscribe
				</button>
			</div>
		</section>
	)
}
export default Email
