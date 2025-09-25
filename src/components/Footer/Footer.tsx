import Image from "next/image";
import logo from "@/assets/logo/logo.png"; // Ensure the path to your logo is correct
import Link from "next/link";
import { FaFacebookF,  FaLinkedinIn, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-[#F7F7F7] border-dashed border-t-2 border-black">
      <div id="contact" className="xl:container w-[98%] mx-auto md:px-6 px-2 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col items-center justify-center">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                width={500}
                height={500}
                alt="MiTravel logo"
                className=" w-[200px] mx-auto"
              />
            </Link>
          </div>
          <br />
          <div className="ml-0 sm:ml-3 md:ml-0">
            <h1>First AI-powered travel assistant turning loyalty points into instant travel.</h1>
          </div>
          <br />
          <div className="md:flex md:space-x-2">
            <h1 className="font-bold py-2">Contact Us:</h1>
            <h1 className="py-2"> info@mitravel.io</h1>
          </div>
          <br />
        </div>

        {/* Follow Us and Copyright Section */}
        <div>
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
            <div className="order-2 sm:order-1 flex space-x-2 items-center">
              <h4 className="font-semibold text-gray-800 text-center sm:text-left text-sm sm:text-base">
                Follow Us
              </h4>
              <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                <Link
                  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61581172204331"
                  className="w-8 h-8 sm:w-[34px] sm:h-[34px] bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaFacebookF className="text-white text-xs sm:text-sm" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/mitravel"
                  className="w-8 h-8 sm:w-[34px] sm:h-[34px] bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaLinkedinIn className="text-white text-xs sm:text-sm" />
                </Link>
                
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 order-1 sm:order-2 text-center sm:text-right">
              © 2023 Mi-TRAVEL All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
