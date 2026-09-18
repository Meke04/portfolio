import Image from "next/image";
import Link from "next/link";

export default function enki() {


    return(
        <main className="flex bg-black text-white p-4 xl:p-8">

            <div className="fixed bottom-10 right-10 hover:-translate-y-1">
                <Link href="/" className="relative block rounded-2xl border border-gray-200 overflow-hidden">

                    <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(transparent_0deg,transparent_300deg,#48D6C9_360deg)] animate-[spin_4s_linear_infinite] "/>

                    <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#48D6C9_360deg)] animate-[spin_4s_linear_infinite] "/>

                    <div className="flex flex-col relative m-0.5 p-2 rounded-2xl bg-black gap-3">
                        ⟸ Voltar
                    </div>

                </Link>
            </div>

            <div className="flex flex-col-reverse xl:flex-row w-full">
                <div className="flex flex-col w-full xl:w-1/2 gap-4">

                    <div className="flex pt-4 xl:p-10">
                        <Image src="/site1image1.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                    <div className="flex xl:p-10">
                        <Image src="/site1image2.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                    <div className="flex xl:p-10">
                        <Image src="/site1image3.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                    <div className="flex xl:p-10">
                        <Image src="/site1image4.png" alt="image1" loading="eager" width={1917} height={947} className="w-auto h-auto"/>
                    </div>

                </div>

                <div className="flex flex-col w-full xl:w-1/2 p-4 xl:p-10 gap-4 text-2xl bg-gray-900 shadow-[0_0_5px_rgb(255,255,255,0.9)]  text-white">

                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold">Bem-vindo à apresentação do Enki</h1>
                    </div>

                    <h1>O Enki foi um projeto desenvolvido para um cliente, com o objetivo de criar uma plataforma para remoção automática de fundo de imagens.</h1>

                    <h1>Durante o desenvolvimento, foram implementadas diversas funcionalidades e integrações, porém alguns imprevistos impediram que o projeto fosse finalizado e colocado em produção.</h1>

                    <h1 className="text-4xl px-4 font-bold">Principais funcionalidades:</h1>

                    <h1>O sistema foi desenvolvido com uma estrutura completa para gerenciamento de usuários e imagens, incluindo:</h1>

                    <ul className="p-4">
                        <li>- Criação e gerenciamento de contas</li>
                        <li>- Armazenamento de dados dos usuários</li>
                        <li>- Histórico de imagens processadas</li>
                        <li>- Remoção automática do fundo das imagens</li>
                        <li>- Integração com a API do remove.bg</li>
                        <li>- Sistema de transações e créditos</li>
                        <li>- Estrutura de pagamentos integrada por API</li>
                    </ul>

                    <h1>A ideia principal era utilizar um modelo de pagamento por imagem processada, no qual o usuário poderia adquirir créditos e utilizá-los para realizar as remoções de fundo.</h1>

                    <h1 className="text-4xl px-4 font-bold">Estrutura do projeto</h1>

                    <h1>Por trás da interface, o Enki possuía uma estrutura de backend responsável pelo gerenciamento dos usuários, armazenamento das imagens e dados, processamento das solicitações e integração com os serviços externos.</h1>

                    <h1>Também foi desenvolvida uma estrutura para lidar com pagamentos e transações, permitindo que o projeto pudesse evoluir para uma plataforma comercial completa.</h1>

                    <h1 className="text-4xl px-4 font-bold">Situação atual</h1>

                    <h1>Atualmente, o Enki encontra-se desativado, principalmente por questões relacionadas à segurança e às integrações de pagamento.</h1>

                    <h1>Apesar de o projeto não ter sido finalizado, ele foi uma experiência importante de desenvolvimento e permitiu trabalhar com conceitos como APIs externas, autenticação, banco de dados, armazenamento de arquivos, sistemas de créditos e integrações de pagamento.</h1>

                    <h1>A ideia é retomar o desenvolvimento do Enki futuramente, aproveitando a estrutura já construída e aprimorando suas funcionalidades para, finalmente, transformar o projeto em uma aplicação completa e funcional.</h1>

                </div>

            </div>
        </main>
    );
}