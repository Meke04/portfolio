import ButtonReturn from "@/components/ButtonReturn";
import Image from "next/image";

export default function enki() {


    return(
        <main className="flex bg-black text-white p-4 xl:p-8">

            <ButtonReturn />

            <div className="flex flex-col-reverse xl:flex-row w-full">
                <div className="flex flex-col w-full xl:w-1/2 gap-4">

                    <div className="flex xl:p-10">
                        <Image src="/lista.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                </div>

                <div className="flex flex-col w-full xl:w-1/2 p-4 xl:p-10 gap-4 text-2xl bg-gray-900 shadow-[0_0_5px_rgb(255,255,255,0.9)]  text-white">

                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold">Bem-vindo à apresentação do site da Lista de Tarefas</h1>
                    </div>

                    <h1>Projeto desenvolvido como uma das atividades do curso de Front-End da EBAC, com o objetivo de colocar em prática conceitos de desenvolvimento utilizando Next.js e TypeScript.</h1>

                    <h1>A proposta era criar uma aplicação simples de gerenciamento de tarefas, permitindo ao usuário adicionar novas tarefas, marcar tarefas como concluídas e removê-las da lista.</h1>

                    <h1>Durante o desenvolvimento, também foram trabalhados conceitos como componentes Server e Client, hooks personalizados, gerenciamento de estado e testes unitários utilizando Jest e Testing Library.</h1>

                    <h1>O projeto foi uma oportunidade para praticar não apenas a construção da interface, mas também a organização do código e criação de testes para garantir o funcionamento dos principais recursos da aplicação.</h1>

                    <h1>Um projeto desenvolvido durante minha formação em Front-End, colocando em prática conceitos importantes para o desenvolvimento de aplicações web modernas.</h1>

                </div>

            </div>
        </main>
    );
}