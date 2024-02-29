// import '../styles/globals.css'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';


export default function Home() {
  return (
    <Layout>
        <div className='grid grid-cols-3 gap-4  py-16 my-8'>
          <div className='col-span-2 m-16'>
            <div className='text-center text-4xl text-sky-700 m-4 p-4'>Alejandro López Torres</div>
            <div className='text-justify p-4'>
            My enthusiasm for learning has always fueled my pursuit of a career as a software engineer. 
            The nature of this field demands constant adaptation to evolving technologies and the enhancement of existing skills, 
            which aligns seamlessly with my strongest attribute—my eagerness to learn. 
            I actively seek fresh challenges and opportunities to continuously grow as a professional. 
            With my skill set and unwavering commitment, I aspire to contribute to the realization of your goals, 
            exceeding expectations. For any inquiries, please don't hesitate to reach out to me on LinkedIn.
            </div>
            <div className='p-4'>
              Skills: JavaScript | TypeScript | Python | C# | React | Next.js | Node.js | Express | PostgreSQL | HTML | CSS | TailwindCSS 
              | Git | GitHub | Slack | Figma | Trello | Docker | AWS | GCP |
            </div>
            <div className='p-4'>Linkedin</div>
          </div>
          <div className='my-16'>
            <Image
              src="/images/profileAle.jpg"
              alt="Alejandro López"
              width={400}
              height={400}
              className='rounded-full'
            />
          </div>
        </div>
    </Layout>
  );
}
