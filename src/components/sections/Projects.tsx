const projects = [
  {
    title: 'Automated Attendance and Access Control System',
    category: 'Completed',
    image: '/images/Automated Attendance Completed.jpg',
    description: 'Dr.J.Kalaivani, Dr R I Minu',
    tags: ['Completed'],
  },
  {
    title: 'Light Automation System with Voice Assistant',
    category: 'Completed',
    image: '/images/Light Automation System Completed.png',
    description: 'Dr.V. Angayarkanni, Dr R I Minu',
    tags: ['Completed'],
  },
  {
    title: 'Phantom Optics - Virtual operator for remote terrestial vehicles',
    category: 'Completed',
    image: '/images/Twin Tech Phantom Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Ferror Finder Bot - Remote bot designed to collect metal objects',
    category: 'Completed',
    image: '/images/Twin Tech Ferror finding Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Automated Classroom - Futuristic High-tech classroom',
    category: 'Completed',
    image: '/images/Twin Tech Automated classroom Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Hydroblaze - Automated Fire Extinguiser system',
    category: 'Completed',
    image: '/images/Twin Tech Hydroblaze Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Router aligner - Train tracker switcher system',
    category: 'Completed',
    image: '/images/Twin Tech Route aligner Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Auto Parkuino - Automated Parking system',
    category: 'Completed',
    image: '/images/Twin Tech Auto parking Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Valkarie - Mars rover simulation',
    category: 'Completed',
    image: '/images/Twin Tech ValkariyeProject.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Smart garden -  Revolutionsing gardening',
    category: 'Completed',
    image: '/images/Twin Tech Smart Garden Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Fora - Real-time simulation of robot and environment',
    category: 'Completed',
    image: '/images/Twin Tech Fora Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },
  {
    title: 'Hriday - Compact and efficient heart simulator',
    category: 'Completed',
    image: '/images/Twin Tech Hriday Project.png',
    description: 'Twin Tech Expo',
    tags: ['Completed'],
  },


];

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import {motion} from 'framer-motion'

type VantaEffect = {
  destroy: () => void;
} | null;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [vantaEffect, setVantaEffect] = useState<VantaEffect>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const filters = ['All', 'Completed', 'Ongoing'];

  useEffect(() => {
    console.log('Trying to initialize Net effect');
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3f57ff,
          backgroundColor: 0xede7ed,
          points: 13.00,
          spacing: 13.00
        });
        console.log('Net effect initialized successfully');
        setVantaEffect(effect);
      } catch (error) {
        console.error('Failed to initialize Net effect:', error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      ref={vantaRef}
      id="projects" 
      className="relative py-20 min-h-screen bg-[#e8e2e2] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our innovative projects pushing the boundaries of robotics and automation.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8"> 
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeIn"
              }}
              className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-400 hover:-translate-y-5 transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain justify-center items-center flex mt-4 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}