import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <ul className='text-gray-100 fixed z-10 flex items-center justify-center w-full py-4 space-x-4 bottom-0 sm:left-[6%] sm:block sm:space-x-0 sm:w-fit maxWidth:left-[17%] sm:top-[35%] sm:space-y-4 text-3xl'>
      <li className='hover:text-[#64ffda]'>
        <a
          href='https://github.com/preetamvarun'
          target={'_blank'}
          className='tooltip tooltip-top sm:tooltip-right tooltip-accent'
          data-tip='Github'
          rel='noreferrer'>
          <AiFillGithub />
        </a>
      </li>

      <li className='hover:text-[#64ffda]'>
        <a
          href='linkedin.com/in/preetam-varun/'
          target={'_blank'}
          className='tooltip tooltip-top sm:tooltip-right tooltip-accent'
          data-tip='Linkedin'
          rel='noreferrer'>
          <AiFillLinkedin />
        </a>
      </li>

      <li className='hover:text-[#64ffda]'>
        <a
          href='https://leetcode.com/Lawliet_/'
          target={'_blank'}
          className='tooltip tooltip-top sm:tooltip-right tooltip-accent'
          data-tip='Leetcode'
          rel='noreferrer'>
          <SiLeetcode />
        </a>
      </li>

      <li className='hover:text-[#64ffda]'>
        <a
          href='https://twitter.com/bit_legion1'
          target={'_blank'}
          className='tooltip tooltip-top sm:tooltip-right tooltip-accent'
          data-tip='Twitter'
          rel='noreferrer'>
          <AiOutlineTwitter />
        </a>
      </li>

      <li className='hover:text-[#64ffda] flex justify-center items-center'>
        <a
          href='https://www.frontendmentor.io/profile/preetamvarun'
          target={'_blank'}
          className='tooltip tooltip-top sm:tooltip-right tooltip-accent bg-green-900'
          data-tip='frontendmentor'
          rel='noreferrer'>
          <img
            src={require('../Assets/fem.jpeg')}
            alt='fem-profile'
            className='h-6 w-6 rounded-sm'
          />
        </a>
      </li>

      <li className='hover:text-[#64ffda] flex justify-center items-center'>
        <a
          href='https://cssbattle.dev/player/preetamvarun'
          target={'_blank'}
          className='tooltip tooltip-top sm:tooltip-right tooltip-accent bg-green-900'
          data-tip='css battles'
          rel='noreferrer'>
          <img
            src={require('../Assets/cssbattles.png')}
            alt='fem-profile'
            className='h-7 w-7 rounded-sm bg-white'
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
