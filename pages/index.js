import Head from 'next/head';
import { social, stack, experience } from '../public/data/data';
import { useEffect } from 'react';

export default function Home() {
  const experiences = experience.map((item) => (
    <li key={item.name} className='rounded-md bg-background p-1 sm:inline'>
      <p className=' text-center sm:inline'>{item.name}</p>
    </li>
  ));
  const stacks = stack.map((item) => (
    <li key={item.name} className='flex justify-center'>
      <span></span>
      <img src={item.logo} width='64' height='48' />
    </li>
  ));
  const socials = social.map((item) => (
    <li key={item.name}>
      <a target='_blanck' href={item.link}>
        <span className='sr-only'>{item.name}</span>
        <item.icon
          className='h-8 w-8 rounded-md p-1 hover:bg-zinc-800'
          aria-hidden='true'
        />
      </a>
    </li>
  ));

  useEffect(() => {
    gtag('event', 'view_item', {
      items: [
        {
          item_id: '6d9b0',
          item_name: 'Poyo T-Shirt',
          price: '62.00',
          item_brand: 'Poyo',
          item_category: 'T-Shirts',
          index: 0,
        },
      ],
      currency: 'ARS',
    });
  }, []);

  const handleBuy = () => {
    gtag('event', 'purchase', {
      transaction_id: '0ccbfab0-d8b1-45cc-bf23-0302eb1de474',
      currency: 'ARS',
      value: 171,
      items: [
        {
          item_id: '6d9b0',
          item_name: 'Poyo T-Shirt',
          price: '62.00',
          quantity: 1,
          item_brand: 'Poyo',
          item_category: 'T-Shirts',
          item_variant: 'red',
        },
        {
          item_id: '6c3b0',
          item_name: 'Zappix T-Shirt',
          price: '99.00',
          quantity: 1,
          item_brand: 'Zappix',
          item_category: 'T-Shirts',
          item_variant: 'red',
        },
      ],
    });
  };

  return (
    <>
      <Head>
        <title>Gastón Ladin</title>
      </Head>

      <div className='min-h-screen bg-background'>
        <main className=' m-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 py-10 text-sm text-white'>
          <header className=' mx-auto flex w-10/12 items-center overflow-hidden rounded-md bg-main p-3'>
            <img
              src='/images/profile.png'
              className=' mx-8 h-auto w-20 rounded-full object-cover'
            />
            <h3 className='text-xl'>Gastón Laudin</h3>
          </header>

          <div
            className='[&>*]:border-b-solid mx-auto w-10/12 overflow-hidden rounded-md
                bg-main 
                [&>*]:flex 
                [&>*]:flex-col 
                [&>*]:border-b-2 
              [&>*]:border-b-background 
                [&>*]:p-5 
                [&>*]:md:flex-row 
                [&>*]:md:p-7'
          >
            <div className=''>
              <h3 className='mb-4 w-full font-bold text-gray-400 md:mb-0 md:w-4/12'>
                E-mail
              </h3>
              <p>gastonlaudin@gmail.com</p>
            </div>

            <div>
              <h3 className='mb-4 w-full font-bold text-gray-400 md:mb-0 md:w-4/12'>
                Profession
              </h3>
              <p>Full-Stack Web Developer</p>
            </div>

            <div>
              <h3 className='mb-4 w-full font-bold text-gray-400 md:mb-0 md:w-4/12'>
                Experience
              </h3>
              <ul>{experiences}</ul>
            </div>

            <div>
              <h3 className='mb-4 w-full font-bold text-gray-400 md:mb-0 md:w-4/12'>
                Preffered Stack
              </h3>
              <ul className='flex w-full flex-wrap justify-center gap-x-16 md:w-8/12 md:justify-start'>
                {stacks}
              </ul>
            </div>

            <div>
              <h3 className='mb-4 w-full font-bold text-gray-400 md:mb-0 md:w-4/12'>
                Social
              </h3>
              <ul className='flex flex-wrap justify-center gap-8 md:justify-start'>
                {socials}
              </ul>
            </div>
            <div>
              <button
                onClick={handleBuy}
                className='mb-4 w-full bg-white font-bold text-gray-400 md:mb-0 md:w-4/12'
              >
                Buy
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
