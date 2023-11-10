"use client";
import Image from "next/image";
import heading from "@/public/images/heading.png";
import gallery1 from "@/public/images/gallery1.jpg";
import gallery2 from "@/public/images/gallery2.jpg";
import gallery3 from "@/public/images/gallery3.jpg";
import card1 from "@/public/images/card1.jpg";
import card2 from "@/public/images/card2.jpg";
import card3 from "@/public/images/card3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { filterBusinesses } from "@/redux/features/filterAction";

export default function Home() {
  const [selectedState, setSelectedState] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const states = [
    { label: "All", value: "ALL" },
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" },
  ];
  const categories = [
    { value: "MASSAGE SPA", label: "SPA" },
    { value: "RESTAURANTS ", label: "RS" },
    { value: "BEAUTY SALON SPA", label: "BS" },
  ];

  const searchFunction = () => {
    const obj = {
      state: selectedState,
    };
    if (obj.state === "All") {
      dispatch(filterBusinesses({})).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          router.push("/listing");
        }
      });
    } else {
      dispatch(filterBusinesses(obj)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          router.push("/listing");
        }
      });
    }
  };
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div className="flex justify-center w-full h-screen rounded-lg pt-12">
          <div className="relative w-full">
            <div className=" absolute w-full h-full top-20 z-0">
              <div className="flex justify-center">
                <Image className="" src={heading} alt="Home page header" />
              </div>
            </div>
            <div className="absolute left-1/4 top-1/4 rounded-lg">
              <div className="rounded-lg">
                <select
                  data-te-select-init
                  data-te-select-size="lg"
                  className="w-40 h-24 text-2xl font-bold rounded-l-lg pl-5"
                >
                  <option value="1">Select Category</option>
                  {categories.map((cate) => {
                    return <option value={cate.value}>{cate.value}</option>;
                  })}
                </select>
                <select
                  data-te-select-init
                  data-te-select-size="lg"
                  className="w-40 h-24 text-2xl font-bold pl-5"
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="1">Select State</option>
                  {states.map((state) => {
                    return <option value={state.label}>{state.label}</option>;
                  })}
                </select>
                <select
                  data-te-select-init
                  data-te-select-size="lg"
                  className="w-40 h-24 text-2xl font-bold pl-5"
                >
                  <option value="1">Select City</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </select>
                <select
                  data-te-select-init
                  data-te-select-size="lg"
                  className="w-40 h-24 text-2xl font-bold pl-5"
                >
                  <option value="1">Enter Zip</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </select>
                <button
                  className="w-40 h-24 bg-blue-500 text-white text-3xl font-extrabold rounded-r-lg leading-10"
                  onClick={searchFunction}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-middle text-5xl leading-10 tracking-widest text-black py-2">
          <p>Explore America to find best Spa’s, Salons & Restaurants. </p>
        </div>
        <div className="flex justify-center px-12">
          <Image
            className="w-96 m-4"
            style={{ height: "450px" }}
            src={gallery1}
            alt="Home page header"
          />
          <div>
            <Image
              className="w-96 h-36 pb-5 m-4"
              src={gallery2}
              alt="Home page header"
            />
            <Image
              className="w-96 h-72 m-4"
              src={gallery3}
              alt="Home page header"
            />
          </div>
        </div>
        {/* Start Card Section */}
        <div className="flex justify-start align-middle text-4xl leading-10 tracking-widest text-blue-500 font-semibold py-3">
          <p>Top Restaurants In Your Area</p>
        </div>
        <div className="flex justify-between align-middle">
          <p className="text-2xl leading-10 text-lead-500 font-medium px-12">
            1500 Listings
          </p>
          <p className="text-4xl leading-10 tracking-widest text-blue-500 font-semibold px-12 py-3">
            VIEW ALL &gt;&gt;
          </p>
        </div>

        <div className="px-24 relative">
          <div className="flex items-center overflow-x-auto">
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card1} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Pie and Thighs</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span className="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card1} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Pie and Thighs</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card1} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Pie and Thighs</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card1} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Pie and Thighs</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card Section */}
        {/* Start Card Section */}
        <div className="flex justify-start align-middle text-4xl leading-10 tracking-widest text-blue-500 font-semibold py-3">
          <p>Top Spa’s In Your Area</p>
        </div>
        <div className="flex justify-between align-middle">
          <p className="text-2xl leading-10 text-lead-500 font-medium">
            1500 Listings
          </p>
          <p className="text-4xl leading-10 tracking-widest text-blue-500 font-semibold py-3">
            VIEW ALL &gt;&gt;
          </p>
        </div>

        <div className="px-24 relative">
          <div className="flex items-center overflow-x-auto">
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card2} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Tranquil Times</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card2} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Tranquil Times</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card2} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Tranquil Times</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card2} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Tranquil Times</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card Section */}
        {/* Start Card Section */}
        <div className="flex justify-start align-middle text-4xl leading-10 tracking-widest text-blue-500 font-semibold px-12 py-3">
          <p>Top salons In Your Area</p>
        </div>
        <div className="flex justify-between align-middle">
          <p className="text-2xl leading-10 text-lead-500 font-medium px-12">
            1500 Listings
          </p>
          <p className="text-4xl leading-10 tracking-widest text-blue-500 font-semibold px-12 py-3">
            VIEW ALL &gt;&gt;
          </p>
        </div>

        <div className="px-24 relative">
          <div className="flex items-center overflow-x-auto">
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card3} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Dapper & Divine</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card3} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Dapper & Divine</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card3} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Dapper & Divine</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-72 h-80 bg-white rounded-lg mx-2">
              <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                <Image className="w-full" src={card3} alt="card img" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">Dapper & Divine</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div class="flex justify-around align-baseline h-24 mt-2">
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faAddressBook}
                      />
                      <span class="text-lg text-black ml-2">
                        (605) 716-6600
                      </span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <FontAwesomeIcon
                        className="w-4 h-4 text-blue-500"
                        icon={faLocationDot}
                      />
                      <span class="text-lg text-black ml-2">Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card Section */}
        {/* Start Footer */}
        <Footer />
        {/* End Footer */}
      </div>
    </>
  );
}
