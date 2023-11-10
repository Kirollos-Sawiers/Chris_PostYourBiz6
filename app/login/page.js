import Image from "next/image";
import loginImg from "@/public/images/loginImg.jpg";
import blackHomeIcon from "@/public/images/blackHomeIcon.png";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <div className="flex justify-around align-middle mt-28">
        <div className="mt-28 m-28">
          <div className="hidden max-769px:hidden lg:flex lg:justify-center lg:align-middle lg:mb-14">
            <Image className="w-14 h-14" src={blackHomeIcon} alt="Icon" />
            <p className="text-6xl text-indigo-950 ml-2 mt-2">POSTYOURBIZ</p>
          </div>
          <div>
            <p className="text-6xl text-black font-extrabold">Login</p>
          </div>
          <div>
            <p className="text-2xl text-gray-500 font-extrabold">
              Login to access your account
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
              className="w-full h-10 text-2xl outline rounded-sm p-3"
              placeholder="Password"
            />
          </div>
          <div className="mr-6 mt-2 flex justify-end text-xl">
            <p>Forget Password?</p>
          </div>
          <div className=" flex justify-center text-3xl">
            <button className="w-full h-14 mt-2 rounded-md bg-blue-500 text-white">
              Login
            </button>
          </div>
          <div className=" flex justify-center text-2xl">
            <p>Don't have an account?&nbsp;</p>
            <Link href="/signup">
              <button className=" text-red-400">Sign up</button>
            </Link>
          </div>
        </div>
        <div className="m-5">
          <Image className="" src={loginImg} alt="login image" />
        </div>
      </div>
    </>
  );
}
