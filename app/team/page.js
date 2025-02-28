import Layout from "../../components/Layout";
import "../../app/globals.css";

const Team = () => {
    return (<Layout>
                    <h1 className="text-2xl font-bold">{`Rencontrez notre équipe`}</h1>
                    <div className="media">
                          <div className="image">
                              <img
                                alt="A colorful balloon against a blue sky"
                                src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
                          </div>
                          <div className="content">
                              <div className="grid md:grid-cols-3 gap-8 mt-8 content">
                                  {[
                                    { title: "Serge Ngue – Fondateur & CEO", 
                                      desc: "Avec plus de 15 ans d’expérience en Data & Intelligence Artificielle, Serge Ngue est un passionné de l’innovation technologique appliquée à des enjeux concrets. Après avoir dirigé des projets stratégiques en data science, machine learning et transformation digitale au sein de grandes entreprises, il décide de mettre son expertise au service du secteur agricole.",
                                      icon: "" },
                                    { title: "", 
                                      desc: "Convaincu que l’IA peut révolutionner l’agriculture, il fonde Serge Ngue avec une mission claire : apporter des solutions intelligentes et accessibles aux agriculteurs et acteurs du secteur agroalimentaire. Son objectif est d'exploiter la puissance des données pour améliorer la productivité, la durabilité et la résilience des exploitations agricoles face aux défis climatiques et économiques.", 
                                      icon: "" },
                                    { title: "", 
                                      desc: "Grâce à sa vision stratégique et son expertise technique, il dirige le développement de solutions SaaS innovantes qui transforment la gestion agricole en un processus plus précis, efficace et optimisé par l’IA.",
                                      icon: "" },
                                  ].map((item, index) => (
                                    <div key={index} className="bg-green-100 p-6 rounded-lg shadow-lg">
                                      <span className="text-4xl">{item.icon}</span>
                                      <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                                      <p className="mt-4">{item.desc}</p>
                                    </div>
                                  ))}
                             </div>
                          </div>
                    </div>
            </Layout>);
  };
  
  export default Team;
  