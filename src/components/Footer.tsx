import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating exceptional web experiences. 
              Always excited to work on new projects and collaborate with amazing teams.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/prince-yadav-Portfolio/" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="mailto:pb6620113@email.com"
                 className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</span></Link></li>
              <li><Link href="/skills"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Skills</span></Link></li>
              <li><Link href="/projects"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</span></Link></li>
              <li><Link href="/blog"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</span></Link></li>
              <li><Link href="/contact"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">API Development</li>
              <li className="text-gray-400">Consulting</li>
              <li className="text-gray-400">Code Review</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Alex Johnson. All rights reserved. Built with React and Node.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
