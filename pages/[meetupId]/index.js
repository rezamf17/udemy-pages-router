import MeetupDetails from "../../components/meetups/MeetupDetail";

function MeetupDetail() {
	return <MeetupDetails
		image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/450px-New_york_times_square-terabass.jpg"
		title="New York Times"
		address="street 5th"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo. Quisquam, quod."
	/>
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{ params: { meetupId: 'm1' } },
			{ params: { meetupId: 'm2' } },
			{ params: { meetupId: 'm3' } },
		],
		fallback: false
	}
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;
	return {
		props: {
			meetupData: {
				id : meetupId,
				image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/450px-New_york_times_square-terabass.jpg",
				title:"New York Times",
				address:"street 5th",
				description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo. Quisquam, quod."
			}
		}
	}
}

export default MeetupDetail;