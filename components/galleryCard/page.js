import Link from "next/link";
import card2 from "@/public/images/card2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function GalleryCard(props) {
  return (
    <>
      {props.Info.data.map((post) => {
        return (
          <>
            <Link href={`/posting/${post.id}`}>
              <div className="w-72 h-80 bg-white rounded-lg mx-2">
                <div className="w-72 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    className="w-full"
                    width={288}
                    height={320}
                    src={post.images[0] || card2}
                    alt="card img"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-2xl font-semibold">Pie and Thighs</h2>
                      {/* <FontAwesomeIcon
                        className="w-5 h-5 text-lead-500 mb-3"
                        icon={faThumbsUp}
                      /> */}
                    </div>
                    <div class="flex justify-around align-baseline h-24 mt-2">
                      <div class="flex items-center text-gray-400">
                        {/* <FontAwesomeIcon
                          className="w-4 h-4 text-blue-500"
                          icon={faAddressBook}
                        /> */}
                        <span class="text-lg text-black ml-2">
                          (605) 716-6600
                        </span>
                      </div>
                      <div class="flex items-center text-gray-400">
                        {/* <FontAwesomeIcon
                          className="w-4 h-4 text-blue-500"
                          icon={faLocationDot}
                        /> */}
                        <span class="text-lg text-black ml-2">Ontario</span>
                      </div>
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
}
