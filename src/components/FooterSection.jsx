import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="container mx-auto text-center ">
        <div className="mt-4">
          <a href="#" className="text-[#9E080D] mx-2 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-[#9E080D] mx-2 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-[#9E080D] mx-2 hover:underline">
            Help Center
          </a>
        </div>

        <p className="mt-4 text-[#9E080D] text-sm">
          &copy; {new Date().getFullYear()} Sanskriti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
