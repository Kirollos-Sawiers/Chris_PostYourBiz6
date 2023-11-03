"use client";
import NavBar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Sidebar from "../../components/sideBar/page";
import { useSelector } from "react-redux";

export default function ListView({ listings }) {
  // console.log(listings);
  const { flag, filterResult } = useSelector((state) => state.filter);

  const data = flag ? filterResult : listings;

  const Card = () => {
    return (
      <>
        {data.map((list) => {
          return (
            <>
              <Link href={`/listing/${list.id}`}>
                <div className="ring-1 ring-gray-400 rounded-xl m-5 grid grid-cols-3">
                  <div>
                    <Image
                      className="rounded-l-xl w-full h-full"
                      width={300}
                      height={300}
                      alt="card img"
                      src={list.logo}
                    />
                  </div>
                  <div className="col-span-2 pt-3 px-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl font-bold">{list.name}</h2>
                      <FontAwesomeIcon
                        className="w-5 h-5 text-lead-500 mb-3"
                        icon={faThumbsUp}
                      />
                    </div>
                    <div className="mb-5">
                      <p className="text-xl leading-5 line-clamp-3">
                        {list.description}
                      </p>
                    </div>
                    <div class="flex justify-around align-baseline mt-2">
                      <div class="flex items-center text-gray-400">
                        <FontAwesomeIcon
                          className="w-4 h-4 text-blue-500"
                          icon={faAddressBook}
                        />
                        <span class="text-lg text-gray-700 ml-1 mt-1">
                          {list.phone_number}
                        </span>
                      </div>
                      <div class="flex items-center text-gray-400">
                        <FontAwesomeIcon
                          className="w-4 h-4 text-blue-500"
                          icon={faLocationDot}
                        />
                        <span class="text-lg text-gray-700 ml-1 mt-1">
                          {list.state}
                        </span>
                      </div>
                      <div class="flex items-center text-gray-400">
                        <FontAwesomeIcon
                          className="w-4 h-4 text-blue-500"
                          icon={faDollarSign}
                        />
                        <span class="text-lg text-gray-700 ml-1 mt-1">
                          40.000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-5 px-10 my-14">
        <Sidebar />
        <div className="col-span-3">
          <div className="flex justify-start align-middle text-4xl leading-10 tracking-widest text-blue-500 font-semibold py-3">
            <p>Top Restaurants In Your Area</p>
          </div>
          <div className="grid grid-cols-4 justify-between align-middle">
            <p className="text-2xl leading-10 text-lead-500 font-medium col-span-2">
              1500 Listings
            </p>

            <div className="text-3xl col-span-2">
              <div className="flex justify-around">
                <button className="text-blue-500">
                  <svg
                    className="w-5 h-5 inline mr-3 mb-1 text-blue-500"
                    style={{ fill: "rgb(59 130 246)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                  </svg>
                  List View
                </button>
                <button>
                  <svg
                    className="w-5 h-5 inline mr-3 mb-1"
                    // style={{ fill: "rgb(59 130 246)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z" />
                  </svg>
                  Grid View
                </button>
                <button>
                  <svg
                    className="w-5 h-5 inline mr-3 mb-1"
                    // style={{ fill: "rgb(59 130 246)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
                  </svg>
                  Map View
                </button>
              </div>
            </div>
          </div>
          {/* Start of list view */}
          <div className="grid grid-cols-2">{Card()}</div>

          {/* End of list view */}
        </div>
      </div>
      <Footer />
    </>
  );
}
