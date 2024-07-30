import MeetupList from '../components/meetups/MeetupList';
import clientPromise from '../lib/mongodb';

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
    try {
        const client = await clientPromise;
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find().toArray();
        console.log('meetups', meetups);
        return {
            props: {
                meetups: meetups.map((meetup) => ({
                    id: meetup._id.toString(),
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    description: meetup.description,
                }))
            },
            revalidate: 1,
        };
    } catch (error) {
        console.error('Failed to fetch meetups:', error);
        return {
            props: {
                meetups: [],
            },
            revalidate: 1,
        };
    }
}

export default HomePage;