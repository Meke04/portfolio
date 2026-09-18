"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Hamburgue(){
    const [menu, setMenu] = useState<boolean>(false)

    function abrirMenu() {
        setMenu(!menu);
    }

    return(
        <div className="fixed bottom-6 left-6">
            <button onClick={() => abrirMenu()} className="bg-black border border-amber-50 rounded-full text-white p-2">
                <BiMenu className="h-8 w-8"/>
                {menu && (
                    <div className="fixed bottom-6 left-26 bg-black flex flex-col gap-2 p-2 border border-gray-400 rounded-2xl ">
                        <Link href="/" className="text-lg border-b border-gray-400 hover:text-purple-400">Início</Link>
                        <Link href="/enki" className="text-lg border-b border-gray-400 hover:text-purple-400">Enki</Link>
                        <Link href="/msflogistica" className="text-lg border-b border-gray-400 hover:text-purple-400">MSFLogistica</Link>
                        <Link href="/lista" className="text-lg border-b border-gray-400 hover:text-purple-400">Lista</Link>
                    </div>
                )}
            </button>
        </div>
    );
}