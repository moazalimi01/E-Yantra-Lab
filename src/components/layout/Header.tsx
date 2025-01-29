import { Menu, X, Bot } from 'lucide-react';
import { useState } from 'react'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [ 
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Resources', href: '/resources' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900/30 backdrop-blur-lg">
      <nav className="glass-effect ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 pl-10">
            <div className="flex items-center gap-5">
              {/* <a href="#" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-lg blur group-hover:blur-md transition-all"></div>
                  <Bot className="h-8 w-8 text-white relative" />
                </div>
                <span className="text-xl font-bold text-white">eYantra</span>
              </a> */}
              <div className='w-14 h-14'>
                <a href="https://e-yantra-one.vercel.app"><img src="/images/eyantralogo1.png" alt="eyantra logo" /></a>
              </div>
              <div className='w-1 h-12 bg-white'></div>
              <div className=''>
                <a href="https://www.srmist.edu.in/"><img className='w-14 h-14' src="/images/srmlogo1.png" alt="srm logo" /></a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}