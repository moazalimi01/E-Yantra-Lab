import ImageCorousal1 from "./ImageCorousal1"
import ImageCorousal2 from "./ImageCorousal2"
import { ArrowRight, Sparkles } from 'lucide-react';

function HeroSection() {
  return (
    <div className="w-full h-[50%] flex relative pb-10">

        <div className="w-[40%] h-full overflow-hidden flex ml-8">
            <div className="w-[50%] max-h-screen">
                <ImageCorousal1/>
            </div>
            <div className="w-[50%] max-h-screen">
                <ImageCorousal2/>
            </div>
        </div>
        
        <div className="relative min-h-screen w-[60%] flex items-center  overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-200 backdrop-blur-md border border-blue-400 text-black mb-6">
                        <Sparkles className="h-4 w-4 mr-2" />
                        <span className="text-sm">E Yantra SRM</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                        Empowering Innovations in {" "}
                        <span className="w-96 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-200">
                        Robotics
                        </span>
                        <span> and </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-100">
                        Automation 
                        </span>
                    </h1>
                    <p className="text-xl text-blue-300 mb-8 max-w-2xl">
                        Pushing the boundaries of technology through cutting-edge research, 
                        innovative solutions, and collaborative learning.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                        href="/projects"
                        className="group px-6 py-3 bg-blue-300 backdrop-blur-md border border-white/20 text-black rounded-lg font-medium hover:bg-gray-500/20 transition-all duration-300 flex items-center gap-2"
                        >
                        Explore Projects
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                        href="/contact"
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-opacity-90 transition-colors glow-effect"
                        >
                        Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute top-[720px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[178deg] w-[101%] h-[50px] bg-gradient-to-l from-red-600 to-blue-500 shadow-custom z-0"></div>
    </div>
  )
}

export default HeroSection