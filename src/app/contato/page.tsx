"use client";

import { estados } from "@/data/estados";
import Link from "next/link";
import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Contato() {

    const [nome, setNome] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    const EnviarMensagem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return(
        <div className="flex min-h-screen items-center justify-center text-white">

            <div className="fixed bottom-10 right-10 hover:-translate-y-1">
                <Link href="/" className="relative block rounded-2xl border border-gray-200 overflow-hidden">

                    <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(transparent_0deg,transparent_300deg,#48D6C9_360deg)] animate-[spin_4s_linear_infinite] "/>

                    <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#48D6C9_360deg)] animate-[spin_4s_linear_infinite] "/>

                    <div className="flex flex-col relative m-0.5 p-2 rounded-2xl bg-black gap-3">
                        ⟸ Voltar
                    </div>

                </Link>
            </div>

            <div className="flex border border-gray-400 rounded-2xl p-8">

                <div className="flex flex-col w-full items-center pr-8">
                    <div className="flex">
                        <div className="w-40 h-40 border-2 rounded-full overflow-hidden">
                            <Image src="/perfil.jpeg" alt="perfil" loading="eager" width={200} height={200} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-baseline gap-2">
                        <div className="border-b border-gray-400 py-1">
                            <h1 className="text-2xl font-bold">(MekeDev)</h1>
                            <h1 className="text-lg">Luis Filipe Silva</h1>
                        </div>

                        <h1 className="text-xl">Meios de contato:</h1>

                        <div className="flex flex-col gap-2">
                            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=luismekedev@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20entrar%20em%20contato." target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <div className="flex w-full justify-center gap-2 bg-red-700 p-2">
                                    <SiGmail size={20} />
                                    <h1>GMAIL</h1>
                                </div>
                            </Link>
                            <Link href="https://wa.me/5531997644499" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <div className="flex w-full justify-center gap-2 bg-green-600 p-2">
                                    <FaWhatsapp size={20} />
                                    <h1>WHATSAPP</h1>
                                </div>
                            </Link>
                            <Link href="https://www.linkedin.com/in/luis-filipe-6b2313429/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <div className="flex w-full justify-center gap-2 bg-blue-400 p-2">
                                    <FaLinkedin size={20} />
                                    <h1>LINKEDIN</h1>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

                <form onSubmit={EnviarMensagem} className="flex flex-col border border-gray-400 p-2 gap-4">
                    <h1 className="flex text-3xl p-2 justify-center">Contate-me</h1>
                    <div className="flex gap-2">
                        <div className="flex flex-col">
                            <h1>Nome</h1>
                            <input value={nome} onChange={(e) => setNome(e.target.value)} className="border border-gray-400 pl-1" placeholder="Nome:"/>
                        </div>
                        <div className="flex flex-col">
                            <h1>Sobre nome</h1>
                            <input value={sobreNome} onChange={(e) => setSobreNome(e.target.value)} className="border border-gray-400 pl-1" placeholder="Sobre nome:"/>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex flex-col">
                            <h1>Email</h1>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 pl-1" placeholder="Email:"/>
                        </div>
                        <div className="flex flex-col">
                            <h1>Telefone</h1>
                            <input value={telefone} onChange={(e) => setTelefone(e.target.value)} className="border border-gray-400 pl-1" placeholder="Telefone:"/>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex flex-col">
                            <h1>Estado</h1>
                            <select className="border border-gray-400">
                                {estados.map((estado) => (
                                    <option key={estado.sigla} value={estado.sigla} className="bg-black">
                                        {estado.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex flex-col w-full">
                            <h1>Assunto</h1>
                            <input value={assunto} onChange={(e) => setAssunto(e.target.value)} className="border border-gray-400 pl-1" placeholder="Assunto:"/>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex flex-col w-full">
                            <h1>Mensagem</h1>
                            <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="resize-y border border-gray-400 pl-1" rows={3} placeholder="Mensagem:"/>
                        </div>
                    </div>
                    <div className="flex justify-center pb-1">
                        <button type="submit" className="flex justify-center bg-blue-500 hover:bg-blue-700 border w-[90%] border-gray-400 rounded-lg p-2">Enviar</button>
                    </div>
                </form>

            </div>
        </div>
    );
}