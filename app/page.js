import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
    <Layout>
    <div className="cards"> 
      
        {/* HERO SECTION */}
        <article className="card">
            <header>
              <h1 className="text-3xl font-bold text-green-800">
              {`Révolutionnez l'Agriculture avec l'IA`} 🚀
              </h1>
            </header>
            <Image
                src="/images/green-crop-field.jpg"
                alt="Green crop field"
                width={800} 
                height={500}/>
            <div className="content">
              <p className="mt-4 text-lg md:text-xl">
              {`Des solutions SaaS intelligentes pour une agriculture plus performante et durable. Ci-après 3 exemples de solutions IA 
              pour l'agriculture en cours de constructions:`}
              </p>
              <p>
            <Link href="https://testai-app-app-intelligent-soil-analysis-optimize-crops-jtx9km.streamlit.app/">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Modele IA pour l'analyse des sols
                </button>
            </Link>
            </p>
            <p></p>
            <p>
            <Link href="https://testai-app-app-irrigation-optimization-l7dlvx8fqzagsy8tuacaed.streamlit.app/">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Modele IA pour optimiser l'irrigation
                </button>
            </Link>
            </p>
            </div>
            
            <footer>
              <Link href="/contact">
                <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
                Contactez-nous
                </button>
              </Link>
            </footer>
            
        </article>

        {/* NOS SOLUTIONS */}
        <article className="card">
          <header>
            <h1 className="text-3xl font-bold text-green-800">{`Nos solutions IA pour l’agriculture`}</h1>
          </header>
          <Image
                src="/images/farmer-inspecting-health-crops-using.jpg"
                alt="farmer inspecting health crops"
                width={800} 
                height={500} />
          <div className="grid md:grid-cols-3 gap-8 mt-8 content">
            {[
              { title: "Détection des maladies", desc: "Analyse des cultures en temps réel avec l'IA.", icon: "🌱" },
              { title: "Optimisation des rendements", desc: "Prédiction et gestion des cultures.", icon: "📊" },
              { title: "Gestion intelligente des ressources", desc: "Réduction des pertes et meilleure utilisation.", icon: "🚜" },
            ].map((item, index) => (
              <div key={index} className="bg-green-100 p-6 rounded-lg shadow-lg">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* POURQUOI NOUS CHOISIR */}
        <article className="card">
          <header>
            <h1 className="text-3xl font-bold text-green-800">{`Pourquoi nous choisir ?`}</h1>
          </header>
          <Image
                src="/images/sonar-panels-green-crops-field.jpg"
                alt="Sonar panels green crops field" 
                width={800} 
                height={500}/>
          <div className="container mx-auto grid md:grid-cols-3 gap-8 mt-8 px-6 content">
            {[
              { title: "Technologie avancée", desc: "Des algorithmes puissants pour des résultats précis.", icon: "⚡" },
              { title: "Éco-responsabilité", desc: "Nous aidons à réduire l'empreinte écologique.", icon: "🌍" },
              { title: "Support dédié", desc: "Un accompagnement sur mesure pour chaque agriculteur.", icon: "📞" },
            ].map((item, index) => (
              <div key={index} className="bg-green-200 p-6 rounded-lg shadow-lg">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* APPEL À L'ACTION */}
        <article className="card">
          <header>
            <h1 className="text-3xl font-bold text-green-800">{`Prêt à transformer votre exploitation ?`}</h1>
          </header>
          <Image
                src="/images/tractor-green-grass-field.jpg"
                alt="Tractor green grass field"
                width={800} 
                height={500} />
          <div className="content">
            <p className="mt-4 text-lg text-gray-600">
            {`Découvrez comment l'IA peut optimiser vos rendements agricoles.`}
            </p>
          </div>
          <footer>
            <Link href="/contact">
              <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">
              {`Demander une démo`}
              </button>
            </Link>
          </footer>
        </article>
    </div>
    </Layout>
    </>
  );
}
