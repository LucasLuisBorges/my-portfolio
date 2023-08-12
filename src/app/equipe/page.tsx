import Link from 'next/link';

export default function Equipe() {
  return (
    <div className='flex flex-col gap-4 bg-background rounded-xl min-h-[50vh] p-7'>
      <h1 className='text-2xl font-medium'>Equipe</h1>
      <p>
        Nossa equipe de freelancers cria sites e aplicativos avançados, destacando-se na experiência do usuário. Combinamos inovação tecnológica com design intuitivo, proporcionando soluções personalizadas que não apenas atendem, mas superam as expectativas dos clientes.
        <br /><br />
        Nossa abordagem é centrada na parceria, mantendo comunicação transparente em todas as etapas. Estamos comprometidos com o seu negócios para um sucesso duradouro no cenário online.
      </p>
      <Link
        className='flex items-center justify-center w-fit h-11 rounded-md px-8 bg-blue-600 hover:bg-blue-700 text-white'
        href="https://2x-l.com/"
        target='_blank'
      >
        Conhecer
      </Link>
    </div>
  )
}