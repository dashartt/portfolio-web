import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meus projetos | Portfolio Web',
  description: 'Projetos desenvolvidos por Jonatas Queiroz Lima',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl font-serif mb-10'>Meus projetos</h1>
      <p>Em breve...</p>
    </section>
  );
}
