"use client";
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";
import grid from "@/public/images/grid.jpg";
import mapdetail from "@/public/images/mapdetail.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
// import { Carousel } from "tw-elements";
import Link from "next/link";
export default function ListDetails({ listDetails, similarData }) {
  // useEffect(() => {
  //   const init = async () => {
  //     const { initTE } = await import("tw-elements");
  //     initTE({ Carousel });
  //   };
  //   init();
  // }, []);
  console.log(similarData.data);
  const similarBusiness = similarData.data;
  const Card = () => {
    return (
      <>
        {similarBusiness.map((business) => {
          return (
            <>
              <Link href={`/posting/${business.id}`}>
                <div className="w-80 h-fit bg-white rounded-lg px-8">
                  <div className="w-80 h-fit bg-white rounded-lg shadow-md">
                    <div className="w-full h-36">
                      <Image
                        className="w-80 h-36 rounded-t-lg"
                        src={business.business.logo}
                        alt="card img"
                        width="100"
                        height="50"
                      />
                    </div>
                    <div className="p-1">
                      <div className="flex items-center justify-between px-4 pt-2">
                        <h2 className="text-2xl font-semibold">
                          {business.title}
                        </h2>
                        <FontAwesomeIcon
                          className="w-5 h-5 text-lead-500 mb-3"
                          icon={faThumbsUp}
                        />
                      </div>
                      <div className="mb-3 px-4">
                        <p className="text-xl leading-5">{business.content}</p>
                      </div>
                      <div class="flex justify-end align-baseline mr-3">
                        <div class="flex items-center text-gray-400">
                          <FontAwesomeIcon
                            className="w-4 h-4 text-blue-500"
                            icon={faClock}
                          />
                          <span class="text-lg text-gray-500 ml-2">
                            {business.postTime}
                          </span>
                        </div>
                        {/* <div class="flex items-center text-gray-400">
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
                      </div> */}
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
        <div className="pr-16">
          <p className="text-4xl mb-5 text-black">Filters</p>
          <div>
            <label
              htmlFor="selectCategory"
              className="block text-2xl mb-1 text-black"
            >
              Category
            </label>
            <select
              class="form-select w-full h-10 ring-1 ring-gray-400 rounded-xl text-2xl mb-3"
              id="selectCategory"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label
              htmlFor="selectState"
              className="block text-2xl mb-1 text-black"
            >
              State
            </label>
            <select
              class="form-select w-full h-10 ring-1 ring-gray-400 rounded-xl text-2xl mb-3 "
              id="selectState"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label
              htmlFor="selectCity"
              className="block text-2xl mb-1 text-black"
            >
              City
            </label>
            <select
              class="form-select w-full h-10 ring-1 ring-gray-400 rounded-xl text-2xl mb-3 "
              id="selectCity"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label
              htmlFor="selectDistance"
              className="block text-2xl mb-1 text-black"
            >
              Distance from Zip Code
            </label>
            <select
              class="form-select w-full h-10 ring-1 ring-gray-400 rounded-xl text-2xl mb-3 "
              id="selectDistance"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="flex justify-center m-5 ">
              <button className=" w-3/4 h-10 bg-blue-500 text-white text-2xl rounded tracking-widest">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex justify-start align-middle text-4xl leading-10 tracking-widest text-blue-500 font-semibold pt-3">
            <p>{listDetails.data.name}</p>
          </div>
          <div>
            <p className="text-2xl mb-5 text-gray-500">
              {listDetails.data.postTime}
            </p>
          </div>
          {/* Carousel */}
          <div
            id="carouselExampleIndicators"
            className="relative"
            data-te-carousel-init
            data-te-ride="carousel"
          >
            {/* <!--Carousel indicators--> */}
            <div
              className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators
            >
              <button
                type="button"
                data-te-target="#carouselExampleIndicators"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleIndicators"
                data-te-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleIndicators"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* <!--Carousel items--> */}
            <div className="rounded-xl relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {listDetails.data.images.map((imgURL, index) => {
                const showImg = () => {
                  if (index === 0) {
                    return (
                      <>
                        <div
                          className="relative  float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                          data-te-carousel-item
                          data-te-carousel-active
                        >
                          <img
                            src={imgURL}
                            className="block w-full"
                            alt="Wild Landscape"
                          />
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <div
                          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                          data-te-carousel-item
                        >
                          <img
                            src={imgURL}
                            className="block w-full "
                            alt="Camera"
                          />
                        </div>
                        ;
                      </>
                    );
                  }
                };
                return showImg();
              })}
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
              className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide="prev"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide="next"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
          {/* Carousel */}
          {/* Start Description */}
          <div>
            <div>
              <p className="text-4xl mb-5 text-black mt-10">Description</p>
            </div>
            <div className="">
              <p className="text-2xl mr-8 leading-4">
                {listDetails.data.description}
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
            <div className="grid grid-cols-3">{Card()}</div>
          </div>

          {/* End of list view */}
        </div>
      </div>
      <Footer />
    </>
  );
}
