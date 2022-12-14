import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <script defer src="/node_modules/js/brands.js"></script>
        <script defer src="/node_modules/js/solid.js"></script>
        <script defer src="/node_modules/js/fontawesome.js"></script>
      </Head>

      <main className="flex-col items-center text-center justify-center ">
        <div className="bg-paleYellow text-center flex justify-center">
          <h1 className="text-goldText text-center py-2">
            Get the juice on the latest in tech
          </h1>
          <div className="flex place-content-between">
          <div className="flex-row flex gap-5">
            <h1>fyi</h1>
            
            <input placeholder="Search by Company, Title, City"/>
          </div>
          <div>
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        </div>
         
            
        
         
        </div>

    
      </main>
    </>
  );
};

export default Home;
