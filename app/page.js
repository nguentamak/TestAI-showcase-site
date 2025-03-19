import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
    <Layout>
    <div className="cards">

        {/* AI Development & Integration Services SECTION */}
        <article className="card">
            <header>
              <h1 className="text-3xl font-bold text-green-800">
              {`AI Development & Integration Services`}
              </h1>
            </header>
            <Image
                src="/images/AI Development Integration.jpg"
                alt="Green crop field"
                width={800} 
                height={500}/>
            <div className="content">
              <p className="mt-4 text-lg md:text-xl">
              {`AI Agent & Chatbot Development`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI App Development`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI API Integration`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI Model Development`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`MLOps`}
              </p>
            </div>

            <footer>
              <Link href="/contact">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Contact us
                </button>
              </Link>
            </footer>
            
        </article>

        {/* Generative AI Services SECTION */}
        <article className="card">
            <header>
              <h1 className="text-3xl font-bold text-green-800">
              {`Generative AI Services`}
              </h1>
            </header>
            <Image
                src="/images/Generative AI.jpg"
                alt="Green crop field"
                width={800} 
                height={500}/>
            <div className="content">
              <p className="mt-4 text-lg md:text-xl">
              {`AI Image Generation & Editing`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI Speech & Audio Generation`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI Video Generation & Editing`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI Content Editing`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI Content Writing`}
              </p>
            </div>

            <footer>
              <Link href="/contact">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Contact us
                </button>
              </Link>
            </footer>
            
        </article>

         {/* AI Data Services SECTION */}
         <article className="card">
            <header>
              <h1 className="text-3xl font-bold text-green-800">
              {`AI Data Services`}
              </h1>
            </header>
            <Image
                src="/images/AI Data.jpg"
                alt="Green crop field"
                width={800} 
                height={500}/>
            <div className="content">
              <p className="mt-4 text-lg md:text-xl">
              {`Data Annotation & Labeling`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`Data Mining & Cleaning`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`Knowledge Representation`}
              </p>
            </div>

            <footer>
              <Link href="/contact">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Contact us
                </button>
              </Link>
            </footer>
            
        </article>

         {/* AI Compliance, Training & Tutoring Services SECTION */}
         <article className="card">
            <header>
              <h1 className="text-3xl font-bold text-green-800">
              {`AI Compliance, Training & Tutoring Services`}
              </h1>
            </header>
            <Image
                src="/images/AI Compliance.jpg"
                alt="Green crop field"
                width={800} 
                height={500}/>
            <div className="content">
              <p className="mt-4 text-lg md:text-xl">
              {`AI Compliance`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI Training`}
              </p>
              <p className="mt-4 text-lg md:text-xl">
              {`AI Tutoring`}
              </p>
            </div>

            <footer>
              <Link href="/contact">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Contact us
                </button>
              </Link>
            </footer>
            
        </article>

        {/* HERO SECTION */}
        <article className="card">
            <header>
              <h1 className="text-3xl font-bold text-green-800">
              {`Revolutionize Agriculture with AI`} 🚀
              </h1>
            </header>
            <Image
                src="/images/green-crop-field.jpg"
                alt="Green crop field"
                width={800} 
                height={500}/>
            <div className="content">
              <p className="mt-4 text-lg md:text-xl">
              {`Intelligent SaaS solutions for more efficient and sustainable agriculture. Below are three examples of AI solutions 
              currently under construction for agriculture:`}
              </p>
              <p>
            <Link href="https://testai-app-app-intelligent-soil-analysis-optimize-crops-jtx9km.streamlit.app/">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                {`1-AI model for soil analysis`}
                </button>
            </Link>
            </p>
            <p></p>
            <p>
            <Link href="https://testai-app-app-irrigation-optimization-l7dlvx8fqzagsy8tuacaed.streamlit.app/">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                {`2-AI model to optimize irrigation`}
                </button>
            </Link>
            </p>
            <p></p>
            <p>
            <Link href="https://testai-app-app-optimized-feeding-model-r7n2uyjmguc69rwz9umgp5.streamlit.app/">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                {`3-AI model to optimize food`}
                </button>
            </Link>
            </p>
            </div>
            <p>Tel: +33 07 52 88 00 95</p>
    <p>Email: ngue.ntamak@gmail.com </p>
            <footer>
              <Link href="/contact">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Contact us
                </button>
              </Link>
            </footer>
            
        </article>
      
    </div>
    </Layout>
    </>
  );
}
