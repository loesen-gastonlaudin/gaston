import Head from 'next/head'
import { social, stack, experience } from '../public/data/data'

export default function Home() {

  const experiences = experience.map(item => (
    <li key={item.name} className='bg-background rounded-md p-1 sm:inline'>
      <p className=' text-center sm:inline'>{item.name}</p>
    </li>
  ))
  const stacks = stack.map(item => (
    <li key={item.name} className='flex justify-center'>
      <span></span>
      <img 
        src={item.logo}
        width="64"
        height="48"
      />
    </li>
  ))
  const socials = social.map(item => (
    <li key={item.name}>
      <a target='_blanck' href={item.link} >
        <span className='sr-only'>{item.name}</span>
        <item.icon className='h-8 w-8 hover:bg-zinc-800 rounded-md p-1' aria-hidden='true' />
      </a>
    </li>
  ))

  return (
    <>
      <Head>
        <title>Gastón Ladin</title>
      </Head>

      <div className='bg-background min-h-screen'>
        <main className=' text-white text-sm flex min-h-screen flex-col justify-center gap-8 m-auto py-10 max-w-5xl'>
            <header className=' bg-main w-10/12 mx-auto p-3 rounded-md flex items-center overflow-hidden'>
              <img 
                src='/images/profile.png'
                className=' rounded-full mx-8 w-20 h-auto object-cover'  
              />
              <h3 className='text-xl'>Gastón Laudin</h3>
            </header>
            
            <div className='bg-main w-10/12 mx-auto rounded-md overflow-hidden
                [&>*]:p-5 
                [&>*]:flex 
                [&>*]:flex-col 
                [&>*]:md:flex-row 
              [&>*]:border-b-background 
                [&>*]:border-b-2 
                [&>*]:border-b-solid 
                [&>*]:md:p-7'>
              <div className=''>
                <h3 className='w-full text-gray-400 mb-4 md:mb-0 font-bold md:w-4/12'>E-mail</h3>
                <p>gastonlaudin@gmail.com</p>
              </div>

              <div>
                <h3 className='w-full text-gray-400 mb-4 md:mb-0 font-bold md:w-4/12'>Profession</h3>
                <p>Full-Stack Web Developer</p>
              </div>

              <div>
                <h3 className='w-full text-gray-400 mb-4 md:mb-0 font-bold md:w-4/12'>Experience</h3>
                <ul>
                  {experiences}
                </ul>
              </div>

              <div>
                <h3 className='w-full text-gray-400 mb-4 md:mb-0 font-bold md:w-4/12'>Preffered Stack</h3>
                <ul className='flex justify-center gap-x-16 flex-wrap w-full md:w-8/12 md:justify-start'>
                  {stacks}
                </ul>
              </div>

              <div>
                <h3 className='w-full text-gray-400 mb-4 md:mb-0 font-bold md:w-4/12'>Social</h3>
                <ul className='flex justify-center gap-8 flex-wrap md:justify-start'>
                  {socials}
                </ul>
              </div>

            </div>

        </main>
      </div>

    </>
  )
}
