import React from 'react';
import StatCard from '../Components/StatCard';
import Layout from '../Layout/Layout';
import neumorphic from '../Assets/neumorphic-calci.png';
import TipCalci from '../Assets/reset.png';
import RestApi from '../Assets/rest-api.png';
import fylo from '../Assets/fylo.png';
import savorBites from '../Assets/savorBites.png';
import { SiGithub } from 'react-icons/si';
import { HiStatusOnline } from 'react-icons/hi';

const Projects = () => {
  const projectOverview = [
    {
      name: 'HTML + CSS',
      number: 8,
    },
    {
      name: 'Tailwind CSS',
      number: 1,
    },
    {
      name: 'JavaScript',
      number: 5,
    },
    {
      name: 'ReactJS',
      number: 3,
    },
  ];

  return (
    <Layout>
      <div className='sm:ml-[15%] sm:mr-10 mx-6'>
        <h1 className='text-center my-2 text-3xl text-white font-semibold'>
          Projects Statistics
        </h1>
        <p className='mb-10 mx-[15%] text-gray-200 text-center'>
          Project statistics data can be verified by visiting{' '}
          <a
            className='link text-[#64ffda]'
            href='https://github.com/preetamvarun'
            target={'__blank'}>
            Github Profile
          </a>
        </p>
        {/* for displaying the projects stats */}
        <div className='flex items-center justify-center gap-10 flex-wrap'>
          {projectOverview.map((element, index) => {
            return (
              <StatCard
                name={element.name}
                number={element.number}
                key={index}
              />
            );
          })}
        </div>

        {/* for displaying the important projects card */}
        <div className='pb-10'>
          <h1 className='text-center mt-16 mb-10 text-3xl text-white font-semibold'>
            Some Projects Overview
          </h1>
          <div className='flex flex-col gap-20'>
            <div className='flex flex-col sm:flex-row items-center gap-10 text-white'>
              <img
                src={savorBites}
                className='sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md'
                alt='img'
              />

              {/* right section for project details */}
              <div className='flex flex-col gap-2'>
                <h1 className='text-center text-2xl font-semibold mb-4 font-mono'>
                  <span className='mr-4 text-xl text-[#64ffda]'>01.</span>
                  Savor Bites
                </h1>
                <p className='flex items-center gap-2'>
                  <h4 className='font-medium'>Project Category :</h4>
                  <p className='text-gray-200'>HTML CSS React</p>
                </p>

                <div>
                  <h4 className='font-medium'>Technology Used</h4>
                  <ul className='flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Redux.js</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-medium'>Description</h4>
                  <p className='text-gray-200'>
                    Savor Bites is an online food ordering platform built using
                    React JS, and it fetches restaurant data from Swiggy's
                    public API. The platform is designed to provide foodies with
                    a convenient way to discover and order food from a wide
                    range of restaurants. The platform has several key features
                    that make it user-friendly and easy to use.
                  </p>
                </div>

                <div>
                  <h4 className='font-medium'>Key Features</h4>
                  <ul className='text-gray-200 list-disc pl-4'>
                    <li>
                      Cart functionality: Users can add items to a cart, view
                      their orders, and checkout with ease using the platform's
                      use of Redux for cart functionality.
                    </li>
                    <li>
                      Context API: The use of the context API to pass data
                      between components helps to improve the overall
                      performance of the platform and provide a seamless user
                      experience.
                    </li>
                    <li>
                      Filtering options: Users can search for restaurants based
                      on various criteria, such as cuisine type, location, or
                      price range, providing them with a range of options to
                      choose from.
                    </li>
                    <li>
                      Wide range of cuisines: The platform offers users access
                      to a wide range of cuisines, ensuring that there is
                      something for everyone.
                    </li>
                    <li>
                      About section: The dedicated "About" section offers users
                      an overview of the platform's purpose and features.
                    </li>
                    <li>
                      Help section: The "Help" section includes a list of
                      frequently asked questions (FAQ) and contact information
                      for customer support, providing users with assistance if
                      needed.
                    </li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className='flex items-center gap-4'>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Repo Link'>
                    <a
                      href='https://github.com/preetamvarun/Restaurant-App'
                      target={'__blank'}>
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Live Link'>
                    <a
                      href='https://savorbites.netlify.app/'
                      target={'__blank'}>
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* for project 1 */}
            <div className='flex flex-col sm:flex-row items-center gap-10 text-white'>
              <img
                src={RestApi}
                className='sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md'
                alt='img'
              />

              {/* right section for project details */}
              <div className='flex flex-col gap-2'>
                <h1 className='text-center text-2xl font-semibold mb-4 font-mono'>
                  <span className='mr-4 text-xl text-[#64ffda]'>02.</span>
                  Rest Countries Api
                </h1>
                <p className='flex items-center gap-2'>
                  <h4 className='font-medium'>Project Category :</h4>
                  <p className='text-gray-200'>React</p>
                </p>

                <div>
                  <h4 className='font-medium'>Technology Used</h4>
                  <ul className='sm:flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind Css</li>
                    <li>ReactJS</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-medium'>Description</h4>
                  <p className='text-gray-200'>
                    Your project is a website that displays information about
                    countries worldwide, including their flags, population
                    count, country name, capital, and region. Users can filter
                    or search for specific countries and view additional
                    details, such as native name, languages, currency, and
                    border countries. The website is fully responsive and offers
                    a toggle theme functionality for dark and light mode.
                  </p>
                </div>

                <div>
                  <h4 className='font-medium'>Key Features</h4>
                  <ul className='text-gray-200 list-disc pl-4'>
                    <li>Simple and easy to use user interface</li>
                    <li>
                      Allows users to filter the countries based on region or
                      search for a specific country.
                    </li>
                    <li>Provides detailed information about each country.</li>
                    <li>
                      Offers a responsive design that adapts to any screen size.
                    </li>
                    <li>
                      Provides a toggle theme functionality that allows users to
                      switch between dark mode and light mode.
                    </li>
                    <li>
                      Provides accurate and up-to-date information about all
                      countries.
                    </li>
                    <li>Implemented Shimmer UI</li>
                    <li>
                      Uses Third Party Api to fetch the data about various
                      countries
                    </li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className='flex items-center gap-4'>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Repo Link'>
                    <a
                      href='https://github.com/preetamvarun/REST-COUNTRIES-API'
                      target={'__blank'}>
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Live Link'>
                    <a
                      href='https://restapicountriesreact.netlify.app/'
                      target={'__blank'}>
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 2 */}
            <div className='flex flex-col sm:flex-row-reverse items-center gap-10 text-white'>
              <img
                src={TipCalci}
                className='sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md'
                alt='img'
              />

              {/* right section for project details */}
              <div className='flex flex-col gap-2'>
                <h1 className='text-center text-2xl font-semibold mb-4 font-mono'>
                  <span className='mr-4 text-xl text-[#64ffda]'>03.</span>
                  Tip Calculator
                </h1>
                <p className='flex items-center gap-2'>
                  <h4 className='font-medium'>Project Category :</h4>
                  <p className='text-gray-200'>JavaScript</p>
                </p>

                <div>
                  <h4 className='font-medium'>Technology Used</h4>
                  <ul className='flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-medium'>Description</h4>
                  <p className='text-gray-200'>
                    The app takes the total amount of a bill and allows the user
                    to select a tip percentage from pre-defined values or enter
                    a custom tip percentage. The user can then select the number
                    of people they want to split the tip amount among. The app
                    calculates the tip amount per person and the total amount
                    owed, including the tip. The app also has a local storage
                    functionality that persists the entered values even if the
                    browser is refreshed.
                  </p>
                </div>

                <div>
                  <h4 className='font-medium'>Key Features</h4>
                  <ul className='text-gray-200 list-disc pl-4'>
                    <li>Simple and easy to use user interface</li>
                    <li>
                      Calculates the tip amount and total amount including tip
                      based on the total bill and selected tip percentage.
                    </li>
                    <li>
                      Allows users to select from pre-defined tip percentages or
                      enter a custom tip percentage.
                    </li>
                    <li>
                      Allows users to select the number of people they want to
                      split the tip amount among.
                    </li>
                    <li>
                      Calculates the tip amount per person and the total amount
                      owed, including the tip.
                    </li>
                    <li>
                      Provides local storage functionality that persists entered
                      values even if the browser is refreshed.
                    </li>
                    <li>
                      Useful for people who want to quickly and easily calculate
                      tips and split bills among a group.
                    </li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className='flex items-center gap-4'>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Repo Link'>
                    <a
                      href='https://github.com/preetamvarun/Tip-Calculator'
                      target={'__blank'}>
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Live Link'>
                    <a href='https://tip-calci.netlify.app/' target={'__blank'}>
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 4 */}
            <div className='flex flex-col sm:flex-row items-center gap-10 text-white'>
              <img
                src={fylo}
                className='sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md'
                alt='img'
              />

              {/* right section for project details */}
              <div className='flex flex-col gap-2'>
                <h1 className='text-center text-2xl font-semibold mb-4 font-mono'>
                  <span className='mr-4 text-xl text-[#64ffda]'>04.</span>
                  Fylo Landing Page
                </h1>
                <p className='flex items-center gap-2'>
                  <h4 className='font-medium'>Project Category :</h4>
                  <p className='text-gray-200'>HTML CSS</p>
                </p>

                <div>
                  <h4 className='font-medium'>Technology Used</h4>
                  <ul className='flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200'>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-medium'>Description</h4>
                  <p className='text-gray-200'>
                    Your project is a landing page for Fylo, built using HTML
                    and CSS. The page features beautiful gradient background
                    colored buttons, striking color combinations, cool icons,
                    and curvy backgrounds. The page also includes a testimonials
                    section from different people and a nice footer. The landing
                    page is fully responsive, ensuring that it looks great on
                    all devices.
                  </p>
                </div>

                <div>
                  <h4 className='font-medium'>Key Features</h4>
                  <ul className='text-gray-200 list-disc pl-4'>
                    <li>
                      Beautiful gradient background colored buttons, striking
                      color combinations, cool icons, and curvy backgrounds that
                      give the website an attractive look and feel.
                    </li>
                    <li>
                      Testimonials section that allows visitors to see what
                      other people are saying about Fylo, increasing trust and
                      credibility.
                    </li>
                    <li>
                      Fully responsive design that ensures the website looks
                      great on all devices, from desktops to mobile phones.
                    </li>
                    <li>
                      A nice footer that provides additional information about
                      Fylo, such as links to social media pages, contact
                      information, and more.
                    </li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className='flex items-center gap-4'>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Repo Link'>
                    <a
                      href='https://github.com/preetamvarun/fylo-landing-page'
                      target={'__blank'}>
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Live Link'>
                    <a
                      href='https://fylo-landing-page-frontendmentor.netlify.app/'
                      target={'__blank'}>
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 5 */}
            <div className='flex flex-col sm:flex-row-reverse items-center gap-10 text-white'>
              <img
                src={neumorphic}
                className='sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md'
                alt='img'
              />

              {/* right section for project details */}
              <div className='flex flex-col gap-2'>
                <h1 className='text-center text-2xl font-semibold mb-4 font-mono'>
                  <span className='mr-4 text-xl text-[#64ffda]'>05.</span>
                  Neumorphic Calculator
                </h1>
                <p className='flex items-center gap-2'>
                  <h4 className='font-medium'>Project Category :</h4>
                  <p className='text-gray-200'>Javascript</p>
                </p>

                <div>
                  <h4 className='font-medium'>Technology Used</h4>
                  <ul className='flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-medium'>Description</h4>
                  <p className='text-gray-200'>
                    The calculator provides all the basic functionalities, such
                    as addition, subtraction, division, multiplication and
                    percentage calculation. The user can clear the screen and
                    delete individual characters if needed. The calculator also
                    features a toggle switch that allows the user to switch
                    between light mode and dark mode, providing a personalized
                    experience for users
                  </p>
                </div>

                <div>
                  <h4 className='font-medium'>Key Features</h4>
                  <ul className='text-gray-200 list-disc pl-4'>
                    <li>
                      Modern neumorphic design that gives the calculator a
                      sleek, modern look and feel
                    </li>
                    <li>
                      Toggle switch for light and dark mode, providing a
                      personalized experience for users, and improving the user
                      experience
                    </li>
                    <li>
                      Ideal for anyone who needs a simple, yet stylish
                      calculator for basic calculations.
                    </li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className='flex items-center gap-4'>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Repo Link'>
                    <a
                      href='https://github.com/preetamvarun/Neumorphic-Calculator'
                      target={'__blank'}>
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className='hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent'
                    data-tip='Live Link'>
                    <a
                      href='https://neumorphic-calci.netlify.app/'
                      target={'__blank'}>
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* show more button */}
            <button className='border-2 border-[#1aba95] bg-[#1aba95] px-5 mb-16 sm:mb-0 py-2 rounded-md font-semibold w-fit mx-auto text-white transition-all ease-in-out duration-300 hover:-translate-y-2'>
              <a
                className='bg-transparent'
                href='https://www.frontendmentor.io/profile/preetamvarun/solutions'
                target={'__blank'}>
                Show More
              </a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
