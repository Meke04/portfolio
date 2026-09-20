import Skills from "@/components/Skills";
import Profile from "@/components/Profile";
import Introduction from "@/components/Introduction";
import BoxProject from "@/components/BoxProjects";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row flex-1 text-white py-4">
      
      <Profile />

      <div className="flex flex-col border border-gray-400 rounded-xl xl:13/14 p-4 lg:p-8">
        
        <Introduction />

        <div className="py-6">
          <hr className="border-b border-gray-300"/>
        </div>

        <Skills />

        <div className="py-6">
          <hr className="border-b border-gray-300"/>
        </div>

        <h1 className="text-2xl">Projetos:</h1>
              
        <div className="flex flex-wrap pt-4 gap-2">
  
          <BoxProject href={"/enki"} alt="enki" name={"ENKI"} description="Um site criado pare a remoção de fundos de imagens." src="/LogoEnki.png" color="#a855f7" />

          <BoxProject href={"/msflogistica"} alt="msf" description="Um site criado para uma transportadora de cargas diversas." src="/LogoHDI.png" color="#22c55e" />

          <BoxProject href={"/lista"} alt="lista" description="Uma atividade desenvolvida durante meu curso de Front-End na EBAC." src="/list.png" color="#9C3525" />
  
        </div>
      </div>

    </main>
  );
}


