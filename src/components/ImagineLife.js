import React from 'react';
import image1 from '../images/Ellipse 21.png';
import image2 from '../images/Ellipse 27.png';
import image3 from '../images/Ellipse 28.png';

function ImagineLife() {
  const data = [
    {
      src: image1,
      heading: 'We all Receive the Best',
      body: 'Students receive more and the best of us. Family and friends receive more and the best of us. The desk is clear and the is work finished for the day. It feels happy and calm to be at school. The comparison to others does not exist in our world.',
    },
    {
      src: image2,
      heading: 'Together we can make this life a reality for you',
      body: "It's possible and I will teach you how! \n\nHappiness and health for a teacher have 8 areas of mastery. Health, personal development, fun, romance, career, family and friends, money, and spirituality.",
    },
    {
      src: image3,
      heading: 'The 5 Stages of Teacher Happiness',
      body: 'Stage 1 - Your Future - What if...? \nStage 2 - Your Present - Needs, dreams, and goals (baseline). \nStage 3 - Your Personal Teacher Health and Happiness Plan. \nStage 4 - Your Treasure Chest - a fully equipped health, relationship, and happiness toolbox. \nStage 5 - Your Healthy and Happy Life.',
    },
  ];
  return (
    <div id='ImagineLife'>
      <h1>Imagine a Life Where</h1>
      <div className='repeater-grid'>
        {data.map((item, index) => (
            index % 2===0
            ? (
          <div key={index}>
            <img src={item.src} />
            <div>
              <h2>{item.heading}</h2>
              <p>{item.body}</p>
            </div>
          </div>
        )
        :(
            <div key={index}>
              <div>
                <h2>{item.heading}</h2>
                <p>{item.body}</p>
              </div>
              <img src={item.src} />
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default ImagineLife;
