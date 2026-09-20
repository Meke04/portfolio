import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return(
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

          </div>

          <div className="hidden xl:block w-2/4 pl-20 2xl:pl-40">
            <Link href="https://storyset.com/technology">
              <Image src="/foto1.png" alt="foto1" loading="eager" height={1000} width={1000} className="h-75 w-75" />
            </Link>
          </div>
        </div>
    );
}