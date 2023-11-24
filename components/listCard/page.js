import Link from "next/link";
import card2 from "@/public/images/card2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function ListCard(props) {
  return (
    <>
      {props.Info.data.map((post) => {
        return (
          <>
            <Link href={`/posting/${post.id}`}>
              <div className="ring-1 ring-gray-400 rounded-xl m-5 grid grid-cols-3">
                <div>
                  <Image
                    className="rounded-l-xl w-full h-full"
                    width={300}
                    height={300}
                    alt="card img"
                    src={post.images[0] || card2}
                  />
                </div>
                <div className="col-span-2 pt-3 px-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold">{post.business.name}</h2>
                    <FontAwesomeIcon
                      className="w-5 h-5 text-lead-500 mb-3"
                      icon={faThumbsUp}
                    />
                  </div>
                  <div className="mb-5">
                    <p className="text-xl leading-5">{post.content}</p>
                  </div>
                  <div class="flex justify-around align-end mt-2">
                    <div class="flex items-center text-gray-400">
                      {/* <FontAwesomeIcon
                    className="w-4 h-4 text-blue-500"
                    icon={faAddressBook}
                  />
                  <span class="text-lg text-gray-700 ml-1 mt-1">
                    {post.phone_number}
                  </span> */}
                    </div>
                    <div class="flex items-center text-gray-400">
                      {/* <FontAwesomeIcon
                      className="w-4 h-4 text-blue-500"
                      icon={faLocationDot}
                    />
                    <span class="text-lg text-gray-700 ml-1 mt-1">
                      {post.state}
                    </span> */}
                    </div>
                    <div class="flex items-end text-gray-400">
                      {/* <FontAwesomeIcon
                      className="w-4 h-4 text-blue-500"
                      icon={faDollarSign}
                    /> */}
                      <span class="text-lg text-gray-700 ml-1 mt-1">
                        {post.postTime}
                      </span>
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
