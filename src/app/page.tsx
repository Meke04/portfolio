import Image from "next/image";
import Link from "next/link";
import { DiVisualstudio } from "react-icons/di";
import { FaJava, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiCss, SiDocker, SiGit, SiGithub, SiGmail, SiHtml5, SiIntellijidea, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

export default function Home() {
  return (
    <main className="flex flex-1 text-white px-10 py-4">


      <div className="flex flex-col w-2/5">
        <div className="flex pl-55">
          <div className="w-70 h-70 border-2 rounded-full overflow-hidden">
            <Image src="/perfil.jpeg" alt="perfil" loading="eager" width={200} height={200} className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="flex flex-col justify-baseline pl-50 pr-30 py-5 gap-4">
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


      <div className="flex flex-col border border-gray-400 p-8 w-4/5">
        <div className="flex">
          <div className="flex flex-col gap-4 w-2/4">

            <h1 className="text-2xl font-bold">Olá, Bem vindo(a) ao meu portfolio</h1>
            <h1 className="text-xl">Me chamo Luis Filipe Silva, sou estudante de engenharia mecanica pela UFV e estudante full stack java pela EBAC, gosto de passar meu tempo tentando passar ideias diferentes para codigos</h1>
            <h1 className="text-xl">Atualmente aprimorando meus conhecimentos e habilidades na conexão entre Front-end e Back-end</h1>
            <h1 className="text-md">Quer entrar com econtato comigo? Segue abaixo os meus meios de contato.</h1>

            <div className="flex gap-2">
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
            </div>
          </div>

          <div className="w-2/4 relative">
            <Link href="https://storyset.com/technology">
              <Image src="/foto1.png" alt="foto1" height={1000} width={1000} className="h-90 w-90 absolute top-[-30] right-20" />
            </Link>
          </div>
        </div>

        <div className="py-6">
          <hr className="border-b border-gray-300"/>
        </div>

        <div className="flex flex-col gap-6">

          <h1 className="text-2xl">Minhas Skills:</h1>

          <div className="flex gap-2">

            <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#339933] p-1">
                <SiNodedotjs size={20} />
                <h1>Node.js</h1>
              </div>
            </Link>

            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#F7DF1E] p-1">
                <SiJavascript size={20} />
                <h1>JavaScript</h1>
              </div>
            </Link>

            <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#61DAFB] p-1">
                <SiReact size={20} />
                <h1>React</h1>
              </div>
            </Link>

            <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#000000] p-1">
                <SiNextdotjs size={20} />
                <h1>Next.js</h1>
              </div>
            </Link>

            <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#3178C6] p-1">
                <SiTypescript size={20} />
                <h1>TypeScript</h1>
              </div>
            </Link>

            <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#06B6D4] p-1">
                <SiTailwindcss size={20} />
                <h1>Tailwind</h1>
              </div>
            </Link>

            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#E34F26] p-1">
                <SiHtml5 size={20} />
                <h1>Html</h1>
              </div>
            </Link>

            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#1572B6] p-1">
                <SiCss size={20} />
                <h1>Css</h1>
              </div>
            </Link>

            <Link href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#4479A1] p-1">
                <SiMysql size={20} />
                <h1>MySQL</h1>
              </div>
            </Link>

            <Link href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#4169E1] p-1">
                <SiPostgresql size={20} />
                <h1>Postgresql</h1>
              </div>
            </Link>

            <Link href="https://www.java.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#007396] p-1">
                <FaJava size={20} />
                <h1>JAVA</h1>
              </div>
            </Link>
          </div>

          <h1 className="text-2xl">DevOps:</h1>

          <div className="flex gap-2">

            <Link href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#F05032] p-1">
                <SiGit size={20} />
                <h1>Git</h1>
              </div>
            </Link>

            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#181717] p-1">
                <SiGithub size={20} />
                <h1>GitHub</h1>
              </div>
            </Link>

            <Link href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#2496ED] p-1">
                <SiDocker size={20} />
                <h1>Docker</h1>
              </div>
            </Link>

          </div>

          <h1 className="text-2xl">Ferramentas:</h1>

          <div className="flex gap-2">

            <Link href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#FE315D] p-1">
                <SiIntellijidea size={20} />
                <h1>Intellijdea</h1>
              </div>
            </Link>

            <Link href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="flex gap-2 bg-[#007ACC] p-1">
                <DiVisualstudio size={20} />
                <h1>VSCode</h1>
              </div>
            </Link>

          </div>
        </div>

        <div className="py-6">
          <hr className="border-b border-gray-300"/>
        </div>

        <h1 className="text-2xl">Projetos:</h1>

        <div className="flex pt-4 gap-2">
          <Link href="/enki" className="bg-purple-600 hover:bg-purple-800 py-1 px-1.5 text-2xl">Enki</Link>
          <Link href="https://transportadora-naty.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 py-1 px-1.5 text-2xl">NSF Transportadora</Link>
        </div>
      </div>


    </main>
  );
}
