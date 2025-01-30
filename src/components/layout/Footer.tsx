import { Facebook, Instagram, Linkedin, Mail, TwitterIcon, Youtube } from "lucide-react"
import { PhoneCall } from "lucide-react"

function Footer() {
  return (
    <div className="">
      <div className="w-full h-1 bg-red-600"></div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full min-h-[16rem] py-8 sm:py-4 bg-gradient-to-t from-blue-600 via-white to-white">
        <div className="flex flex-col gap-2 p-2 mb-6 sm:mb-0">
          <button className="text-2xl sm:text-3xl font-semibold bg-gradient-to-tr from-blue-600 to-red-400 bg-clip-text text-transparent">
            Contact Us
          </button>
          <p className="flex gap-1 text-sm sm:text-base">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            minur@srmist.edu.in
          </p>
          <p className="flex gap-1 text-sm sm:text-base">
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            +91 44 27417000
          </p>
          <p className="flex gap-1 text-sm sm:text-base">
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            +91 44 27417777
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center mb-6 sm:mb-0">
          <img
            className="w-64 h-16 sm:w-72 sm:h-12 lg:w-96 lg:h-24"
            src="/images/eyantralogo.png"
            alt="e-yantra logo"
          />
          <div className="w-32 h-1 sm:w-1 sm:h-12 lg:h-24 bg-gray-500 rounded-sm" />
          <img className="w-56 h-14 sm:w-72 sm:h-12 lg:w-80 lg:h-24" src="/images/srmlogo.png" alt="srm logo" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-tr from-orange-700 to-yellow-300 bg-clip-text text-transparent">
            Join us{" "}
          </h2>
          <div className="flex gap-4 ">
            <a href="https://www.facebook.com/SRMUniversityOfficial">
              <Facebook className="h-6 w-6 sm:h-6 sm:w-6 lg:h-8 lg:w-8 hover:text-blue-500" />
            </a>
            <a href="https://x.com/SRM_Univ?mx=2">
              <TwitterIcon className="h-6 w-6 sm:h-6 sm:w-6 lg:h-8 lg:w-8 hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/SRMUniversityOfficial/">
              <Instagram className="h-6 w-6 sm:h-6 sm:w-6 lg:h-8 lg:w-8 hover:text-orange-400" />
            </a>
            <a href="https://www.linkedin.com/company/srm-ist-chennai">
              <Linkedin className="h-6 w-6 sm:h-6 sm:w-6 lg:h-8 lg:w-8 hover:text-blue-400" />
            </a>
            <a href="https://www.youtube.com/user/SRMeducation">
              <Youtube className="h-6 w-6 sm:h-6 sm:w-6 lg:h-8 lg:w-8 hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

