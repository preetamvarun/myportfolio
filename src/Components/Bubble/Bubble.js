import React, { useEffect } from 'react';
import './Bubble.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const Bubble = (props) => {
  useEffect(() => {
    const test = document.getElementById(props.name);
    // for preventing the stacking of skills
    const X = Math.floor(Math.random() * 90);
    const Y = Math.floor(Math.random() * 85);
    test.style.top = `${Y}%`;
    test.style.left = `${X}%`;

    // for animating the skills
    let id;
    id = setInterval(() => {
      const X = Math.floor(Math.random() * 85);
      const Y = Math.floor(Math.random() * 85);
      test.style.top = `${Y}%`;
      test.style.left = `${X}%`;
    }, Number(props.time));
    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* for html */}
      {props.name === 'FaHtml5' && (
        <FaHtml5 id={props.name} className='bubble' />
      )}

      {/* for css */}
      {props.name === 'FaCss3Alt' && (
        <FaCss3Alt id={props.name} className='bubble' />
      )}

      {/* for tailwind css */}
      {props.name === 'SiTailwindcss' && (
        <SiTailwindcss id={props.name} className='bubble' />
      )}

      {/* for javascript */}
      {props.name === 'TbBrandJavascript' && (
        <TbBrandJavascript id={props.name} className='bubble' />
      )}

      {/* for react */}
      {props.name === 'FaReact' && (
        <FaReact id={props.name} className='bubble' />
      )}

      {/* for Python */}
      {props.name === 'FaPython' && (
        <FaPython id={props.name} className='bubble' />
      )}

      {/* for Github */}
      {props.name === 'FaGithub' && (
        <FaGithub id={props.name} className='bubble' />
      )}

      {/* for mongodb */}
      {props.name === 'SiMysql' && (
        <SiMysql id={props.name} className='bubble' />
      )}

      {/* for git */}
      {props.name === 'SiGit' && <SiGit id={props.name} className='bubble' />}
    </div>
  );
};

export default Bubble;
