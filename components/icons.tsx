import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoDocumentTextSharp } from 'react-icons/io5';

export function ViewsIcon() {
  return (
    <svg
      className='mr-2'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.25 18.0001L9 11.2501L13.306 15.5571C14.5507 13.1029 16.6044 11.1535 19.12 10.0381L21.86 8.81809M21.86 8.81809L15.92 6.53809M21.86 8.81809L19.58 14.7591'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg
      className='mr-2'
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <Link
      href='https://www.linkedin.com/in/dashartt/'
      target='_blank'
      className='hover:animate-bounce'
    >
      <BsLinkedin />
    </Link>
  );
}

export function GithubIcon() {
  return (
    <Link
      href='https://github.com/dashartt'
      target='_blank'
      className='hover:animate-bounce'
    >
      <BsGithub />
    </Link>
  );
}

export function CurriculumIcon() {
  return (
    <Link
      href='https://drive.google.com/file/d/1uTmSAOSOiBkmnMrwp7tb227ZwwlI0b4G/view?usp=sharing'
      target='_blank'
      className='hover:animate-bounce'
    >
      <IoDocumentTextSharp />
    </Link>
  );
}
// <i className='hover:-translate-y-4'>
// <BsLinkedin />
// </i>
// <i className='hover:-translate-y-4'>
// <BsGithub />
// </i>
// <i className='hover:-translate-y-4'>
// <IoDocumentTextSharp />
// </i>
