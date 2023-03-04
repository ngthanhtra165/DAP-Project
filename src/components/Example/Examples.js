import React from 'react';
import EssayExample from './EssayExample';

const EssayExamples = () => {
  const essays = [
    {
      score: 8,
      title: 'Some people think it is more important to spend money on roads and motorways than on public transport systems',
      content: 'It is widely believed that it is not justified to spend money on developing technologies for space exploration, and there are other helpful things the government can do with this investment. Personally, I completely agree with this view for a variety of reasons. warming is one of the biggest environmental challenges we face today. It is caused by human activities, such as burning fossil fuels and deforestation, which release greenhouse gases into the atmosphere. These gases trap heat from the sun and cause the Earth’s temperature to rise, leading to a range of negative consequences, such as sea level rise, more frequent and severe weather events, and loss of biodiversity.'
    },
    {
      score: 9,
      title: 'The Advantages and Disadvantages of Social Media',
      content: 'Social media has become an integral part of our daily lives. It allows us to connect with people from all over the world and share our thoughts, feelings, and experiences. However, it also has its drawbacks. One of the biggest disadvantages of social media is that it can be addictive and can lead to a range of mental health problems, such as anxiety and depression. Additionally, it can be a breeding ground for misinformation and can be used to spread hate speech and other harmful content.'
    },
    {
      score : 8,
      title : 'It is sometimes suggested that primary school children should learn how to grow vegetables and keep animals. Do you think that the advantages of this outweigh the disadvantages?',
      content: `Many schools worldwide have proposed to include a new, mandatory course in which students learn how to grow vegetables and raise animals. Although there are some drawbacks that schools should consider, I believe this idea is generally beneficial.

      There are many direct and indirect advantages to learning about these topics. Firstly, children can develop an appreciation for farmers after this course. Many children, especially ones living in cities, never know where and how their vegetables and meat are produced. After knowing the amount of work and care put into making their food, they can appreciate and support local produce more. Secondly, this course can prepare them for growing vegetables at home. This skill will become important should they find themselves in a time when supplies are scarce, like during the COVID lockdown.
      
      However, that is not to say that this proposal is without disadvantages. Firstly, there is a chance that few students will ever incorporate this knowledge into their daily lives. With students living in urban areas, most will never raise livestock, while many living in apartments cannot have pets. Learning about raising livestock in detail will not be helpful for them. Secondly, this course can add more stress to students. High school kids are already under pressure to perform well in their exams, thus schools should not burden them more. Students’ objection to the home economics subject is a sufficient example to illustrate this point.  
      
      In conclusion, I believe the advantages of learning about how to grow vegetables and how livestock and other animals are raised far outweigh the disadvantages.`
    }
  ];

  return (
    <div>
      {essays.map((essay, index) => (
        <EssayExample key={index} score={essay.score} title={essay.title} content={essay.content} />
      ))}
    </div>
  );
}

export default EssayExamples;
