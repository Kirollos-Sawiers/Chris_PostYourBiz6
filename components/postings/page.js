"use client";
import { useState } from "react";
import NavBar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Filter from "../filter/page";
import card2 from "@/public/images/card2.jpg";
import GalleryCard from "../galleryCard/page";
import ListCard from "../listCard/page";

export default function ListViewPostings({ postings }) {
  const [view, setView] = useState("listView");
  const toggleView = () => {
    if (view === "listView") {
      return (
        <>
          <div className="lg:grid lg:grid-cols-1">
            <ListCard Info={postings} />;
          </div>
        </>
      );
    } else if (view === "galleryView") {
      return (
        <>
          <div className="lg:grid lg:grid-cols-3">
            <GalleryCard Info={postings} />;
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1>Map View</h1>
        </>
      );
    }
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-5 px-2 lg:px-10 my-14">
        <div className="hidden lg:block">
          <Filter />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <div className="flex justify-start align-middle text-4xl leading-10 tracking-widest text-blue-500 font-semibold py-3">
            <p>Top Spa's In Your Area</p>
          </div>
          <div className="grid grid-cols-4 justify-between align-middle">
            <p className="text-2xl leading-10 text-lead-500 font-medium col-span-2">
              1500 Listings
            </p>

            <div className="text-3xl col-span-2">
              <div className="flex justify-around">
                <button
                  className="flex"
                  onClick={() => {
                    setView("listView");
                  }}
                >
                  <span>
                    <svg
                      className="w-5 h-5 inline mr-3 mb-1 text-blue-500"
                      style={{ fill: "rgb(59 130 246)" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                    </svg>
                  </span>
                  <span className="hidden lg:block text-blue-500">
                    List View
                  </span>
                </button>
                <button
                  onClick={() => {
                    setView("galleryView");
                  }}
                >
                  <svg
                    className="w-5 h-5 inline mr-3 mb-1"
                    // style={{ fill: "rgb(59 130 246)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z" />
                  </svg>
                  Gallery
                </button>
                <button
                  className="flex"
                  onClick={() => {
                    setView("mapView");
                  }}
                >
                  <span>
                    <svg
                      className="w-5 h-5 inline mr-3 mb-1"
                      // style={{ fill: "rgb(59 130 246)" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
                    </svg>
                  </span>
                  <span className="hidden lg:block">Map View</span>
                </button>
              </div>
            </div>
          </div>
          {/* Start of list view */}
          {/* <div className="lg:grid lg:grid-cols-2"> */}
          {/* <div className="ring ring-gray-400 rounded-xl m-5">
                <Image className="rounded-l-xl" src={list} alt="card img" />
              </div> */}
          {toggleView()}
          {/* </div> */}

          {/* End of list view */}
        </div>
      </div>
      <Footer />
    </>
  );
}
