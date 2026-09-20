import ButtonReturn from "@/components/ButtonReturn";
import Image from "next/image";
import Link from "next/link";

export default function enki() {


    return(
        <main className="flex bg-black text-white p-4 xl:p-8">

            <ButtonReturn />

            <div className="flex flex-col-reverse xl:flex-row w-full">
                <div className="flex flex-col w-full xl:w-1/2 gap-4">

                    <div className="flex pt-4 xl:p-10">
                        <Image src="/MSFHome.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                    <div className="flex xl:p-10">
                        <Image src="/MSFSobre1.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                    <div className="flex xl:p-10">
                        <Image src="/MSFSobre2.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                    <div className="flex xl:p-10">
                        <Image src="/MSFContato.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                </div>

                <div className="flex flex-col w-full xl:w-1/2 p-4 xl:p-10 gap-4 text-2xl bg-gray-900 shadow-[0_0_5px_rgb(255,255,255,0.9)]  text-white">

                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold">Bem-vindo à apresentação do site da MSF Logística</h1>
                    </div>

                    <h1>O site da MSF Logística foi desenvolvido para um cliente, com o objetivo de criar uma presença digital para a empresa e apresentar de forma clara seus serviços, sua atuação e suas informações de contato.</h1>

                    <h1>Durante o desenvolvimento, foi criada uma Landing Page responsiva, buscando proporcionar uma experiência simples e intuitiva para os visitantes, tanto em computadores quanto em dispositivos móveis.</h1>

                    <h1 className="text-4xl px-4 font-bold">Principais funcionalidades:</h1>

                    <h1>O site foi desenvolvido com diferentes seções para apresentar a empresa e facilitar o acesso às suas principais informações, incluindo:</h1>

                    <ul className="p-4">
                        <li>- Apresentação da empresa e de sua atuação</li>
                        <li>- Divulgação dos serviços oferecidos</li>
                        <li>- Área dedicada à apresentação de futuros investimentos</li>
                        <li>- Informações e formas de contato</li>
                        <li>- Mapa para facilitar a localização da empresa</li>
                        <li>- Layout responsivo para diferentes dispositivos</li>
                    </ul>

                    <h1 className="text-4xl px-4 font-bold">Estrutura do projeto</h1>

                    <h1>O projeto foi desenvolvido utilizando Next.js, TypeScript e Tailwind CSS, buscando uma estrutura organizada e moderna para a construção da interface.</h1>

                    <h1>Durante o desenvolvimento, foram aplicados conceitos de componentização, responsividade e organização de estilos, além da preocupação com a experiência do usuário e a apresentação das informações da empresa.</h1>

                    <h1 className="text-4xl px-4 font-bold">Tecnologias utilizadas:</h1>

                    <ul className="p-4">
                        <li>- Next.js</li>
                        <li>- TypeScript</li>
                        <li>- React</li>
                        <li>- Tailwind CSS</li>
                    </ul>

                    <h1 className="text-4xl px-4 font-bold">Objetivo do projeto:</h1>

                    <h1>A principal proposta do site é funcionar como um canal de apresentação da MSF Logística, permitindo que visitantes conheçam a empresa, seus serviços, seus projetos e encontrem facilmente formas de entrar em contato.</h1>

                    <h1>Além da apresentação institucional, o site também possui uma área destinada à divulgação de futuros investimentos, permitindo que a empresa utilize a plataforma para apresentar novos projetos e iniciativas.</h1>

                    <h1 className="text-4xl px-4 font-bold">Experiência:</h1>

                    <h1>Este projeto foi uma experiência importante por representar um dos meus primeiros trabalhos desenvolvidos para um cliente real.</h1>

                    <h1>Durante o desenvolvimento, pude colocar em prática conhecimentos de desenvolvimento Front-end, além de adquirir experiência com a construção de uma aplicação pensando nas necessidades de uma empresa e de seus usuários.</h1>

                    <h1>O projeto também proporcionou contato com diferentes etapas do desenvolvimento de um site, desde a construção da interface até a publicação e configuração do projeto para utilização em produção.</h1>

                    <h1 className="text-4xl px-4 font-bold">Situação atual</h1>

                    <h1>Atualmente, o site encontra-se publicado e disponível para utilização pela empresa.</h1>

                    <h1>Para acessar: <Link className="underline underline-offset-2 text-blue-300 hover:text-blue-400" href="https://msflogistica.com.br/">MSFLogistica</Link></h1>

                </div>

            </div>
        </main>
    );
}