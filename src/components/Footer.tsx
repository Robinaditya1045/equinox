import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col items-center font-young-serif justify-center w-full bg-black  pb-12">
      <div className="flex flex-col justify-center items-center relative">
        <Image
          src="/images/logo_large.png"
          alt="logo"
          className="object-cover"
          width={250}
          height={250}
        />
        <div className="absolute bottom-10 text-nowrap">
          Indian Institute of Information Technology
        </div>
        <div>Lucknow, Uttar Pradesh</div>
      </div>
      <div className="h-[1px] w-11/12 md:w-10/12 bg-yellow-200 mx-24 my-5"></div>
      <div className="flex flex-col gap-y-4 md:flex-row justify-between w-11/12 md:w-10/12">
        <div className="flex justify-center items-center gap-x-3">
          <Link
            href={"https://www.instagram.com/equinoxiiitl/?hl=en"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>{" "}
          </Link>
          <Link
            href={"https://www.linkedin.com/company/equinox-iiitl/"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ededed"
              viewBox="0 0 256 256"
            >
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
            </svg>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-x-4 text-xs md:text-base">
          <div className="text-white border-b cursor-pointer">
            Privacy Policies
          </div>
          <div className="text-white border-b cursor-pointer">
            Terms Of Service
          </div>
          <div className="text-white border-b cursor-pointer">
            Cookies Settings
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
