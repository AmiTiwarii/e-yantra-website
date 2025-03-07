import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Clock } from "lucide-react"
import * as THREE from "three"
import RINGS from "vanta/dist/vanta.rings.min"
import { Link } from "react-router-dom"

const events = [
  {
    title: "Twin Tech",
    date: "May 3, 2024",
    location: "University Building",
    time: "09:00 AM - 4:00 PM",
    description: "Twin Tech Expo - Project Demonstration and Presentation.",
    status: "completed",
  },
  {
    title: "Special Lecture by Dr. Claire A Nelson",
    date: "February 24, 2024",
    location: "Imac Lab, Tech Park 14th floor",
    time: "10:00 AM - 12:00 PM",
    description: "Engendering smart futures for a flourishing world: Engineering sustainability.",
    status: "completed",
  },
  {
    title: "Eyantra Hackathon'24",
    date: "February 10, 2024",
    location: "Innovation Hub",
    time: "9:00 AM - 6:00 PM",
    description: "24-hour hackathon focused on solving real-world robotics challenges.",
    status: "completed",
  },
  {
    title: "eYRTC_24-Teachers competition",
    date: "February 10, 2024",
    location: "Innovation Hub",
    time: "9:00 AM - 6:00 PM",
    description: "24-hour hackathon focused on solving real-world robotics challenges.",
    status: "completed",
  },
  {
    title: "Workshop on Digital Twin'24",
    date: "October 23, 2024",
    location: "Tech Park 401/402",
    time: "9:00 AM - 5:00 PM",
    description: "Hands on experience on Digital Twin.",
    status: "completed",
  },
  {
    title: "Workshop on IIOT'24",
    date: "August 07, 2024",
    location: "Tech Park 401/402",
    time: "9:00 AM - 3:00 PM",
    description: "Hands on experience on IIOT.",
    status: "completed",
  },
  {
    title: "Eyantra Symposium'24",
    date: "August 05 & 06, 2024",
    location: "IIT Bombay",
    time: "9:00 AM - 5:00 PM",
    description: "Eyantra Symposium at IIT Bombay for recognition of top A-rated colleges.",
    status: "completed",
  },
  {
    title: "Introduction to meta verse course'24",
    date: "June 04, 2024",
    location: "Imac Lab, Tech Park 14th floor",
    time: "9:00 AM - 5:00 PM",
    description: "Introduction to meta verse course 2024 edition.",
    status: "completed",
  },
]

// Define the type for the Vanta effect
type VantaEffect = {
  destroy: () => void
}

export default function Events() {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xe5e5e5,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section ref={vantaRef} id="events" className="relative py-10 sm:py-16 md:py-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Events & Workshops</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events and hands-on workshops to enhance your skills and network with industry experts.
          </p>
        </div>
        <Link to={`/gallery`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm ${
                  event.status === "upcoming" ? "border-2 border-blue-600" : "border-2 border-green-400"
                }`}
              >
                <div className="p-4 sm:p-6">
                  {event.status === "upcoming" ? (
                    <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 text-xs sm:text-sm rounded-full mb-2 sm:mb-4">
                      Upcoming
                    </span>
                  ) : (
                    <span className="inline-block px-2 sm:px-3 py-1 bg-orange-400 text-blue-600 text-xs sm:text-sm rounded-full mb-2 sm:mb-4">
                      Completed
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">{event.title}</h3>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">{event.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  )
}

