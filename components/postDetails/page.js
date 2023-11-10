"use client";
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";
import grid from "@/public/images/grid.jpg";
import mapdetail from "@/public/images/mapdetail.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Galleria } from "primereact/galleria";
import Sidebar from "../filter/page";

export default function PostDetails({ postDetails }) {
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return <Image src={item} alt={item.alt} width={1000} height={500} />;
  };

  const thumbnailTemplate = (item) => {
    return (
      <Image
        src={item}
        alt={item.alt}
        className="mt-5"
        width={100}
        height={100}
      />
    );
  };
  const Card = () => {
    return (
      <>
        <div className="w-80 h-80 bg-white rounded-lg px-8">
          <div className="w-80 h-72 bg-white rounded-lg shadow-md">
            <Image className="w-full" src={grid} alt="card img" />
            <div className="p-1">
              <div className="flex items-center justify-between px-4 pt-2">
                <h2 className="text-2xl font-semibold">Dapper & Divine</h2>
                <FontAwesomeIcon
                  className="w-5 h-5 text-lead-500 mb-3"
                  icon={faThumbsUp}
                />
              </div>
              <div className="mb-3 px-4">
                <p className="text-xl leading-5">
                  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                  lorem lorem
                </p>
              </div>
              <div class="flex justify-around align-baseline">
                <div class="flex items-center text-gray-400">
                  <FontAwesomeIcon
                    className="w-4 h-4 text-blue-500"
                    icon={faAddressBook}
                  />
                  <span class="text-lg text-black ml-2">(605) 716-6600</span>
                </div>
                <div class="flex items-center text-gray-400">
                  <FontAwesomeIcon
                    className="w-4 h-4 text-blue-500"
                    icon={faLocationDot}
                  />
                  <span class="text-lg text-black ml-2">Ontario</span>
                </div>
                <div class="flex items-center text-gray-400">
                  <FontAwesomeIcon
                    className="w-4 h-4 text-blue-500"
                    icon={faDollarSign}
                  />
                  <span class="text-lg text-black ml-2">40.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-5 px-10 my-14">
        <Sidebar />
        <div className="col-span-3">
          <div className="flex justify-start align-middle text-4xl leading-10 tracking-widest text-blue-500 font-semibold pt-3">
            <p>{postDetails.data.business.name}</p>
          </div>
          <div>
            <p className="text-2xl mb-5 text-gray-500">
              {postDetails.data.postTime}
            </p>
          </div>

          <Galleria
            value={postDetails.data.images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            style={{ maxWidth: "100%", height: "auto" }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            circular
            autoPlay
            transitionInterval={2000}
          />
          {/* Start Description */}
          <div>
            <div>
              <p className="text-4xl mb-5 text-black mt-10">Description</p>
            </div>
            <div className="">
              <p className="text-2xl mr-8 leading-4">
                {postDetails.data.content}
              </p>
            </div>
            <div className="flex justify-center m-5">
              <button className="ring-2 ring-blue-500 bg-blue-500 text-white w-1/6 h-6 rounded text-xl mr-5">
                Call Now
              </button>
              <button className=" ring-2 ring-blue-500 text-blue-500 w-1/6 h-6 rounded text-xl">
                Schedule a booking
              </button>
            </div>
          </div>
          {/* End Description */}
          {/* Start Locaction */}
          <div>
            <div>
              <p className="text-4xl mb-5 text-black mt-10">Location</p>
            </div>
            <div className="">
              <Image src={mapdetail} alt="map img" />
            </div>
          </div>
          {/* End Locaction */}
          {/* Start of Add Reviews */}
          <div>
            <div>
              <p className="text-4xl mb-5 text-black mt-10">
                Give them a review
              </p>
            </div>
            <div className="">
              <textarea
                className="w-full h-32 ring-1 ring-gray-400 rounded text-2xl p-3"
                placeholder="Write your review here ..."
              ></textarea>
              <div className="flex justify-end m-3">
                <button className="bg-blue-500 text-white w-1/5 h-8 rounded text-2xl">
                  Post
                </button>
              </div>
            </div>
          </div>
          {/* End of Add Reviews */}

          {/* Start Reviews */}
          <div>
            <div>
              <p className="text-4xl text-black mt-10">Reviews</p>
            </div>
            <div>
              <div className="flex align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  style={{ fill: "black" }}
                  className="mt-1 w-5 h-5"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <p className="text-2xl ml-3 text-black">Sanam Ishiaq</p>
              </div>
              <div>
                <p className="text-xl mx-8 leading-4">
                  Lorem ipsum dolor sit amet consectetur. Diam sed in tortor
                  interdum non. Enim nisl nisl tellus urna elit nulla sodales
                  felis. Vel sed turpis blandit sagittis. Auctor tincidunt
                  ornare sed amet.
                </p>
              </div>
            </div>
            <div>
              <div className="flex align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  style={{ fill: "black" }}
                  className="mt-1 w-5 h-5"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <p className="text-2xl ml-3 text-black">Sanam Ishiaq</p>
              </div>
              <div>
                <p className="text-xl mx-8 leading-4">
                  Lorem ipsum dolor sit amet consectetur. Diam sed in tortor
                  interdum non. Enim nisl nisl tellus urna elit nulla sodales
                  felis. Vel sed turpis blandit sagittis. Auctor tincidunt
                  ornare sed amet.
                </p>
              </div>
            </div>
          </div>
          {/* End Reviews */}

          {/* Start of list view */}
          <div>
            <div>
              <p className="text-4xl mb-5 text-black mt-10">Similar Result</p>
            </div>
            <div className="grid grid-cols-3">
              {Card()}
              {Card()}
              {Card()}
            </div>
          </div>

          {/* End of list view */}
        </div>
      </div>
      <Footer />
    </>
  );
}
