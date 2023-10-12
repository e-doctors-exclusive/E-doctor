import React from "react";
import './calendar.css'
const  Calendar = () => {
    return (
<div className="container_calender2">
	<div className="container_calender2-top">
		<div className="btn-group_calendar">
			<button className="tag_calendar2">Today</button>
			<button className="tag_calendar2">Tomorrow</button>
			<button className="tag_calendar2">In 2 days</button>
		</div>
		<div className="month-selector_calendar2">
			<button className="arrow_calendar"><i className="material-icons_calendar">chevron_left</i></button>
			<span className="month-name_calendar2">December 2020</span>
			<button className="arrow_calendar"><i className="material-icons_calendar">chevron_right</i></button>
		</div>
	</div>
	<div className="container_calender2-calendar">
		<span className="day_calendar2">Mo</span>
		<span className="day_calendar2">Tu</span>
		<span className="day_calendar2">We</span>
		<span className="day_calendar2">Th</span>
		<span className="day_calendar2">Fr</span>
		<span className="day_calendar2">Sa</span>
		<span className="day_calendar2">Su</span>
		<button className="date_calendar2 faded_calendar2">30</button>
		<button className="date_calendar2">1</button>
		<button className="date_calendar2">2</button>
		<button className="date_calendar2">3</button>
		<button className="date_calendar2">4</button>
		<button className="date_calendar2">5</button>
		<button className="date_calendar2">6</button>
		<button className="date_calendar2">7</button>
		<button className="date_calendar2">8</button>
		<button className="date_calendar2 current_day_calendar2">9</button>
		<button className="date_calendar2">10</button>
		<button className="date_calendar2">11</button>
		<button className="date_calendar2">12</button>
		<button className="date_calendar2">13</button>
		<button className="date_calendar2">14</button>
		<button className="date_calendar2">15</button>
		<button className="date_calendar2">16</button>
		<button className="date_calendar2">17</button>
		<button className="date_calendar2">18</button>
		<button className="date_calendar2">19</button>
		<button className="date_calendar2">20</button>
		<button className="date_calendar2">21</button>
		<button className="date_calendar2">22</button>
		<button className="date_calendar2">23</button>
		<button className="date_calendar2">24</button>
		<button className="date_calendar2">25</button>
		<button className="date_calendar2">26</button>
		<button className="date_calendar2">27</button>
		<button className="date_calendar2">28</button>
		<button className="date_calendar2">29</button>
		<button className="date_calendar2">30</button>
		<button className="date_calendar2">31</button>
		<button className="date_calendar2 faded_calendar2">1</button>
		<button className="date_calendar2 faded_calendar2">2</button>
		<button className="date_calendar2 faded_calendar2">3</button>
	</div>
</div>
    )}
    export default Calendar;