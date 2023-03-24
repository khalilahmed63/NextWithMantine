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
          <section className="flex justify-center">
            <div className="">
              <div className="mt-10">
                <div className="flex bg-gray-100  rounded-lg w-[800px]">
                  <div className=" text-center w-full">
                    <p className="font-bold text-lg  bg-yellow-500 px-4 rounded-lg">Projects</p>
                    <div className="p-4 rounded-lg">
                      <p className="font-bold text-lg underline">50 project</p>
                      <p>30 device groups</p>
                      <p>10 vendors</p>
                    </div>
                  </div>
                  <div className=" text-center rounded-lg w-full">
                    <p className="font-bold text-lg  bg-purple-500 px-4 rounded-lg">Devices</p>
                    <div className="p-4 rounded-lg">
                      <p className="font-bold text-lg underline">100 Devices</p>
                      <p>90 Online</p>
                      <p>10 Offline</p>
                    </div>
                  </div>
                  <div className=" text-center rounded-lg w-full">
                    <p className="font-bold text-lg  bg-blue-500 px-4 rounded-lg">Device to ODRE-E Hours</p>
                    <div className="p-4 rounded-lg">
                      <p className="font-bold text-lg underline">100 in last 24 Hours</p>
                      <p>10000 in last 7 days</p>
                      <p>100000 in last 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Main>
      </main>
    </>
  );
}
