import { Facebook, Instagram, Linkedin, Mail, TwitterIcon, Youtube } from "lucide-react"
import { PhoneCall } from "lucide-react"
function Footer() {
  return (
    <div className="">
        <div className="w-full h-1 bg-red-600"></div>
        <div className="flex justify-evenly items-center w-full h-64 bg-gradient-to-t from-blue-600 via-white to-white">
            <div className="flex flex-col gap-2 p-2">
                <button className="text-3xl font-semibold bg-gradient-to-tr from-blue-600 to-red-400 bg-clip-text text-transparent">Contact Us</button>
                <p className="flex gap-1"><Mail/>minur@srmist.edu.in</p>
                <p className="flex gap-1"><PhoneCall/>+91 44 27417000</p>
                <p className="flex gap-1"><PhoneCall/>+91 44 27417777</p>
            </div>
            <div className="flex gap-10">
                <img className="w-96 h-24" src="/images/eyantralogo.png" alt="e-yantra logo"/>
                <div className="w-1 rounded-sm h-24 bg-gray-500"/>
                <img className="w-80 h-24" src="/images/srmlogo.png" alt="srm logo"/>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-4xl font-semibold bg-gradient-to-tr from-orange-700 to-yellow-300 bg-clip-text text-transparent">Join us </h2>
                <div className="flex gap-4 ">
                    <a href="https://www.facebook.com/SRMUniversityOfficial"><Facebook className="h-8 w-8 hover:text-blue-500"/></a>
                    <a href="https://x.com/SRM_Univ?mx=2"><TwitterIcon className="h-8 w-8 hover:text-blue-500"/></a>
                    <a href="https://www.instagram.com/SRMUniversityOfficial/"><Instagram className="h-8 w-8 hover:text-orange-400"/></a>
                    <a href="https://www.linkedin.com/company/srm-ist-chennai"><Linkedin className="h-8 w-8 hover:text-blue-400"/></a>
                    <a href="https://www.youtube.com/user/SRMeducation"><Youtube className="h-8 w-8 hover:text-red-600"/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer