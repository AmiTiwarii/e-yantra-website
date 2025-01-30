import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Clock } from "lucide-react"
import * as THREE from "three"
import RINGS from "vanta/dist/vanta.rings.min"

const events = [
  {
    title: "Robotics Workshop 2024",
    date: "March 15, 2024",
    location: "Main Lab, Building A",
    time: "10:00 AM - 4:00 PM",
    description: "Hands-on workshop covering fundamentals of robotics and automation.",
    status: "upcoming",
  },
  {
    title: "AI in Robotics Conference",
    date: "April 5, 2024",
    location: "Virtual Event",
    time: "9:00 AM - 5:00 PM",
    description: "International conference on the latest developments in AI and robotics.",
    status: "upcoming",
  },
  {
    title: "Innovation Hackathon",
    date: "February 10, 2024",
    location: "Innovation Hub",
    time: "9:00 AM - 6:00 PM",
    description: "24-hour hackathon focused on solving real-world robotics challenges.",
    status: "past",
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
                  <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 text-xs sm:text-sm rounded-full mb-2 sm:mb-4">
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
                {event.status === "upcoming" && (
                  <button className="mt-4 sm:mt-6 w-full px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

