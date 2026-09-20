import Image from "next/image";
import Link from "next/link";
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

export default function Profile() {
    return(
      <div className="flex flex-col w-full items-center min-w-90 xl:w-1/14">
        <div className="flex">
          <div className="w-70 h-70 border-2 rounded-full overflow-hidden">
            <Image src="/perfil.jpeg" alt="perfil" loading="eager" width={200} height={200} className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="flex flex-col justify-baseline py-5 gap-4">
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
    );
}