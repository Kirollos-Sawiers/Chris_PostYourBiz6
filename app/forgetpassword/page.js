import Image from "next/image";
import forgetpassimg from "@/public/images/forgetpassimg.jpg";
import blackHomeIcon from "@/public/images/blackHomeIcon.png";
export default function Forgetpass() {
  return (
    <>
      <div className="flex justify-around align-middle mt-28">
        <div className="mt-28 m-28">
          <div className="flex justify-center align-middle  mb-14">
            <Image className="w-14 h-14" src={blackHomeIcon} alt="Icon" />
            <p className="text-6xl text-indigo-950 ml-2 mt-2">POSTYOURBIZ</p>
          </div>
          <div>
            <p className="text-6xl text-black font-extrabold">
              Forget Your Password ?
            </p>
          </div>
          <div>
            <p className="text-2xl text-gray-500 font-extrabold mb-7">
              Enter your Email to rest your password
            </p>
          </div>
          {/* Form inputs */}
          <div>
            <label htmlFor="email" className="block text-3xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 text-2xl outline rounded-sm p-3 mb-7"
              placeholder="Email"
            />
          </div>
          <div className=" flex justify-center text-3xl">
            <button className="w-full h-14 mt-2 rounded-md bg-blue-500 text-white">
              Reset Password
            </button>
          </div>
        </div>
        <div className="m-5">
          <Image className="" src={forgetpassimg} alt="login image" />
        </div>
      </div>
    </>
  );
}
