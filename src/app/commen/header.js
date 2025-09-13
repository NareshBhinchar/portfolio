"use client";
import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from 'react-icons/fa';



export default function Header() {
  let [open, setOpen] = useState(false);
  return (

    <header className="  py-5 border-b bg-[#b5c9f7]">
      <div className="max-w-[1320px] mx-auto flex lg:justify-between  px-4">
        {open ? "" : <button className="lg:hidden block" onClick={() => setOpen(!open)}>
          {open ? <FaTimes className="text-5xl" /> : <IoMenu className="text-4xl" />}
        </button>}
        <div className="lg:hidden block">
          {open && (
            <button className="fixed inset-0 bg-black/40 z-40 " onClick={() => setOpen(!open)}>
              <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "-translate-x-full "
                  }`}
              >
                <ul className="flex flex-col p-6 space-y-4 text-lg font-semibold">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/Projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/Skills">Skills</Link>
                  </li>
                  <li>
                    <Link href="/Certificate">Certificate</Link>
                  </li>
                  <li>
                    <Link href="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </button>
          )}
        </div>
        <div className=" text-3xl mx-auto  lg:mx-0 text-[blue] font-[550]  cursor-pointer transition-transform duration-300 hover:scale-110 ">
          <Link href="/" className='lg:text-3xl'>
            Naresh Dawoli
          </Link>
        </div>


        <div className='lg:block hidden'>
          <ul className="flex gap-10 text-[16px] font-[550]  text-[black]">
            <Link href="/">Home</Link>

            <Link href="/Projects">Projects</Link>
            <Link href="/Skills">Skills</Link>
            <Link href="/Certificate">Certificate</Link>
            <Link href="/Contact">Contact</Link>
          </ul>
        </div>
      </div>
    </header>

  )
}
