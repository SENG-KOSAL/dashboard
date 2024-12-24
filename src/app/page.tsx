// Import necessary modules
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header section with logo and background */}
      <div className="flex items-center justify-between bg-blue-500 p-6 md:p-10">
        <div className="text-white text-3xl font-bold"> 🌐Acme</div>
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center justify-center p-6 text-center md:flex-row md:justify-between md:p-12">
        <div className="max-w-md space-y-4">
          <h1 className="text-xl font-bold text-gray-800 md:text-3xl">
            Welcome to Acme.
          </h1>
          <p className="text-gray-600 md:text-lg">
            This is the example for the
            <Link href="https://nextjs.org/learn" className="text-blue-500">
              {" "}Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>
          <Link href={"/dashboard"}>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">
            Log in
          </button>
          </Link>
        </div>

        {/* Images section */}
        <div className="relative mt-6 flex justify-center md:mt-0 md:w-1/2">
          <Image
            src="/dashboard-desktop.png"
            alt="Dashboard Screenshot Desktop"
            width={400}
            height={300}
            className="hidden md:block"
          />
          <Image
            src="/dashboard-mobile.png"
            alt="Dashboard Screenshot Mobile"
            width={200}
            height={300}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
