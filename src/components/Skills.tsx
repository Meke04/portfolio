import { DiVisualstudio } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiCss, SiDocker, SiGit, SiGithub, SiHtml5, SiIntellijidea, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import BoxLink from "../components/BoxLinks";

export default function Skills(){
    return(
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
    );
}