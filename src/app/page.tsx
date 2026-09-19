import Image from "next/image";
import Link from "next/link";
import { DiVisualstudio } from "react-icons/di";
import { FaClipboardList, FaJava } from "react-icons/fa";
import { SiCss, SiDocker, SiGit, SiGithub, SiHtml5, SiIntellijidea, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import BoxLink from "../components/BoxLinks";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row flex-1 text-white px-2 xl:px-10 py-4">


      <div className="flex flex-col w-full items-center min-w-90 xl:w-2/10">
        <div className="flex lg:pl-10">
          <div className="w-70 h-70 border-2 rounded-full overflow-hidden">
            <Image src="/perfil.jpeg" alt="perfil" loading="eager" width={200} height={200} className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="flex flex-col justify-baseline pl-10 pr-10 py-5 gap-4">
          <div className="border-b border-gray-400 py-2">
            <h1 className="text-4xl font-bold">(MekeDev)</h1>
            <h1 className="text-xl">Luis Filipe Silva</h1>
          </div>

          <h1 className="text-2xl">Redes:</h1>

          <Link href="https://www.linkedin.com/in/luis-filipe-6b2313429/" className="flex gap-2 items-center">
            <div className="bg-white p-1">
              <SlSocialLinkedin size={20} className="text-gray-900"/>
            </div>
            <h1>luis-filipe-6b2313429</h1>
          </Link>
          <Link href="https://www.instagram.com/mekedev/" className="flex gap-2 items-center">
            <div className="bg-white p-1">
              <SlSocialInstagram size={20} className="text-gray-900"/>
            </div>
            <h1>instagram.com/mekedev</h1>
          </Link>
          <Link href="https://github.com/Meke04" className="flex gap-2 items-center border-b border-gray-400 pb-4">
            <div className="bg-white p-1">
              <SlSocialGithub size={20} className="text-gray-900"/>
            </div>
            <h1>github.com/Meke04</h1>
          </Link>

          <h1 className="text-2xl">Organizações:</h1>

          <Link href="https://www.ufv.br/" className="flex gap-2 items-center border-b border-gray-400 pb-4">
            <div className="bg-white p-1">
              <h1 className="text-gray-900">UFV</h1>
            </div>
          </Link>

        </div>
      </div>

      <div className="flex flex-col border border-gray-400 rounded-xl p-4 lg:p-8 xl:w-8/10">
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col w-full gap-4 xl:w-2/4">

            <h1 className="text-2xl font-bold">Olá! Bem-vindo(a) ao meu portfólio.</h1>
            <h1 className="text-xl">Me chamo Luis Filipe Silva, sou estudante de Engenharia Mecânica pela UFV e estudante de Full Stack Java pela EBAC. Gosto de passar meu tempo transformando ideias diferentes em código.</h1>
            <h1 className="text-xl">Atualmente, aprimorando meus conhecimentos e habilidades na integração entre Front-end e Back-end.</h1>
            <h1 className="text-md">Quer entrar em contato comigo? Seguem abaixo os meus meios de contato.</h1>
            
            <Link href="/contato" className="relative w-fit rounded-2xl border border-gray-200 overflow-hidden">

              <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(transparent_0deg,transparent_300deg,#36FF02_360deg)] animate-[spin_4s_linear_infinite] "/>

              <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#36FF02_360deg)] animate-[spin_4s_linear_infinite] "/>

              <div className="flex flex-col relative m-px p-2 rounded-2xl bg-black gap-3">
                <h1>Contato</h1>
              </div>

          </Link>

            

            {/* <div className="flex flex-wrap gap-2">
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=luismekedev@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20entrar%20em%20contato." target="_blank" rel="noopener noreferrer" className="flex items-center">
                <div className="flex gap-2 bg-red-700 p-2">
                  <SiGmail size={20} />
                  <h1>GMAIL</h1>
                </div>
              </Link>
              <Link href="https://wa.me/5531997644499" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <div className="flex gap-2 bg-green-600 p-2">
                  <FaWhatsapp size={20} />
                  <h1>WHATSAPP</h1>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/luis-filipe-6b2313429/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <div className="flex gap-2 bg-blue-400 p-2">
                  <FaLinkedin size={20} />
                  <h1>LINKEDIN</h1>
                </div>
              </Link>
            </div> */}
          </div>




          <div className="hidden xl:block w-2/4 pl-20 2xl:pl-40">
            <Link href="https://storyset.com/technology">
              <Image src="/foto1.png" alt="foto1" loading="eager" height={1000} width={1000} className="h-75 w-75" />
            </Link>
          </div>
        </div>

        <div className="py-6">
          <hr className="border-b border-gray-300"/>
        </div>

        <div className="flex flex-col gap-6">

          <h1 className="text-2xl">Minhas Skills:</h1>

          <div className="flex flex-wrap gap-2">

            <BoxLink href={"https://nodejs.org/"} name={"Node.js"} icon={SiNodedotjs} color={"#339933"}/>

            <BoxLink href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} name={"JavaScript"} icon={SiJavascript} color={"#F7DF1E"}/>

            <BoxLink href={"https://react.dev/"} name={"React"} icon={SiReact} color={"#61DAFB"}/>

            <BoxLink href={"https://nextjs.org/"} name={"Next.js"} icon={SiNextdotjs} color={"#000000"}/>

            <BoxLink href={"https://www.typescriptlang.org/"} name={"TypeScript"} icon={SiTypescript} color={"#3178C6"}/>

            <BoxLink href={"https://tailwindcss.com/"} name={"Tailwind"} icon={SiTailwindcss} color={"#06B6D4"}/>

            <BoxLink href={"https://developer.mozilla.org/en-US/docs/Web/HTML"} name={"Html"} icon={SiHtml5} color={"#E34F26"}/>

            <BoxLink href={"https://developer.mozilla.org/en-US/docs/Web/CSS"} name={"Css"} icon={SiCss} color={"#1572B6"}/>

            <BoxLink href={"https://www.mysql.com/"} name={"MySQL"} icon={SiMysql} color={"#4479A1"}/>

            <BoxLink href={"https://www.postgresql.org/"} name={"Postgresql"} icon={SiPostgresql} color={"#4169E1"}/>

            <BoxLink href={"https://www.java.com/"} name={"JAVA"} icon={FaJava} color={"#007396"}/>
            
          </div>

          <h1 className="text-2xl">DevOps:</h1>

          <div className="flex gap-2">

            <BoxLink href={"https://git-scm.com/"} name={"Git"} icon={SiGit} color={"#F05032"}/>

            <BoxLink href={"https://github.com/"} name={"GitHub"} icon={SiGithub} color={"#181717"}/>

            <BoxLink href={"https://www.docker.com/"} name={"Docker"} icon={SiDocker} color={"#2496ED"}/>

          </div>

          <h1 className="text-2xl">Ferramentas:</h1>

          <div className="flex gap-2">

            <BoxLink href={"https://www.jetbrains.com/idea/"} name={"Intellijdea"} icon={SiIntellijidea} color={"#FE315D"}/>

            <BoxLink href={"https://code.visualstudio.com/"} name={"VSCode"} icon={DiVisualstudio} color={"#007ACC"}/>

          </div>
        </div>

        <div className="py-6">
          <hr className="border-b border-gray-300"/>
        </div>

        <h1 className="text-2xl">Projetos:</h1>

        <div className="flex flex-wrap pt-4 gap-2">

          <Link href="/enki" className="relative rounded-2xl border border-gray-200 overflow-hidden">

            <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(transparent_0deg,transparent_300deg,#a855f7_360deg)] animate-[spin_4s_linear_infinite] "/>

            <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#a855f7_360deg)] animate-[spin_4s_linear_infinite] "/>

            <div className="flex flex-col relative m-px p-2 rounded-2xl bg-black gap-3">
              <div className="flex items-center gap-1">
                <Image src="/LogoEnki.png" alt="Logo Enki" width={42} height={42} className="w-10.5 h-10.5 drop-shadow-[0_0_18px_rgba(124,58,237,0.35)]" />
                <h1 className="bg-linear-to-r from-white via-violet-300 to-sky-400 bg-clip-text text-2xl font-bold tracking-wide text-transparent" > ENKI </h1>
              </div>
              <p className="text-xl">Um site criado pare a remoção<br/> de fundos de imagens.</p>
              <p className="hover:underline">clique para saber mais.</p>
            </div>

          </Link>

          <Link href="/msflogistica" className="relative rounded-2xl border border-gray-200 overflow-hidden">

            <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(transparent_0deg,transparent_300deg,#22c55e_360deg)] animate-[spin_4s_linear_infinite] "/>

            <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#22c55e_360deg)] animate-[spin_4s_linear_infinite] "/>

            <div className="flex flex-col relative m-px p-2 rounded-2xl bg-black gap-3">
              <div className="flex items-center gap-1">
                <Image src="/LogoHDI.png" alt="Logo" width={42} height={42} className="w-10.5 h-10.5" />
              </div>
              <p className="text-xl">Um site criado para uma transportadora<br/> de cargas diversas.</p>
              <p className="hover:underline">Clique para saber mais.</p>
            </div>

          </Link>

          <Link href="/lista" className="relative rounded-2xl border border-gray-200 overflow-hidden">

            <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(transparent_0deg,transparent_300deg,#9C3525_360deg)] animate-[spin_4s_linear_infinite] "/>

            <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#9C3525_360deg)] animate-[spin_4s_linear_infinite] "/>

            <div className="flex flex-col relative m-px p-2 rounded-2xl bg-black gap-3">
              <div className="flex items-center gap-1">
                <FaClipboardList className="w-10.5 h-10.5"/>
              </div>
              <p className="text-xl">Uma atividade desenvolvida durante<br/> meu curso de Front-End na EBAC.</p>
              <p className="hover:underline">Clique para saber mais.</p>
            </div>

          </Link>
          

        </div>
      </div>


    </main>
  );
}


