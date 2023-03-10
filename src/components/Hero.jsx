import React from "react";
import Typewriter from "typewriter-effect";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgImg from "../assets/cyber-bg.png";

export default function Hero() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <div className="tw-flex tw-gap-x-2 text-4xl font-medium font-link bg-indigo-600 text-white w-auto">
          <Typewriter
            options={{
              strings: [
                "Hello Adil Bhai !",
                "Kaisay Hain ?",
                "Check Karain Shashka :D",
                "Lunch Kar lain ?",
                'Bhook Lagi Hai !!!'
              ],
              autoStart: true,
              loop: true,
            }}
          />

          </div>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] 
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl
        "
        >
          <p className="text-xl font-semibold text-indigo-600">Data Services</p>
          <div className="flex justify-between flex-wrap px-4 my-2">
            <p className="flex px-4 py-2 text-slate-500 ">
              <CloudUploadIcon className="h-6 mr-2 text-indigo-600" />
              App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 mr-2 text-indigo-600" />
              Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 mr-2 text-indigo-600" />
              Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 mr-2 text-indigo-600" />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
