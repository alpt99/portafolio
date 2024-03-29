// import '../styles/globals.css'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';


export default function Home() {
  return (
    <Layout>
        <div className='grid grid-cols-3 gap-4 py-16 my-8'>
          <div className='col-span-2 m-16'>
            <div className='text-center font-bold text-lg m-4 p-4 sm:text-lg md:text-5xl'>Software Engineer</div>
            <div className='text-justify text-xs md:text-base p-4'>
            Hi, I'm <span className="font-bold">Alejandro López Torres</span>. My enthusiasm for learning has always fueled my pursuit of a career as a software engineer. 
            This field demands constant adaptation to evolving technologies, 
            which aligns seamlessly with my strongest attribute—my eagerness to learn. 
            I actively seek new challenges and opportunities to continuously grow as a professional. 
            With my skills, I aspire to contribute to the realization of your goals, 
            exceeding expectations. For any inquiries, please don't hesitate to reach out to me on LinkedIn.
            </div>
            <div className='m-2 text-secondary flex flex-row'>
              <Link className='' href="https://www.linkedin.com/in/alejandro-l%C3%B3pez-torres-35b06920a/">
                <Image src={"icons/icon-linkedin.svg"} width={50} height={50} />
              </Link>
              <Link className='' href="https://github.com/alpt99">
                <Image src={"icons/icon-github.svg"} width={50} height={50} />
              </Link>
            </div>
            <div className='mt-16 p-4 flex flex-row flex-wrap justify-evenly'>
              <span className='font-bold'>TechStack |</span> 
              <Image src={"icons/icon-javascript.svg"} width={30} height={30} />
              <Image src={"icons/icon-typescript.svg"} width={30} height={30} />
              <Image src={"icons/icon-python.svg"} width={30} height={30} />
              <Image src={"icons/icon-react.svg"} width={30} height={30} />
              <Image src={"icons/icon-nextjs.svg"} width={30} height={30} />
              <Image src={"icons/icon-nodejs.svg"} width={30} height={30} />
              <Image src={"icons/icon-tailwindcss.svg"} width={30} height={30} />
              <Image src={"icons/icon-docker.svg"} width={30} height={30} />
              <Image src={"icons/icon-aws.svg"} width={30} height={30} />
              <Image src={"icons/icon-gcp.svg"} width={30} height={30} />
            </div>
          </div>
          <div className='my-16 relative'>
            <div className="absolute top-[-5%] left-[-5%] w-[85%] h-[70%] bg-gradient-to-br from-secondary to-neutral-content z-0 rounded-xl"></div>
            <Image
              src="/images/profileAle2.jpg"
              alt="Alejandro López"
              width={400}
              height={400}
              className='absolute rounded-2xl z-10'
            />
          </div>
        </div>
    </Layout>
  );
}
