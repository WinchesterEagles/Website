import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

export default function footer() {
  return (
    <div className="flex flex-col h-fit w-full text-center mt-4 xl:flex-row xl:justify-between xl:mx-auto xl:w-5/6 xl:text-2xl">
      <div className="flex flex-row justify-center mx-auto border-b-4 border-amber-500 w-1/4 xl:w-fit xl:mx-0 xl:border-0">
        <SiInstagram className=" w-6 h-6 text-blue-900 mr-1 mb-2 cursor-pointer hover:text-amber-500 transition-colors duration-200 transform hover:scale-115 xl:w-11 xl:h-11" />
        <FaFacebook className=" w-6 h-6  text-blue-900 ml-1 mb-2 cursor-pointer hover:text-amber-500 transition-colors duration-200 transform hover:scale-115 xl:w-11 xl:h-11" />
      </div>

      <p className="mt-2">
        © 2025 Winchester Eagles Volleyball Club. All rights reserved
      </p>

      {/* mailto protocol set up */}
      <a
        className=" mt-2 text-blue-900 cursor-pointer hover:text-amber-500 transition-colors duration-200 transform hover:scale-105"
        href="mailto:winchestereaglessocial@gmail.com?subject=Contact%20from%20Website&body=Hi%20Eagles%2C%0A"
      >
        winchestereaglessocial@gmail.com
      </a>

      <a
        className="mt-2  text-blue-900 cursor-pointer hover:text-amber-500 transition-colors duration-200 transform hover:scale-105"
        href="/important-documents"
      >
        Important Documents
      </a>
    </div>
  );
}
