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
            <ProjectCard title="MVP Web and Mobile App for Transplant Center" description="Spearheaded a 10-member 
            software engineering team for a MVP, ensuring effective client communication, goal-setting, 
            and hands-on development of cloud, web, mobile, and backend solutions using AWS, React, React Native, and NodeJS." 
            src_media="/images/profileAle.jpg" />
        </div>
    </Layout>
    );
  }
  