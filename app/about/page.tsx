"use client"

import { useState } from "react";
import Image from "next/image";

// Dummy team data - replace with API integration later
const teamData = [
  {
    id: 1,
    name: "Arya Utkarsh",
    title: "Chief Designing Officer (CDO)",
    description: "Arya leads our creative vision, ensuring every design reflects innovation, functionality, and style. With a keen eye for detail and user experience, Arya transforms ideas into visually compelling and practical solutions, setting the tone for our brand's identity and design strategy across all platforms and projects.",
    image: "/about/1.png",
    color: "bg-red-400"
  },
  {
    id: 2,
    name: "Mike Johnson",
    title: "Lead Developer",
    description: "Mike is our technical lead who brings complex ideas to life through clean, efficient code. With expertise in modern web technologies and a passion for performance optimization, Mike ensures our digital solutions are not only functional but also scalable and maintainable.",
    image: "/about/3.png",
    color: "bg-pink-400"
  },
  {
    id: 3,
    name: "Alex Rodriguez",
    title: "Product Manager",
    description: "Alex bridges the gap between technical possibilities and business objectives. With a strategic mindset and deep understanding of user needs, Alex guides product development from concept to launch, ensuring every feature adds meaningful value to our users' experience.",
    image: "/about/3.png",
    color: "bg-yellow-300"
  },
  {
    id: 4,
    name: "David Kim",
    title: "UI/UX Designer",
    description: "David crafts intuitive and engaging user experiences that make complex interactions feel effortless. With a user-centered approach and attention to accessibility, David creates designs that not only look beautiful but also serve users' needs effectively.",
    image: "/about/4.png",
    color: "bg-orange-400"
  },
  {
    id: 5,
    name: "Maria Garcia",
    title: "Marketing Specialist",
    description: "Maria develops and executes marketing strategies that connect our brand with the right audience. With expertise in digital marketing and brand storytelling, Maria ensures our message resonates across all channels and drives meaningful engagement.",
    image: "/about/5.png",
    color: "bg-purple-300"
  },
  {
    id: 6,
    name: "Michael Brown",
    title: "Full Stack Developer",
    description: "Michael works across the entire technology stack, from database design to user interface implementation. With versatile skills and problem-solving expertise, Michael contributes to every layer of our technical infrastructure.",
    image: "/about/6.png",
    color: "bg-cyan-300"
  },
  {
    id: 7,
    name: "Patricia Wilson",
    title: "Quality Assurance Lead",
    description: "Patricia ensures every product we release meets the highest standards of quality and reliability. With meticulous attention to detail and comprehensive testing strategies, Patricia helps us deliver exceptional user experiences consistently.",
    image: "/about/7.png",
    color: "bg-red-300"
  },
  {
    id: 8,
    name: "Sarah Anderson",
    title: "Business Analyst",
    description: "Sarah analyzes market trends and user behavior to inform strategic decisions. With strong analytical skills and business acumen, Sarah helps us stay ahead of industry changes and continuously improve our offerings.",
    image: "/about/8.png",
    color: "bg-green-400"
  },
  {
    id: 9,
    name: "Paul Smith",
    title: "DevOps Engineer",
    description: "Paul manages our infrastructure and deployment processes, ensuring reliable and scalable systems. With expertise in cloud technologies and automation, Paul keeps our applications running smoothly and efficiently.",
    image: "/about/8.png", // Reusing image for demo
    color: "bg-blue-400"
  }
];

const getInitials = (name: string) => {
  const names = name.split(' ');
  return names.length >= 2 ? `${names[0][0]}${names[1][0]}` : names[0][0];
};

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamData[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto w-full">
        {!selectedMember ? (
          // Default view - Our Team
          <>
            <h1 className="text-4xl font-bold text-black ">Our Team</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="max-w-md">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We're a dedicated team of creative minds, problem-solvers, and innovators working 
                  together to deliver exceptional results. With diverse skills and shared passion, we 
                  approach challenges with fresh perspectives and effective solutions. 
                  Collaboration, trust, and respect guide our work, ensuring we exceed expectations. 
                  More than colleagues, we're a family united by the mission to create meaningful impact 
                  for our clients and community.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {teamData.map((member, index) => (
                  <div
                    key={member.id}
                    className={`${member.color} rounded-4xl p-4 aspect-square cursor-pointer hover:scale-105 transition-all duration-300 max-h-28 min-w-32  flex items-center justify-center`}
                    onClick={() => setSelectedMember(member)}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Individual member view
          <div>
 <button
                onClick={() => setSelectedMember(null)}
                className="mb-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                ← Back to Our Team
              </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
                
            <div className="max-w-md transform transition-all duration-500 animate-in slide-in-from-left" key={selectedMember.id}>
              <h1 className="text-3xl font-bold text-black mb-1">{selectedMember.name}</h1>
              <h2 className="text-md text-gray-600 mb-2">{selectedMember.title}</h2>
              <div className=" border-gray-300 border-2 mb-2 w-[200px]"></div>
              <p className="text-md text-gray-700 leading-relaxed">
                {selectedMember.description}
              </p>
            </div>
            </div>
            <div className="grid grid-cols-3 gap-3 ">
              {teamData.map((member, index) => (
                <div
                  key={member.id}
                  className={`${member.color} ${member.id === selectedMember.id ? 'opacity-100' : 'opacity-80'} p-4 aspect-square cursor-pointer hover:scale-105 hover:opacity-100 transition-all duration-300 max-h-28 min-w-32 rounded-4xl flex items-center justify-center`}
                  onClick={() => setSelectedMember(member)}
                >
                  {member.id === selectedMember.id ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-gray-600">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
