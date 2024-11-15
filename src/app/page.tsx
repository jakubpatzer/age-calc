"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [birthMonth, setBirthMonth] = useState<string>();
  const [birthYear, setBirthYear] = useState<string>();
  const [birthDay, setBirthDay] = useState<string>();
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const year = Number(birthYear);
    const month = Number(birthMonth) - 1;
    const day = Number(birthDay);

    // Check if the birth date is valid
    if (
      isNaN(year) ||
      isNaN(month) ||
      isNaN(day) ||
      year < 1 ||
      month < 0 ||
      month > 11 ||
      day < 1 ||
      day > 31
    ) {
      alert("Please enter a valid date.");
      return;
    }

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    // Adjust for negative days
    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        0
      );
      days += previousMonth.getDate();
    }

    setAge({ years, months, days });
  };
  return (
    <div className="min-h-screen bg-neutral-OffWhite px-4 pt-12 flex justify-center items-start sm:items-center">
      <div className=" max-w-[500px] bg-white px-6 py-8 rounded-t-2xl rounded-bl-2xl rounded-br-[70px]">
        <form className="mb-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm text-neutral-SmokeyGrey">
                DAY
              </label>
              <input
                type="number"
                className="border border-neutral-LightGrey rounded-md text-base font-semibold px-4 py-2
              focus:border-primary-Purple focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-Purple"
                placeholder="DD"
                onChange={(e) => setBirthDay(e.target.value)}
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
                onChange={(e) => setBirthMonth(e.target.value)}
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
                onChange={(e) => setBirthYear(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center sm:justify-end mb-8 relative">
            <div className="w-full h-[1px] bg-neutral-LightGrey absolute top-7 z-0"></div>
            <button
              type="submit"
              className="w-14 h-14 rounded-full bg-primary-Purple hover:bg-black transition ease-in-out flex justify-center items-center z-10"
            >
              <Image
                src="/icon-arrow.png"
                width={25}
                height={25}
                alt="arrow button"
                priority
              />
            </button>
          </div>
        </form>
        <div>
          <p className=" font-extrabold text-5xl italic">
            <span className=" text-primary-Purple">
              {age ? age.years : "- -"}
            </span>{" "}
            years
          </p>
          <p className=" font-extrabold text-5xl italic">
            <span className=" text-primary-Purple">
              {age ? age.months : "- -"}
            </span>{" "}
            months
          </p>
          <p className=" font-extrabold text-5xl italic">
            <span className=" text-primary-Purple">
              {age ? age.days : "- -"}
            </span>{" "}
            days
          </p>
        </div>
      </div>
    </div>
  );
}
