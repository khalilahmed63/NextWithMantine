import { Title } from '@mantine/core';
import Head from 'next/head';
import Main from '../components/VariantA/Layouts/Main';

export default function HomePage() {
  return (
    <>
     <Head>
        <title>Dashboard</title>
        <meta name="description" content="IoT Capability" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
      <main>
        <Main>
          <section className="">
            <div className="">
              <Title>Index page (public page)</Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui animi aspernatur,
              cumque soluta voluptates dicta eius at molestiae repudiandae expedita libero quod
              impedit nemo error cupiditate quidem quo veritatis!
            </div>
          </section>
        </Main>
      </main>
    </>
  );
}
