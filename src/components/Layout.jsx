import React from "react";

const Layout = () => {
  return (
    <div>
      <div id="layout" className="px-6 py-6 mt-10 mx-auto lg:mt-32 lg:px-8">
        <h2 className="text-4xl sm:font-semibold mb-5">
          ToDesktop handles the Details
        </h2>
        <div
          id="grid-container"
          className="gap-6 grid-cols-1 md:grid-cols-2 space-y-1 grid lg:grid-cols-3"
        >
          <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">Native Notification</h3>
              <img
                src="/review.png"
                alt="Review"
                className="w-auto h-40"
              />
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">Auto Update</h3>
              <p className="text-sm font-light text-center">
                We'll ensure the underlying is up to dte and deliver performance
                improvements, security patches, & additional features.
              </p>
              <img
                src="/review.png"
                alt="Review"
                className="w-auto h-40"
              />
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">Native Notification</h3>
              <img
                src="/review.png"
                alt="Review"
                className="w-auto h-40"
              />
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">Native Notification</h3>
              <p className="text-sm font-light text-center">
                We'll ensure the underlying is up to dte and deliver performance
                improvements, security patches, & additional features.
              </p>

              <img
                src="/review.png"
                alt="Review"
                className="w-auto h-40"
              />
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">Native Notification</h3>
              <img
                src="/review.png"
                alt="Review"
                className="w-auto h-40"
              />
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-white/60 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
              <h3 className="text-2xl">Native Notification</h3>
              <p className="text-sm font-light text-center">
                We'll ensure the underlying is up to dte and deliver performance
                improvements, security patches, & additional features.
              </p>

              <img
                src="/review.png"
                alt="Review"
                className="w-auto h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
