import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function footer() {
  return (
    <footer className=" bg-[#141414] ">
      <div className="max-w-[1320px] mx-auto  text-center ">
        <div
          className="
             lg:grid grid-cols-3 text-[white] "
        >
          <div className=" mt-7 pt-5 lg:pt-0 ">
            <h1> Naresh Portfolio</h1>
            <p className="p-3">
              I am a fresher Full Stack Web Developer and have successfully
              completed a Full Stack Development course from WsCube Tech, along
              with certification. During my learning journey, I built multiple
              projects that helped me gain practical knowledge of both frontend
              and backend technologies. I am passionate about coding, eager to
              learn new technologies, and ready to apply my skills in real-world
              projects as a professional developer.
            </p>
          </div>
          <div className="mt-7 ">
            <ul>
              <li>
                <a href="#" className="text-[16px] pb-5"> Home</a>
              </li>
              <li className="pt-3">
                <a href="/Projects" className="text-[16px] "> Projects</a>
              </li>
              <li className="pt-3">
                <a href="/Skills" className="text-[16px] "> Skills</a>
              </li>
              <li className="pt-3">
                <a href="/Certificate" className="text-[16px] "> Certificate</a>
              </li>

              <li className="pt-3">
                <a href="/Contact" className="text-[16px] "> Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex mt-7 items-center justify-center gap-5 ">

            <a href="https://github.com/NareshBhinchar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-5xl" />
            </a>

            <a href="https://www.linkedin.com/in/naresh-choudhary-978356346" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-5xl" />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-5xl" />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-5xl" />
            </a>

          </div>
        </div>
        <div className="border-t border-white mt-5">
          <p className="text-white pt-3"> © 2025 Naresh. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
}
