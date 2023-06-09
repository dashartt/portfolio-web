// import { name, about, bio, avatar } from 'lib/info';
import { CurriculumIcon, GithubIcon, LinkedinIcon } from 'components/icons';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <article className='flex flex-col relative'>
        <h1 className='text-2xl font-bold'>Oi, eu sou o Jônatas</h1>

        <h1 className='font-extrabold text-[10rem] leading-[0.8]'>
          Web Developer
        </h1>
        <section className='absolute right-80 top-12 flex self-center mt-10 space-x-5 text-4xl [&>*:hover]:-translate-y-4 [&>*:hover]:cursor-pointer'>
          <GithubIcon />
          <LinkedinIcon />
          <CurriculumIcon />
        </section>

        <h1 className='text-2xl font-bold self-end mt-10 '>
          Bem-vindo(a) ao meu espaço na web!
        </h1>
      </article>
    </section>
  );
}
