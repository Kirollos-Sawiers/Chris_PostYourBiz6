import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { filterBusinesses } from "@/redux/features/filterAction";

export default function Filter() {
  const [selectedState, setSelectedState] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  console.log({ selectedState });
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
            <option value="1">Select Category</option>
            {categories.map((cate) => {
              return <option value={cate.value}>{cate.value}</option>;
            })}
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
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="1">Select State</option>
            {states.map((state) => {
              return <option value={state.label}>{state.label}</option>;
            })}
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
            <button
              className=" w-3/4 h-10 bg-blue-500 text-white text-2xl rounded tracking-widest"
              onClick={searchFunction}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
