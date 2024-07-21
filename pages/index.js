import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETSUPS = [
    {
        id: 1,
        title: 'React Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/450px-New_york_times_square-terabass.jpg',
        address: '1234, New York, USA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.',
        date: '2020-01-01',
        time: '10:00 AM',
        creator: 'John'
    },
    {
        id: 2,
        title: 'React Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/450px-New_york_times_square-terabass.jpg',
        address: '1234, New York, USA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.',
        date: '2020-01-01',
        time: '10:00 AM',
        creator: 'John'
    }
]

function HomePage(props){
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETSUPS
        }
    }
}

export default HomePage;