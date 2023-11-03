"use client";
import Image from "next/image";
import cottagehome_icon from "@/public/images/cottagehome_icon.png";
import Link from "next/link";
// import { Collapse } from "tw-elements";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathname = usePathname();
  // useEffect(() => {
  //   const init = async () => {
  //     const { initTE } = await import("tw-elements");
  //     initTE({ Collapse });
  //   };
  //   init();
  // }, []);
  return (
    <>
      {/* <!-- Main navigation container --> */}
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <Link href="/">
            <div className=" flex ml-2">
              <Image
                className="w-7 h-7 mr-2"
                src={cottagehome_icon}
                alt="Home page header"
              />
              <a
                className=" pr-5 leading-3 text-3xl text-blue-500 dark:text-neutral-200"
                href="#"
              >
                POSTYOURBIZ
              </a>
            </div>
          </Link>
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent3"
            aria-controls="navbarSupportedContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Collapsible navbar container --> */}
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item
          >
            {/* <!-- Left links --> */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              {/* <!-- Home link --> */}
              <Link
                className={`link ${
                  pathname === "/"
                    ? "active disabled:text-black/30 [&.active]:text-white [&.active]:bg-blue-500 dark:[&.active]:text-neutral-400 rounded text-2xl px-3"
                    : " text-2xl text-black px-3"
                }`}
                href="/"
              >
                Home
              </Link>
              {/* <!-- Listing link --> */}
              <Link
                className={`link ${
                  pathname === "/listing"
                    ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 dark:[&.active]:text-neutral-400 rounded text-2xl"
                    : " text-2xl text-black px-3"
                }`}
                href="/listing"
              >
                Listing
              </Link>
              {/* <!-- Posting link --> */}
              <Link
                className={`link ${
                  pathname === "/posting"
                    ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 dark:[&.active]:text-neutral-400 rounded text-2xl"
                    : " text-2xl text-black px-3"
                }`}
                href="/posting"
              >
                Posting
              </Link>
              {/* <!-- Buy&Sell link --> */}
              <Link
                className={`link ${
                  pathname === ""
                    ? "active disabled:text-black/30 px-3 [&.active]:text-white [&.active]:bg-blue-500 dark:[&.active]:text-neutral-400 rounded text-2xl"
                    : " text-2xl text-black px-3"
                }`}
                href=""
              >
                Buy&Sell
              </Link>
            </ul>
            <span className="flex ml-2 text-neutral-500 dark:text-neutral-200">
              <Link href="/login">
                <p className="mr-5 text-grey-600 text-2xl">Sign in</p>
              </Link>
              <Link href="/signup">
                <p className="mr-5 text-grey-600 text-2xl">Sign up</p>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
