import type React from "react"
import { Users, Award, Code, Briefcase } from "lucide-react"

// Categorize team members by role
const labcoordinator = {
  name: "Dr. R. I. Minu",
  role: "Professor & Lab Head",
  email: "minur@srmist.edu.in",
  image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Minu.jpg",
  interests: "AI & Robotics, Computer Vision",
}

const labincharge = [
    {
      name: "Dr. Angayarkanni V",
      role: "Assistant Professor",
      email: "angayarv@srmist.edu.in",
      image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Angayarkanni.jpg",
      interests: "IoT, Embedded Systems",
  },
    {
      name: "Dr. J. Kalaivani",
      role: "Associate Professor",
      email: "kalaivaj@srmist.edu.in",
      image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Kalaivani.jpg",
      interests: "Machine Learning, Automation",
    }
]

// Programmers (those with AI/ML/programming related interests)
const programmers = [
  
  {
    name: "Ms. Parkkavi.V",
    role: "Assistant Professor",
    email: "Parkkavv@srmist.edu.in",
    image: "/images/Mr.PakkaviV.jpg",
    interests: "",
  },
  
]

// Other lab members
const labMembers = [
  {
    name: "Dr. Bakkialakshmi V S",
    role: "Assistant Professor",
    email: "bakkialv@srmist.edu.in",
    image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Bakkialakshmi.jpg",
    interests: "Affective Computing, Machine Learning, Deep Learning",
  },
  {
    name: "Dr. Ashokkumar C",
    role: "Assistant Professor",
    email: "ashokkuc@srmist.edu.in",
    image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Ashok-Kumar.jpg",
    interests: "Cloud Computing, Machine Learning and Distributed Computing",
  },
  {
    name: "Dr. Rama P",
    role: "Assistant Professor",
    email: "ramap@srmist.edu.in",
    image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Rama-P.jpg",
    interests:
      "Machine Learning, DeepLearning, Data Science, Artificial Intelligence, Wireless Sensor Networks, Computer Networks, Cloud Computing, Internet of Things, Block Chaining.",
  },
  {
    name: "Dr. M. Suganiya",
    role: "Assistant Professor",
    email: "suganiym@srmist.edu",
    image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/05/suganiya.jpg",
    interests: "IoT, Embedded Systems",
  },
  
  
]

// Member card component with hover effects
const MemberCard = ({ member, className = "" }: { member: any; className?: string }) => (
  <div
    className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}
  >
    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
      <img
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="font-medium text-sm">{member.interests}</p>
        </div>
      </div>
    </div>
    <div className="p-4 text-center">
      <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
      <p className="text-primary font-medium">{member.role}</p>
      <p className="text-gray-600 text-sm">{member.email}</p>
    </div>
  </div>
)

// Featured member card with larger display
const FeaturedMemberCard = ({ member, icon, title }: { member: any; icon: React.ReactNode; title: string }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl text-center">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100/50"></div>
    <div className="p-6 md:p-8">
      <div className="mb-4 flex items-center gap-2">
        {icon}
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img src={member.image || "/placeholder.svg"} alt={member.name} className="h-full w-full object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
          <p className="text-lg font-semibold text-blue-700">{member.role}</p>
          <p className="text-gray-600">{member.email}</p>
          <div className="mt-4 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
            <p className="text-gray-700">
              <span className="font-semibold">Research Interests:</span> {member.interests}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.e-yantra.org/images/products/bg.jpg')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-gray-900 mb-4">Our Mentors</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds behind eYantra's groundbreaking research and innovations.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Lab Head - Takes 2 columns on medium screens and above */}
          <div className="md:col-span-3 ml-40 mr-40">
            <FeaturedMemberCard member={labcoordinator} icon={<Award className="h-6 w-6 text-blue-700" />} title="Lab Coordinator" />
          </div>

          {/* Associate Head */}
          <div className="md:col-span-4 md:gap-5 flex">
            {labincharge.map((incharges) => (
              <FeaturedMemberCard
              member={incharges}
              icon={<Briefcase className="h-6 w-6 text-blue-700" />}
              title="Lab Incharge"
              />
            ))}
          </div>
        </div>

        {/* Programmers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Code className="h-6 w-6 text-blue-700" />
            <h3 className="text-2xl font-bold text-gray-900">Programmer</h3>
          </div>
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {programmers.map((member, index) => (
              <MemberCard key={`programmer-${index}`} member={member} className="border-t-4 border-blue-500" />
            ))}
          </div>
        </div>

        {/* Lab Members Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-6 w-6 text-blue-700" />
            <h3 className="text-2xl font-bold text-gray-900">Lab Members</h3>
          </div>
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {labMembers.map((member, index) => (
              <MemberCard key={`member-${index}`} member={member} className="border-t-4 border-green-500" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

