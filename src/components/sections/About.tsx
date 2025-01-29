import { useState, useEffect } from 'react';

const aboutus = [
  {
    text: 'About Us',
    description: "E-yantra, spearheaded by IIT Bombay, strives to cultivate a new wave of embedded systems and robotic engineers equipped with a practical mindset to address real-world challenges with practical solutions. This initiative receives sponsorship from the Ministry of Human Resource Development (MHRD) as part of the National Mission on Education through Information and Communication Technology (ICT) program.",
    alttext: 'AI & Robotics, Computer Vision',
    image: "/images/aboutusimg.jpeg",
  },
  {
    text: 'Objective',
    description: "To foster awareness about robotics among students and equip them with the essential skill sets needed for a competitive industry in this field.To assist and mentor students in diverse areas concerning robotics and embedded systems, focusing particularly on computer science and engineering To impart practical understanding of ATmega 2560 microcontrollers to students.",
    alttext: 'Machine Learning, Automation',
    image: '/images/objectiveimg.jpeg',
  },
  {
    text: 'Mission',
    description: "To foster awareness about Internet of Things among students and equip them with the essential skill sets needed for a competitive industry in this field To assist and mentor students in diverse areas concerning robotics and embedded systems especially for CSE To build real-world problem-solving abilities for creating a sustainable ecosystem with students and faculty",
    alttext: 'IoT, Embedded Systems',
    image: '/images/missionimg.jpeg',
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutus.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + aboutus.length) % aboutus.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-100 pt-8">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {aboutus.map(({ text, image, alttext ,description}) => (
          <div
            key={text}
            className="relative w-full flex-shrink-0 h-full flex flex-col items-center justify-center"
          >
            <img
              className=" w-auto h-screen mx-auto opacity-80"
              src={image}
              alt={alttext}
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[55rem] from-neutral-600 bg-transparent rounded-xl p-5 backdrop-blur-xl">
              <span className='text-transparent bg-red-700 bg-clip-text text-3xl'>e-yantra</span>
              <h3 className="text-2xl font-semibold text-blue-600">{text}</h3>
              <h4 className='text-xl text-white'>{description}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
        onClick={handleNext}
      >
        &gt;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {aboutus.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            } cursor-pointer`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
