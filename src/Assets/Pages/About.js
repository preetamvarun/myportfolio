/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';
import userImage from '../Assets/railwaypic.jpg';

const About = () => {
  return (
    <Layout>
      <div className='sm:mx-[15%] sm:h-[85vh] flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-10 text-gray-100'>
        {/* for introduction */}
        <div className='sm:w-5/6 mx-6 sm:mx-0'>
          <p>
            My name is Preetam Varun, and I am a master's student pursuing an{' '}
            <span className='color : text-[#1df5c3]'>
              MSc in Computing and Technology at Northumbria University.
            </span>{' '}
            I am a passionate front-end web developer with a strong foundation
            in{' '}
            <span className='color : text-[#1df5c3]'>
              HTML, CSS, Tailwind CSS, JavaScript, and React.
            </span>{' '}
            I enjoy challenging myself and exploring new technologies, with a
            particular interest in full-stack web development and AWS.{' '}
          </p>
          <p className='py-1'>
            Alongside my studies, I have actively participated in online coding
            challenges, including{' '}
            <span className='color : text-[#1df5c3]'>
              Front End Mentor and CSS Battles.
            </span>{' '}
            Furthermore, I have solved 280+ problems on LeetCode, earning a
            <span className='color : text-[#1df5c3]'>100DaysOfCode badge.</span>{' '}
            These experiences have helped me hone my coding skills and develop
            my problem-solving abilities. I am currently working on a master's
            project that aims to automate the detection of differences between
            CGI and real human faces.{' '}
          </p>
          <p>
            Thank you for taking the time to review my profile. I am eager to
            continue expanding my knowledge and skills and contribute to
            meaningful projects in the field.
          </p>
          {/* adding the buttons */}
          <div className='mt-6 space-x-6 mb-[5rem] sm:mb-0'>
            <NavLink to='/contact'>
              <button className='border-2 border-[#1aba95] bg-[#1aba95] px-5 py-2 rounded-md font-semibold'>
                Hire Me
              </button>
            </NavLink>
            <NavLink to='/skills'>
              <button className='border-2 border-[#1aba95] px-5 py-2 rounded-md font-semibold'>
                Skills
              </button>
            </NavLink>
          </div>
        </div>

        {/* for image */}
        <div className='sm:w-1/3 my-4 sm:my-0 h-[22rem] border-2 border-[#64ffda] cursor-pointer rounded-md'>
          <img
            className='object-cover w-full h-full p-2 hover:transition-all hover:p-0 rounded-md'
            src={userImage}
            alt='image'
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
