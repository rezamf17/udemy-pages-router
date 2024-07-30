import clientPromise from '../../lib/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await clientPromise;
      const db = client.db();
      const meetups = db.collection('meetups');
      const result = await meetups.insertOne(data);
      console.log(result);

      res.status(201).json({
        status: 'SUCCESS',
        message: 'Meetup created successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'ERROR',
        message: 'Failed to create meetup',
      });
    }
  } else {
    res.status(405).json({
      status: 'ERROR',
      message: 'Method not allowed',
    });
  }
}

export default handler;
