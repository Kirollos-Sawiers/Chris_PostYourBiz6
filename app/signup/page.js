import Image from "next/image";
import loginImg from "@/public/images/loginImg.jpg";
import blackHomeIcon from "@/public/images/blackHomeIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
export default function Signup() {
  return (
    <>
      <div className="flex justify-around align-middle mt-28">
        <div className="mt-28 m-28">
          <div className="flex justify-center align-middle  mb-14">
            <Image className="w-14 h-14" src={blackHomeIcon} alt="Icon" />
            <p className="text-6xl text-indigo-950 ml-2 mt-2">POSTYOURBIZ</p>
          </div>
          <div>
            <p className="text-6xl text-black font-extrabold">Sign Up</p>
          </div>
          <div>
            <p className="text-2xl text-gray-500 font-extrabold">
              Create your account
            </p>
          </div>
          {/* Form inputs */}
          <div>
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
              className="w-full h-10 text-2xl outline rounded-sm p-3 mb-3"
              placeholder="Password"
            />
            <label htmlFor="confirmPassword" className="block text-3xl">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full h-10 text-2xl outline rounded-sm p-3 mb-10"
              placeholder="Confirm password"
            />
          </div>
          <div className=" flex justify-center text-3xl">
            <button className="w-full h-14 mt-2 rounded-md bg-blue-500 text-white">
              Sign up
            </button>
          </div>
          <div className=" flex justify-center text-2xl">
            <p>Already have an account?&nbsp;</p>
            <Link href="/login">
              <button className=" text-red-400">Login</button>
            </Link>
          </div>
          {/* <div className="flex justify-between">
            <div className="w-40 h-[1px] bg-slate-400 rounded-md mt-3"></div>
            <p className="text-xl text-slate-400">Or register with</p>
            <div className="w-40 h-[1px] bg-slate-400 rounded-md mt-3"></div>
          </div> */}
        </div>
        <div className="m-5">
          <Image className="" src={loginImg} alt="login image" />
        </div>
      </div>
    </>
  );
}
