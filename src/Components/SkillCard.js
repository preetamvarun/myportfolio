import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGithub,
  FaSass,
} from 'react-icons/fa';
import { SiTailwindcss, SiGit, SiMysql } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const SkillCard = () => {
  return (
    <>
      {/* for html */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <FaHtml5 size={48} />
        <p>HTML</p>
      </div>

      {/* for css */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <FaCss3Alt size={48} />
        <p>CSS</p>
      </div>

      {/* for tailwind css */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <SiTailwindcss size={48} />
        <p>Tailwind CSS</p>
      </div>

      {/* for chakra ui */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <FaPython size={48} />
        <p>Python</p>
      </div>

      {/* for javascript */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <TbBrandJavascript size={48} />
        <p>JavaScript</p>
      </div>

      {/* for react */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <FaReact size={48} />
        <p>ReactJS</p>
      </div>

      {/* for node */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <SiMysql size={48} />
        <p>Mysql</p>
      </div>

      {/* for express */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <FaGithub size={48} />
        <p>Github</p>
      </div>

      {/* for mongodb */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <FaSass size={48} />
        <p>SASS</p>
      </div>

      {/* for git */}
      <div
        className='text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4'
        style={{ boxShadow: '1px 1px 4px 4px #1aba95' }}>
        <SiGit size={48} />
        <p>Git</p>
      </div>
    </>
  );
};

export default SkillCard;
