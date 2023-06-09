import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mim | Portfolio Web',
  description: 'Sessão onde falo um pouco sobre mim para saber quem sou eu',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl font-serif mb-10'>Sobre mim</h1>
      <article className='[&>p]:mb-4 [&>p]:text-justify'>
        <Image
          alt='Imagem de perfil'
          src='/perfil.png'
          width={200}
          height={40}
          className='rounded-full float-left mr-4 mb-4'
        />
        <p>Olá, legal que queira saber mais sobre mim!</p>
        <p>
          Vamos lá, me chamo Jônatas, de SP. Gosto de programação e tive o
          primeiro contato na Etec de Ilha Solteira no curso Técnico em
          informática. Lá aprendi Java com interface gráfica e PostgreSQL onde
          desenvolvi meu TCC sendo um programa de cadastro de clientes para
          academia.
        </p>
        <p>
          Antes de me formar na ETEC, tive experiência em desenvolvimento de
          jogos 2D usando Unity e C# tentando criar um protótipo do DDTank, um
          jogo que eu gostava bastante porém queria que fosse sem o sistema
          pay-to-win então tentei criar o meu próprio. Foi uma experiência
          interessante e consegui criar uma demo porém perdi os arquivos e na
          época não programava usando Github e Git.
        </p>
        <p>
          Anos depois, fiz parte da jornada na Trybe em desenvolvimento web.
          Curso de duração de 1 ano que aprendi bastante, como: Javascript,
          HTML, CSS, React, Express, SQL, NoSQL, Docker, testes unitários e de
          integração, soft skills e projetos em grupo usando metodologias ágeis.
        </p>
        <p>
          Almejo profissionalmente criar uma carreira em programação. Estou
          aberto à oportunidades e em busca de trabalho na área. Aprendo rápido,
          gosto de ensinar o que sei e aprender com outras pessoas.
        </p>
      </article>
    </section>
  );
}
