import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function ProjectsIndex() {
    return (
    <Layout>
        <Head>
            <title>Projects</title>
        </Head>
        <div className="">
            <h1 className="text-2xl border-black border-2">All the projects are here</h1>
            <Link href="/">Go back home </Link>
        </div>
    </Layout>
    );
  }
  