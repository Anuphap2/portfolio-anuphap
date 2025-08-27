import { FaGithub, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
import FastWork from "../assets/fastwork.png";

export default function Herosection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 min-h-screen flex flex-col md:flex-row items-center justify-around p-8 gap-10 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>

      {/* Hero Image */}
      <div className="flex justify-center md:justify-start z-10">
        <img
          src="/src/assets/hero-image.jpg"
          alt="Hero"
          className="w-80 md:w-96 h-auto rounded-xl shadow-2xl transform transition-transform duration-700 hover:scale-110 hover:rotate-3"
        />
      </div>

      {/* Hero Text */}
      <div className="text-center md:text-left space-y-6 max-w-lg z-10 animate__animated animate__fadeInRight">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg animate-fadeIn">
          Portfolio Anuphap
        </h1>

        <p className="text-white/80 font-bold text-lg md:text-xl animate-fadeIn delay-200">
          ผมเป็นนักศึกษา คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
          มีความสนใจในการพัฒนาเว็บแอปพลิเคชันทั้ง Front-end และ Back-end
          การออกแบบ UI/UX, ระบบฐานข้อมูล, การสร้าง API,
          รวมถึงการศึกษาและประยุกต์ใช้เทคโนโลยีใหม่ ๆ และการพัฒนาทักษะด้าน Logic
          และ Network Programming
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 animate-fadeIn delay-400 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition duration-300 flex items-center gap-2"
          >
            View Projects
          </a>

          {/* Contact Icons */}
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/Anuphap2"
              className="text-white text-2xl hover:text-blue-200 transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:anuphap.240348@gamil.com"
              className="text-white text-2xl hover:text-blue-200 transition"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/anuphap/"
              target="_blank"
              className="text-white text-2xl hover:text-blue-300 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://fastwork.co/user/anuphap_p"
              target="_blank"
              title="Fastwork"
            >
              <img
                src={FastWork}
                alt="Fastwork"
                className="w-7 h-7 hover:scale-110 transition filter invert brightness-0 contrast-100"
              />
            </a>

            <a
              href="https://www.facebook.com/anuphappp/"
              target="_blank"
              className="text-white text-2xl hover:text-blue-300 transition"
              title="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
