import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import ProjectCard from "../../components/projectCard";

export default function ProjectsIndex() {


    return (
    <Layout>
        <Head>
            <title>Projects</title>
        </Head>
        <div className="flex flex-col">
            <ProjectCard title="MVP Web and Mobile App for Transplant Center" description={
            <>
                Led a dynamic 10-member 
            software engineering team in spearheading the development of a highly successful Minimum Viable Product (MVP). 
            My role involved fostering effective client communication, setting clear goals, and actively contributing to the 
            hands-on development of cloud, web, mobile, and backend solutions. Leveraging technologies such as AWS, React, 
            React Native, PostgreSQL, NodeJS, and AWS, the MVP achieved notable success, prompting the Transplant Center to continue its development.
            <br /><br />The web application empowers the Transplant Center to efficiently manage patients, donors, and organ transplants. 
            Simultaneously, the mobile app provides patients with the capability to manage appointments, medications, and 
            communicate seamlessly with the Transplant Center. Additionally, the incorporation of the GPT API enhances user 
            interaction by addressing frequently asked questions.
            </>}
            src_media="/images/webTrasplantes.png" 
            src_media2="/images/webTrasplantes2.png"/>
        </div>
    </Layout>
    );
  }
  