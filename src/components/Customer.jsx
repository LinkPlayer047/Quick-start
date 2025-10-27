import { SeparatorVertical } from "lucide-react";
import React from "react";

const Customer = () => {
  return (
    <div>
      <div
        id="steps"
        className="flex flex-col gap-5 px-6 py-6 mt-10 mx-auto lg:mt-32 lg:px-8"
      >
        <h2 className="text-4xl sm:font-semibold mb-5">Customer Stories</h2>
        <div className="rounded-xl border border-gray-300 flex flex-col lg:flex-row items-end">
          <div id="left" className="gap-20 p-8">
            <img
              src="src\assets\Images\clickup.png"
              alt="Customers"
              className="h-10"
            />
            <h1 className="text-lg leading-relaxed">
              Clickup used ToDesktop to get their desktop app in front of
              customers in days instead of months.
            </h1>
            <div id="tag-container" className="flex gap-3 flex-wrap">
              <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                <img src="src\assets\Images\tick.png" alt="" className="h-3" />
                <span className="font-display font-medium">Chromeless UI</span>
              </div>
              <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                <img src="src\assets\Images\tick.png" alt="" className="h-3" />
                <span className="font-display font-medium">
                  Native Spellcheck
                </span>
              </div>
              <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                <img src="src\assets\Images\tick.png" alt="" className="h-3" />
                <span className="font-display font-medium">
                  Task time in menubar
                </span>
              </div>
              <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                <img src="src\assets\Images\tick.png" alt="" className="h-3" />
                <span className="font-display font-medium">
                  Notification count in the dock
                </span>
              </div>
              <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                <img src="src\assets\Images\tick.png" alt="" className="h-3" />
                <span className="font-display font-medium">
                  Global hotkey to create task
                </span>
              </div>
            </div>
            <p className="text-lg font-light text-gray-500 mt-10">
              "ToDesktop provided us with a{" "}
              <span className="text-gray-800">polished desktop app</span> in no
              time. Their expert team guided us through a smooth migration from
              our outdated legacy desktop app, enabling us to deliver{" "}
              <span className="text-gray-800">new and improved features</span>{" "}
              to our customers within days."
            </p>
            <div id="user" className="flex gap-4 mt-10">
              <div className="w-15">
                <img
                  src="src\assets\Images\user.png"
                  alt="User"
                  className="h-10"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-medium">Zeb Evans</h2>
                <p className="text-gray-500">
                  Founder & CEO,{" "}
                  <a
                    href="a"
                    className="border-b border-dotted border-y-gray-300 hover:border-gray-500 hover:border-solid"
                  >
                    ClickUp
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div id="right">
            <img
              src="src\assets\Images\Dashboard.png"
              className="pl-10 mb-20 mt-10"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 w-full">
          <div className="w-full rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">
                <div className="flex items-center">
                  <div className="flex justify-center items-center gap-5 h-10">
                    <SeparatorVertical className="rounded-full bg-blue-200 text-blue-800 p-5 h-15 w-15" />
                    <h2 className="text-bold text-black text-2xl">
                      Native APIs
                    </h2>
                  </div>
                </div>
                <p className="mt-15 text-sm text-gray-400">
                  What sets TODesktop apart is its seamless integration with
                  native APIs using our existing web codebase. by tapping into
                  APIs like Tray and Notifications, we've crafted an
                  exceptionally polished dektop user experience.
                </p>
              </h3>
              <div className="flex items-center mt-5">
                <div className="flex justify-center items-center gap-5 h-10">
                  <img
                    src="src\assets\Images\user.png"
                    alt="user"
                    className="w-15 h-15"
                  />
                  <h2 className="text-bold text-black text-lg">
                    Rick Peterson
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">
                <div className="flex items-center">
                  <div className="flex justify-center items-center gap-5 h-10">
                    <SeparatorVertical className="rounded-full bg-red-200 text-black p-5 h-15 w-15" />
                    <h2 className="text-bold text-black text-2xl">
                      Cleaner, Less Cluttered UI
                    </h2>
                  </div>
                </div>
                <p className="mt-15 text-sm text-gray-400">
                  What sets TODesktop apart is its seamless integration with
                  native APIs using our existing web codebase. by tapping into
                  APIs like Tray and Notifications, we've crafted an
                  exceptionally polished dektop user experience.
                </p>
              </h3>
              <div className="flex items-center mt-5">
                <div className="flex justify-center items-center gap-5 h-10">
                  <img
                    src="src\assets\Images\user.png"
                    alt="user"
                    className="w-15 h-15"
                  />
                  <h2 className="text-bold text-black text-lg">
                    Rick Peterson
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">
                <div className="flex items-center">
                  <div className="flex justify-center items-center gap-5 h-10">
                    <SeparatorVertical className="rounded-full bg-yellow-200 text-black p-5 h-15 w-15" />
                    <h2 className="text-bold text-black text-2xl">
                      Code Optional
                    </h2>
                  </div>
                </div>
                <p className="mt-15 text-sm text-gray-400">
                  What sets TODesktop apart is its seamless integration with
                  native APIs using our existing web codebase. by tapping into
                  APIs like Tray and Notifications, we've crafted an
                  exceptionally polished dektop user experience.
                </p>
              </h3>
              <div className="flex items-center mt-5">
                <div className="flex justify-center items-center gap-5 h-10">
                  <img
                    src="src\assets\Images\user.png"
                    alt="user"
                    className="w-15 h-15"
                  />
                  <h2 className="text-bold text-black text-lg">
                    Rick Peterson
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-300 bg-black flex flex-col lg:flex-row items-center my-20">
          <div id="left" className="lg:w-1/2 gap-20 p-8">
            <h2 className="text-gray-400">Ready to start Building?</h2>
            <h1 className="text-2xl text-white leading-relaxed">
              Create your Desktop App free*
            </h1>
            <p className="text-sm text-gray-400 my-3">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
            <button className="rounded-2xl w-full text-white bg-blue-700 py-5">Download ToDesktop Builder</button>
            <p className="text-sm text-gray-500 my-5 px-15">You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
          </div>
          <div id="right" className="lg:w-1/2">
            <img
              src="src\assets\Images\Dashboard.png"
              className="pl-10 mb-20 mt-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
