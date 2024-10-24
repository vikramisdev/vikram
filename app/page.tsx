/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect, useRef } from "react";
import Project from "./components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialButton from "./components/SocialButton";
import HoverButton from "./components/HoverButton";
import IntroAnimation from "./components/IntroAnimation";
import { serialize, parse } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import Skill from "./components/Skill";

export default function Home() {
  const [isIntroFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const mainContainer = document.querySelector(
      ".main-container"
    ) as HTMLElement;

    const visited = localStorage.getItem("visited");
    if (visited !== null) {
      setIntroFinished(true);
    }

    if (mainContainer) {
      if (window.scrollX !== 0) {
        window.scrollTo(0, 0);
      }
      setTimeout(() => {
        mainContainer.style.transform = "scale(1)";
      }, 600);
    }
  }, [isIntroFinished]);

  const github_url = "https://github.com/vikramisdev/";
  const email_url = "vs423502@gmail.com";
  const mobile_number = "+918805469136";

  if (!isIntroFinished) {
    return <IntroAnimation setIntroFinished={setIntroFinished} />;
  } else {
    localStorage.setItem("visited", "true");

    return (
      <div className="bg-container main-container origin-top-left md:scale-150 transition-all md:duration-500">
        {/* introduction or hero section */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="md:flex md:flex-row-reverse md:justify-between md:items-end md:gap-14 md:px-24 md:py-48 px-6 py-12 bg-[url('/images/hero_bg.svg')] bg-no-repeat bg-cover"
        >
          <Image
            className="md:rounded-full md:cursor-pointer mt-12 rounded-t-full rounded-br-full"
            src={"/images/profile.png"}
            alt="vikram profile picture"
            height={350}
            width={350}
          />
          <div className="">
            <div className="md:text-7xl text-6xl font-semibold relative cursor-pointer group md:hover:pl-10 transition-all duration-500">
              <h1 className="md:transition-all mt-24">
                Web designer &<br /> developer from India
              </h1>
              <div className="group-hover:rounded-lg md:absolute md:top-0 md:left-0 transition-all h-full md:group-hover:w-5 bg-black text-white w-0"></div>
            </div>

            <HoverButton
              onClick={() => openUrl("mailto:" + email_url)}
              text="Get in touch"
              iconName="bi bi-arrow-right"
            />
          </div>
        </div>

        {/* About section */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-black md:rounded-t-6xl rounded-t-4xl md:px-24 md:py-32 px-6 py-12 md:mx-6 md:my-12 mx-2 my-4 text-white"
        >
          <h1 className="text-xl mb-5">Myself,</h1>
          <p className="text-xl text-justify md:text-2xl">
            Hi There, My name is Vikram Vishwakarma and I belong from
            Maharashtra, India. I have recently completed my degree in the field
            of computer science, I like to design and build websites that are
            responsive and beautiful. I use softwares like figma & adobe
            illustrator to design & for the building part i use various web
            frameworks to build my website. I always try to make the websites
            clean, minimal, responsive & user friendly with smooth animations
            and transitions.
          </p>
        </div>

        {/* work section */}
        <div className="md:px-24 md:py-32 px-6 py-12">
          <div className="flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
            <div className="group-hover:z-1 transition-all delay-75 flex">
              <h1 className="">My Work</h1>
              <div className="italic">- "Handcrafted By Me"</div>
            </div>
            <i
              className={`transition-all bi bi-briefcase rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
            ></i>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid md:grid-cols-3 md:gap-x-10 gap-y-24 mt-10"
          >
            <Project
              src="/images/project1.webp"
              title={"Swamp Calculator"}
              description={
                "It is a android calculator written in java using android API."
              }
              buttonText={"Visit on Github"}
              buttonIcon={"bi bi-github"}
              onClick={() => openUrl(github_url + "deepnotes")}
            />
            <Project
              src="/images/project2.webp"
              title={"Doodle Search"}
              description={
                "Its a static search page, optimised for mobile and desktop sizes."
              }
              buttonText={"Visit Site"}
              onClick={() => openUrl(github_url + "dynamic-homepage")}
            />
            <Project
              src="/images/project3.webp"
              title={"ShopNow"}
              description={
                "It is a E-Commerce website made in React Framework."
              }
              buttonText={"Visit Site"}
              onClick={() => openUrl(github_url + "shopnow")}
            />
          </div>
        </div>

        {/* Achievement section */}
        <div className="md:px-24 md:py-32 px-6 py-12">
          <div className="flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
            <div className="group-hover:z-1 transition-all delay-75 flex">
              <h1 className="">My Achievements</h1>
              <div className="italic">- "Everything"</div>
            </div>
            <i
              className={`transition-all bi bi-trophy rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
            ></i>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="800"
            className="grid md:grid-cols-3 md:gap-x-10 gap-y-24 mt-10"
          >
            <Project
              src="/images/achievement1.jpg"
              title={"Internship Studio"}
              description={
                "I have done a one month intership at Internship Studio on Website design & Development."
              }
            />
            <Project
              src="/images/achievement2.jpg"
              title={"InternPe"}
              description={
                "I have done a one month intership at InternPe on Website design & Development."
              }
            />
            <Project
              src="/images/achievement3.jpg"
              title={"Coursera Certification"}
              description={
                "I have completed a Google IT Automation with Python course offered by Coursera."
              }
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="md:px-24 md:py-32 px-6 py-12 relative">
          <div className="flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
            <div className="group-hover:z-1 transition-all delay-75 flex">
              <h1 className="">Skills</h1>
              <div className="italic">- "Honed With Practice"</div>
            </div>
            <i
              className={`transition-all bi bi-star rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
            ></i>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="md:p-10 md:flex md:flex-wrap md:gap-5 | border-2 rounded-xl mt-10 grid grid-cols-1S"
          >
            <Skill
              src="/images/reactjs.svg"
              alt="react js"
              text="70%"
              className="bg-blue-500 md:flex-grow h-44"
              imgClassName="md:w-56 w-28"
              textClassName="text-white md:text-9xl"
              overlayText="REACT JS"
            />
            <Skill
              src="/images/tailwindcss.png"
              alt="tailwind css"
              text="67%"
              className="bg-slate-100 md:w-[30rem] md:h-44"
              imgClassName="md:w-32 w-28"
              textClassName="md:text-9xl text-6xl"
              overlayText="TAILWIND CSS"
            />

            <Skill
              src="/images/nextjs.png"
              alt="next js"
              text="72%"
              className="bg-black md:w-full"
              imgClassName="invert md:w-96 w-36"
              textClassName="invert md:text-8xl text-3xl"
              overlayText="NEXT JS"
            />

            <Skill
              src="/images/git.svg"
              alt="git"
              text="58%"
              className="bg-slate-100 md:w-[30rem] md:h-60"
              imgClassName="md:w-44 w-36"
              textClassName="md:text-9xl text-5xl"
              overlayText="GIT"
            />
            <Skill
              src="/images/vscode.svg"
              alt="vscode"
              text="78%"
              className="bg-blue-500 md:flex-grow md:h-60"
              imgClassName="md:w-36 w-32"
              textClassName="md:text-9xl text-white"
              overlayText="VSCODE"
            />

            <Skill
              src="/images/figma.svg"
              alt="figma"
              text="65%"
              className="bg-slate-100 md:w-full md:h-44"
              imgClassName="md:w-36 w-28"
              textClassName="md:text-9xl"
              overlayText="FIGMA"
            />

            <Skill
              src="/images/android_studio.png"
              alt="android studio"
              text="52%"
              className="bg-white md:w-[35rem] md:h-44"
              imgClassName="md:w-56 w-28"
              textClassName="md:text-8xl"
              overlayText="ANDROID STUDIO"
            />
            <Skill
              src="/images/docker.svg"
              alt="docker"
              text="36%"
              className="bg-white md:flex-grow md:h-44"
              imgClassName="md:w-32 w-28"
              textClassName="md:text-9xl text-6xl"
              overlayText="DOCKER"
            />
          </div>
        </div>

        {/* Contact section */}
        <div className="md:px-24 md:py-32 px-6 py-12 mt-32 bg-black flex justify-between text-white">
          <div className="">
            <h1 className="text-2xl font-semibold">Contact Me</h1>
            <div className="mt-10 gap-x-5">
              <h1 className="cursor-pointer">
                <span className="font-bold">Mobile: </span>
                {mobile_number}
              </h1>
              <h1 className="cursor-pointer">
                <span className="font-bold">Email: </span>
                {email_url}
              </h1>
            </div>
            <div className="md:flex md:gap-x-5 grid grid-cols-2 gap-5">
              <SocialButton
                onClick={() => openUrl("https://instagram.com/vikramisdev")}
                text="Instagram"
                iconName="bi bi-instagram"
              />
              <SocialButton
                onClick={() => openUrl("https://facebook.com/vikramisdev")}
                text="Facebook"
                iconName="bi bi-facebook"
              />
              <SocialButton
                onClick={() => openUrl("https://x.com/vikramisdev")}
                text="Twitter"
                iconName="bi bi-twitter"
              />
              <SocialButton
                onClick={() => openUrl(github_url)}
                text="Github"
                iconName="bi bi-github"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function openUrl(url: string, blank: Boolean = true) {
  window.open(url, blank ? "_blank" : "");
}
