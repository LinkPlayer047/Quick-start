import { X } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div>
      <div
        id="steps"
        className="flex flex-col gap-5 px-6 py-6 mt-10 mx-auto lg:px-8"
      >
        <h2 className="text-4xl text-black font-semibold max-w-2xl">
          Choose a plan that fits your needs
        </h2>
        <div className="grid lg:grid-cols-3 py-5 gap-10">
          <div className="border border-gray-300 rounded-xl lg:bg-slate-50 lg:border-none">
            <div className="py-10 px-10 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Free</h2>
            <p className="text-lg font-light">
              For personal use or testing your app before deploying to
              customers.
            </p>
            <p className="uppercase">Key Features:</p>
            <ul className=" gap-2">
              <li className="flex gap-4 items-center mt-5">
                <img
                  src="src\assets\Images\tick.png"
                  alt="tick"
                  className="h-3 w-3"
                />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
              <li className="flex gap-4 items-center mt-5">
                <img
                  src="src\assets\Images\tick.png"
                  alt="tick"
                  className="h-3 w-3"
                />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
              <li className="flex gap-4 items-center mt-5">
                <X className="h-3 w-3" />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
              <li className="flex gap-4 items-center mt-5">
                <X className="h-3 w-3" />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
            </ul>
            <button className="border rounded-lg py-3 my-3 border-black text-blue-600 px-10 hover:bg-blue-700 hover:text-white hover:border-blue-700">
              Read Docs
            </button>
            </div>
            
          </div>
          <div className="border border-gray-300 rounded-xl lg:bg-slate-50 lg:border-none">
            <div className="py-10 px-10 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Essential</h2>
                <p className="text-lg font-bold">$99<span className="text-sm font-light">/month</span></p>
            <p className="text-lg font-light">For simple desktop apps.</p>
            <p className="uppercase">Key Features:</p>
            <ul className=" gap-2">
              <li className="flex gap-4 items-center mt-5">
                <img
                  src="src\assets\Images\tick.png"
                  alt="tick"
                  className="h-3 w-3"
                />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
              <li className="flex gap-4 items-center mt-5">
                <img
                  src="src\assets\Images\tick.png"
                  alt="tick"
                  className="h-3 w-3"
                />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
              <li className="flex gap-4 items-center mt-5">
                <X className="h-3 w-3" />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
              <li className="flex gap-4 items-center mt-5">
                <X className="h-3 w-3" />
                <span className="text-sm font-light text-gray-700">
                  Only for personal use
                </span>
              </li>
            </ul>
            <button className="border rounded-lg py-3 my-3 border-black text-blue-600 px-10 hover:bg-blue-700 hover:text-white hover:border-blue-700">
              Read Docs
            </button>
            </div>
            
          </div>
          <div className="border border-gray-300 rounded-xl relative lg:bg-slate-50 lg:border-none">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <p className="text-indigo-800 bg-indigo-300 w-fit rounded-full px-4 py-2">
                Most popular
              </p>
            </div>
            <div className="px-10 py-10 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Professional</h2>
              <p className="text-lg font-bold">$240<span className="text-sm font-light">/month</span></p>
              <p className="text-lg font-light">
                For sophesticated mobile apps.
              </p>
              <p className="uppercase">Key Features:</p>
              <ul className=" gap-2">
                <li className="flex gap-4 items-center mt-5">
                  <img
                    src="src\assets\Images\tick.png"
                    alt="tick"
                    className="h-3 w-3"
                  />
                  <span className="text-sm font-light text-gray-700">
                    Only for personal use
                  </span>
                </li>
                <li className="flex gap-4 items-center mt-5">
                  <img
                    src="src\assets\Images\tick.png"
                    alt="tick"
                    className="h-3 w-3"
                  />
                  <span className="text-sm font-light text-gray-700">
                    Only for personal use
                  </span>
                </li>
                <li className="flex gap-4 items-center mt-5">
                  <X className="h-3 w-3" />
                  <span className="text-sm font-light text-gray-700">
                    Only for personal use
                  </span>
                </li>
                <li className="flex gap-4 items-center mt-5">
                  <X className="h-3 w-3" />
                  <span className="text-sm font-light text-gray-700">
                    Only for personal use
                  </span>
                </li>
              </ul>
              <button className="rounded-lg py-3 my-3 text-white bg-blue-600  px-10 hover:bg-blue-800 hover:text-blue-200">
                Read Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
