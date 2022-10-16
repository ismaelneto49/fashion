import type { h } from "preact";
import type { JSONSchema7 } from "json-schema";
import Alert from "../islands/Alert.tsx";
import DecoFashionLogo from "./icons/DecoFashionLogo.tsx";
import { Bars3Icon, HeartIcon, MagnifyingGlassIcon, UserIcon } from "heroicons";
import Minicart from "../islands/Minicart.tsx";

function StoreAnchor({
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      class={`h-full w-1/3 md:w-[8.75rem] flex items-center justify-center border-r border-[#d3d5db] ${
        className ?? ""
      }`}
    >
      {children}
    </a>
  );
}

function Button({
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button class="flex gap-2 items-center h-10 px-[0.625rem] font-bold transition duration-150 ease-in hover:bg-[#e2e2e2]">
      {children}
    </button>
  );
}

function NavItem({
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={`/search?q=${children}`}
      class={`flex items-center text-[16px] font-bold uppercase px-8 lg:px-12 hover:border-black border-solid border-b border-white `}
    >
      {children}
    </a>
  );
}

function Navbar() {
  return (
    <div>
      <section class="md:hidden flex p-2 justify-between items-center px-12">
        <button>
          <Bars3Icon className="w-8 h-8" />
        </button>
        <a href="#" class="mr-6">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </a>
        <a href="/">
          <DecoFashionLogo classes="w-40" />
        </a>
        <a href="#">
          <UserIcon className="w-6 h-6" />
        </a>
        <Minicart />
      </section>
      <section class="hidden md:flex bg-white flex-row h-[80px] justify-between md:border-b border-[#d3d5db]">
        <div class="flex items-center justify-center flex-1 min-w-[200px]">
          <a href="/">
            <DecoFashionLogo classes="w-60" />
          </a>
        </div>
        <div class="flex justify-center md:justify-between pl-12">
          <NavItem>Marcas</NavItem>
          <NavItem>Feminino</NavItem>
          <NavItem>Masculino</NavItem>
          <NavItem>Infantil</NavItem>
        </div>
        <div class="flex-1 flex items-center justify-end md:mr-8">
          <a href="#" class="mr-6">
            <MagnifyingGlassIcon className="w-8 h-8" />
          </a>
          <a href="#">
            <HeartIcon className="w-8 h-8" />
          </a>
          <Minicart />
        </div>
      </section>
    </div>
  );
}

export const schema: JSONSchema7 = {
  title: "Header",
  type: "object",
  properties: {},
};

export default function Header() {
  return (
    <header>
      <Alert />
      <Navbar />
    </header>
  );
}