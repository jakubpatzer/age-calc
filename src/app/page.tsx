"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-OffWhite px-4 pt-12 flex justify-center items-start sm:items-center">
      <div className=" max-w-[500px] bg-white px-6 py-8 rounded-t-2xl rounded-bl-2xl rounded-br-[70px]">
        <form className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-sm text-neutral-SmokeyGrey">
              DAY
            </label>
            <input
              type="number"
              className="border border-neutral-LightGrey rounded-md text-base font-semibold px-4 py-2
             focus:border-primary-Purple focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-Purple"
              placeholder="DD"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-sm text-neutral-SmokeyGrey">
              MONTH
            </label>
            <input
              type="number"
              className="border border-neutral-LightGrey rounded-md text-base font-semibold px-4 py-2
             focus:border-primary-Purple focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-Purple"
              placeholder="MM"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-sm text-neutral-SmokeyGrey">
              YEAR
            </label>
            <input
              type="number"
              className="border border-neutral-LightGrey rounded-md text-base font-semibold px-4 py-2
             focus:border-primary-Purple focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-Purple"
              placeholder="YYYY"
            />
          </div>
        </form>
        <div className="flex justify-center sm:justify-end mb-8 relative">
          <div className="w-full h-[1px] bg-neutral-LightGrey absolute top-7 z-0"></div>
          <button className="w-14 h-14 rounded-full bg-primary-Purple hover:bg-black transition ease-in-out flex justify-center items-center z-10">
            <Image
              src="/icon-arrow.png"
              width={25}
              height={25}
              alt="arrow button"
              priority
            />
          </button>
        </div>
        <div>
          <p className=" font-extrabold text-5xl italic">
            <span className=" text-primary-Purple">38</span> years
          </p>
          <p className=" font-extrabold text-5xl italic">
            <span className=" text-primary-Purple">3</span> months
          </p>
          <p className=" font-extrabold text-5xl italic">
            <span className=" text-primary-Purple">26</span> days
          </p>
        </div>
      </div>
    </div>
  );
}
