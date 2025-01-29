// import React from 'react';
// import { Users, Target, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. R. I. Minu',
    role: 'Professor',
    email: 'minur@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Minu.jpg',
    interests: 'Theory of Computation, Compiler Design, Computational NeuroScience, Nero and Fuzzy neural network ,Computer vision,Deep Learning, Immersive Technologies',
  },
  {
    name: 'Dr. J. Kalaivani',
    role: 'Associate Professor',
    email: 'kalaivaj@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Kalaivani.jpg',
    interests: 'Computer Networks, Cloud Computing, IoT, Machine learning',
  },
  {
    name: 'Dr. Bakkialakshmi V S',
    role: 'Assistant Professor',
    email: 'bakkialv@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Bakkialakshmi.jpg',
    interests: 'Affective Computing, Machine Learning, Deep Learning, ICT',
  },
  {
    name: 'Dr. M. Suganiya',
    role: 'Assistant Professor',
    email: 'suganiym@srmist.edu',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/05/suganiya.jpg',
    interests: 'Artificial Intelligence, Machine Learning, Signal Processing, Image Processing',
  },
  {
    name: 'Dr. Angayarkanni',
    role: 'Assistant Professor',
    email: 'angayarv@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Angayarkanni.jpg',
    interests: 'IoT, Embedded Systems',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-cover bg-center" style={{backgroundImage: "url('https://www.e-yantra.org/images/products/bg.jpg')"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-gray-900 mb-4">Our Mentors</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds behind eYantra's groundbreaking research and innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-96 h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-medium">{member.interests}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}