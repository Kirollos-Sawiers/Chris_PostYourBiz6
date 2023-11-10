"use client";
import Image from "next/image";
import cottagehome_icon from "@/public/images/cottagehome_icon.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-regular-svg-icons";
import Filter from "../filter/page";

const NavBar = () => {
  const pathname = usePathname();
  const [visibleRight, setVisibleRight] = useState(false);
  const [visibleLeft, setVisibleLeft] = useState(false);
  return (
    <>
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div className="w-5 h-5">
            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0  lg:hidden"
              type="button"
              onClick={() => setVisibleLeft(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "rgb(59 130 246)" }}
                viewBox="0 0 512 512"
                className="w-7 h-7 text-blue-500"
              >
                <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
              </svg>
              <Sidebar
                className="bg-white"
                visible={visibleLeft}
                position="left"
                onHide={() => setVisibleLeft(false)}
              >
                <div className="flex flex-col ml-10">
                  <Filter />
                </div>
              </Sidebar>
            </button>
          </div>
          <Link href="/">
            <div className=" flex justify-center ml-2">
              <Image
                className="w-7 h-7 mr-2"
                src={cottagehome_icon}
                alt="Home page header"
              />
              <a className=" pr-5 leading-3 text-3xl text-blue-500" href="#">
                POSTYOURBIZ
              </a>
            </div>
          </Link>
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0  lg:hidden"
            type="button"
            onClick={() => setVisibleRight(true)}
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <Sidebar
              className="bg-white left-10"
              visible={visibleRight}
              position="right"
              onHide={() => setVisibleRight(false)}
            >
              <div className="flex flex-col ml-5 mr-16">
                <Link
                  className={`link ${
                    pathname === "/"
                      ? "active disabled:text-black/30 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl px-3"
                      : " text-2xl text-black px-3"
                  }`}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={`link ${
                    pathname === "/listing"
                      ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl"
                      : " text-2xl text-black px-3"
                  }`}
                  href="/listing"
                >
                  Listing
                </Link>
                <Link
                  className={`link ${
                    pathname === "/posting"
                      ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl"
                      : " text-2xl text-black px-3"
                  }`}
                  href="/posting"
                >
                  Posting
                </Link>
                <Link
                  className={`link ${
                    pathname === ""
                      ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl"
                      : " text-2xl text-black px-3"
                  }`}
                  href=""
                >
                  Buy&Sell
                </Link>
              </div>
              <span className="flex justify-center my-14 ml-10 mr-16 text-neutral-500">
                <Link href="/login">
                  <p className="mr-5 text-grey-600 text-3xl">Sign in</p>
                </Link>
                <Link href="/signup">
                  <p className="mr-5 text-grey-600 text-3xl">Sign up</p>
                </Link>
              </span>
            </Sidebar>
          </button>
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <Link
                className={`link ${
                  pathname === "/"
                    ? "active disabled:text-black/30 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl px-3"
                    : " text-2xl text-black px-3"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`link ${
                  pathname === "/listing"
                    ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl"
                    : " text-2xl text-black px-3"
                }`}
                href="/listing"
              >
                Listing
              </Link>
              <Link
                className={`link ${
                  pathname === "/posting"
                    ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl"
                    : " text-2xl text-black px-3"
                }`}
                href="/posting"
              >
                Posting
              </Link>
              <Link
                className={`link ${
                  pathname === ""
                    ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 rounded text-2xl"
                    : " text-2xl text-black px-3"
                }`}
                href=""
              >
                Buy&Sell
              </Link>
            </ul>
            <span className="flex ml-2 text-neutral-500">
              <Link href="/login">
                <p className="mr-5 text-grey-600 text-3xl">Sign in</p>
              </Link>
              <Link href="/signup">
                <p className="mr-5 text-grey-600 text-3xl">Sign up</p>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
