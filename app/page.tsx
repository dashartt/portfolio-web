// import { name, about, bio, avatar } from 'lib/info';
import { CurriculumIcon, GithubIcon, LinkedinIcon } from 'components/icons';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className='mx-auto flex flex-col'>
      <h1 className='text-lg lg:text-2xl font-bold mb-4'>
        Oi, eu sou o Jônatas
      </h1>

      <section className='relative'>
        <h1 className='font-extrabold text-6xl sm:text-[7rem] lg:text-[10rem] leading-[0.8]'>
          Web <br />
          Developer
        </h1>
        <section className='w-fit absolute left-48 sm:left-96 lg:left-[32rem] top-4 sm:top-9 lg:top-12 flex self-center space-x-5 sm:space-x-10 lg:space-x-16 text-2xl sm:text-3xl lg:text-5xl [&>*:hover]:-translate-y-4 [&>*:hover]:cursor-pointer'>
          <GithubIcon />
          <LinkedinIcon />
          <CurriculumIcon />
        </section>
      </section>

      <h1 className='text-lg lg:text-2xl font-bold self-end mt-6 md:mt-10'>
        Bem-vindo(a) ao meu espaço na web!
      </h1>
    </section>
  );
}
