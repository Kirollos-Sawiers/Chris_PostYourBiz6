import Image from "next/image";
import resetpassword from "@/public/images/resetpassword.jpg";
import blackHomeIcon from "@/public/images/blackHomeIcon.png";
export default function Restpassword() {
  return (
    <>
      <div className="flex justify-around align-middle mt-28">
        <div className="mt-28 m-28">
          <div className="flex justify-center align-middle  mb-14">
            <Image className="w-14 h-14" src={blackHomeIcon} alt="Icon" />
            <p className="text-6xl text-indigo-950 ml-2 mt-2">POSTYOURBIZ</p>
          </div>
          <div>
            <p className="text-6xl text-black font-extrabold">Reset password</p>
          </div>
          {/* Form inputs */}
          <div className="mb-10">
            <label htmlFor="email" className="block text-3xl mr-96">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 text-2xl outline rounded-sm p-3 mb-3"
              placeholder="Email"
            />
            <label htmlFor="password" className="block text-3xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-10 text-2xl outline rounded-sm p-3"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center text-3xl">
            <button className="w-full h-14 mt-2 rounded-md bg-blue-500 text-white">
              Submit
            </button>
          </div>
        </div>
        <div className="m-5">
          <Image className="" src={resetpassword} alt="login image" />
        </div>
      </div>
    </>
  );
}
