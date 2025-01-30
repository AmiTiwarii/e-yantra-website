import { useState, useEffect } from "react"

const aboutus = [
  {
    text: "About Us",
    description:
      "E-yantra, spearheaded by IIT Bombay, strives to cultivate a new wave of embedded systems and robotic engineers equipped with a practical mindset to address real-world challenges with practical solutions. This initiative receives sponsorship from the Ministry of Human Resource Development (MHRD) as part of the National Mission on Education through Information and Communication Technology (ICT) program.",
    alttext: "AI & Robotics, Computer Vision",
    image: "/images/aboutusimg.jpeg",
  },
  {
    text: "Objective",
    description:
      "To foster awareness about robotics among students and equip them with the essential skill sets needed for a competitive industry in this field.To assist and mentor students in diverse areas concerning robotics and embedded systems, focusing particularly on computer science and engineering To impart practical understanding of ATmega 2560 microcontrollers to students.",
    alttext: "Machine Learning, Automation",
    image: "/images/objectiveimg.jpeg",
  },
  {
    text: "Mission",
    description:
      "To foster awareness about Internet of Things among students and equip them with the essential skill sets needed for a competitive industry in this field To assist and mentor students in diverse areas concerning robotics and embedded systems especially for CSE To build real-world problem-solving abilities for creating a sustainable ecosystem with students and faculty",
    alttext: "IoT, Embedded Systems",
    image: "/images/missionimg.jpeg",
  },
]

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutus.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + aboutus.length) % aboutus.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-200 pt-20 md:pt-8">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {aboutus.map(({ text, image, alttext, description }) => (
          <div
            key={text}
            className="relative w-full flex-shrink-0 h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-0"
          >
            <img
              className="w-full md:w-auto h-64 md:h-screen object-cover opacity-80"
              src={image || "/placeholder.svg"}
              alt={alttext}
            />
            <div className="w-full md:absolute md:inset-0 md:top-[30rem] md:left-[15rem] md:w-[55rem] bg-black/50 md:bg-transparent rounded-xl p-5 pt-0 backdrop-blur-lg flex flex-col justify-center mt-4 md:mt-0">
              <span className="text-red-500 md:text-transparent md:bg-red-700 md:bg-clip-text text-2xl md:text-3xl font-bold">
                e-yantra
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white md:text-blue-600 mt-2">{text}</h3>
              <p className="text-white md:text-white text-base md:text-xl mt-2">{description}</p>
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
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"} cursor-pointer`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </section>
  )
}

