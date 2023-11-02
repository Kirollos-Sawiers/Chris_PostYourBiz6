"use client";
import NavBar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import Image from "next/image";
import terms from "@/public/images/terms.jpg";

export default function Terms() {
  const Text = () => {
    return (
      <>
        <p className="text-2xl mb-5">
          Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et
          tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a
          libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum
          amet integer cursus dictum. Pretium nulla nullam magna in magna
          pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum
          ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in
          aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi
          purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi
          faucibus donec in nisl id. Cursus congue viverra sed malesuada sed
          habitasse amet. Odio gravida felis elit scelerisque ornare ultrices.
          Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac
          vitae in et tellus erat facilisi. Sed risus turpis molestie
          ullamcorper.
        </p>
      </>
    );
  };
  return (
    <>
      <NavBar />
      <div className="px-14">
        <div className="flex justify-center">
          <div className="relative mb-10">
            <Image className="relative" src={terms} alt="terms img" />
            <div className="absolute w-1/2 left-1/3 top-1/2 inset-y-5 p-2">
              <p className="absolute mb-20 text-7xl text-white">
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>
        <div className="m-20">
          {Text()}
          {Text()}
          {Text()}
          {Text()}
          {Text()}
        </div>
      </div>
      <Footer />
    </>
  );
}
