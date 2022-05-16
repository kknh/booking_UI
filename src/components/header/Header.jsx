import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import './header.css'
import { useState } from 'react'

function Header() {
	const [openDate, setOpenDate] = useState(false)
	const [openOptions, setOpenOptions] = useState(false)
	const [date, setDate] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	})
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	})

	const handleOptionClick = (e, type) => {
		if (e.target.textContent === '-') {
			setOptions((prev) => ({
				...prev,
				[type]: prev[type] - 1,
			}))
		} else if (e.target.textContent === '+') {
			setOptions((prev) => ({
				...prev,
				[type]: prev[type] + 1,
			}))
		}
	}

	return (
		<header className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</div>
				</div>
				<h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
				<p className="headerDesc">
					Get rewarded for your travels - unlock instant savings of 10% or more
					with a free Lamabooking account
				</p>
				<button className="btn btn-dark headerBtn">Sign in / Register</button>
				<div className="headerSearch">
					<div className="headerSearchList">
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
							<input
								type="text"
								placeholder="Where are you going?"
								className="headerSearchQuestionInput"
							/>
						</div>
						<div className="headerSearchItem">
							<div className="headerSearchDate">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="headerSearchIcon"
								/>
								<span onClick={() => setOpenDate((prev) => !prev)}>{`${format(
									date.startDate,
									'dd/MM/yyyy'
								)} to ${format(date.endDate, 'dd/MM/yyyy')}`}</span>
							</div>
							{openDate && (
								<DateRange
									ranges={[date]}
									editableDateInputs={true}
									className="datePicker"
									minDate={new Date()}
									moveRangeOnFirstSelection={false}
									onChange={(item) => setDate(item.selection)}
								/>
							)}
						</div>
						<div className="headerSearchItem">
							<div
								className="headerSearchOptions"
								onClick={() => setOpenOptions((prev) => !prev)}
							>
								<FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
								<span>{`Adult: ${options.adult} · Children: ${options.children} · Room: ${options.room}`}</span>
							</div>
							{openOptions && (
								<div className="optionPicker">
									<div className="optionTitles">
										<span>Adult</span>
										<span>Children</span>
										<span>Room</span>
									</div>
									<div className="optionButtons">
										<div className="optionBtn">
											<button
												disabled={options.adult <= 1}
												onClick={(e) => handleOptionClick(e, 'adult')}
											>
												-
											</button>
											<span>{options.adult}</span>
											<button onClick={(e) => handleOptionClick(e, 'adult')}>
												+
											</button>
										</div>
										<div className="optionBtn">
											<button
												disabled={options.children <= 0}
												onClick={(e) => handleOptionClick(e, 'children')}
											>
												-
											</button>
											<span>{options.children}</span>
											<button onClick={(e) => handleOptionClick(e, 'children')}>
												+
											</button>
										</div>
										<div className="optionBtn">
											<button
												disabled={options.room <= 1}
												onClick={(e) => handleOptionClick(e, 'room')}
											>
												-
											</button>
											<span>{options.room}</span>
											<button onClick={(e) => handleOptionClick(e, 'room')}>
												+
											</button>
										</div>
									</div>
								</div>
							)}
						</div>
						<button type="submit" className="btn btn-dark searchBtn">
							Search
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
