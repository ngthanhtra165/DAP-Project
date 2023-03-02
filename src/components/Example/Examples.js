
import React, { Component , useState } from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './Example.css';
import Header from "./Components/Header/Header"

import EssayExample from './Example';

const EssayExamples = () => {
  const essays = [
    {
      title: 'Global Warming',
      content: 'Global warming is one of the biggest environmental challenges we face today. It is caused by human activities, such as burning fossil fuels and deforestation, which release greenhouse gases into the atmosphere. These gases trap heat from the sun and cause the Earth’s temperature to rise, leading to a range of negative consequences, such as sea level rise, more frequent and severe weather events, and loss of biodiversity.'
    },
    {
      title: 'The Advantages and Disadvantages of Social Media',
      content: 'Social media has become an integral part of our daily lives. It allows us to connect with people from all over the world and share our thoughts, feelings, and experiences. However, it also has its drawbacks. One of the biggest disadvantages of social media is that it can be addictive and can lead to a range of mental health problems, such as anxiety and depression. Additionally, it can be a breeding ground for misinformation and can be used to spread hate speech and other harmful content.'
    }
  ];

  return (
    <div>
      {essays.map((essay, index) => (
        <EssayExample key={index} title={essay.title} content={essay.content} />
      ))}
    </div>
  );
}

export default EssayExamples;
