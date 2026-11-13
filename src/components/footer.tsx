import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-16 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/wincheaglesvolleyball/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-amber-500 transition-colors transform hover:scale-105"
          >
            <SiInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/WinchesterVball/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-amber-500 transition-colors transform hover:scale-105"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>

        {/* Center: Copyright & Developer Credit */}
        <div className="text-xs text-slate-500 space-y-1">
          <p>© 2025 Winchester Eagles Volleyball Club. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.riccardobarone.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-semibold hover:text-amber-500 transition-colors underline"
            >
              Riccardo Barone
            </a>
          </p>
        </div>

        {/* Right: Contact & Important Docs */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-medium">
          <a
            href="mailto:winchestereaglessocial@gmail.com?subject=Contact%20from%20Website&body=Hi%20Eagles%2C%0A"
            className="text-blue-900 hover:text-amber-500 transition-colors"
          >
            winchestereaglessocial@gmail.com
          </a>
          <a
            href="/important-documents"
            className="text-blue-900 hover:text-amber-500 transition-colors"
          >
            Important Documents
          </a>
        </div>
      </div>
    </footer>
  );
}
