import React from 'react';
import image1 from '../images/Mask Group 17.png';
import image2 from '../images/Mask Group 18.png';
import image3 from '../images/Mask Group 19.png';

function BgService() {
  const data = [
    {
      src: image1,
      heading: 'The Blog',
      body: "Read about the most recent and effective ways to improve one's mindset, embrace time efficiency to be more productive, communication skills, healthy relationships, and wellness of mind and body.",
      button: 'Read Newest Post',
    },
    {
      src: image2,
      heading: 'Join the Happy Teacher List',
      body: "Get a weekly email with practical tips on health, happiness, simplifying one's teacher life, challenges for personal development, and downloadable resources.",
      button: 'Learn More',
    },
    {
      src: image3,
      heading: 'Free Discovery Call',
      body: 'Talk with Lynn and get your questions answered, receive more personal attention, and mind-blowing information.',
      button: 'Book Now',
    },
  ];
  return (
    <div id='bgService'>
      <h1>Let's start at the Beginning</h1>
      <div className='repeater-grid'>
        {data.map((item) => (
          <div>
            <img src={item.src} />
            <h2>{item.heading}</h2>
            <p>{item.body}</p>
            <button>{item.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BgService;
