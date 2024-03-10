import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex items-center justify-center py-20">
      <div className="bg-white  rounded-xl max-w-sm w-[320px] dark:border-gray-700 flex flex-col border border-gray-800 transition-shadow transform hover:shadow-[15px_15px_0px_0px_rgba(0,0,0)] shadow-[10px_10px_0px_0px_rgba(0,0,0)] duration-500">
        <div className="rounded-xl overflow-hidden p-4 pb-7 ">
          <Image
            className="rounded-lg"
            src="/illustration-article.svg"
            alt="qr-image"
            height={300}
            width={400}
          />
        </div>

        <div className="ml-4">
          <div
            className="h-7 m-0 w-24 rounded-md flex justify-center items-center"
            style={{ backgroundColor: "hsl(47, 88%, 63%)" }}
          >
            <p className="font-semibold">Learning</p>
          </div>
        </div>

        <div className="ml-4 py-3">
          <p style={{ fontSize: "0.875rem" }}>Published 21 Dec 2023</p>
        </div>

        <div className="px-4 pb-5">
          <h2
            className="font-bold text-xl tracking-tight hover:text-yellow-400 cursor-pointer"
          >
            HTML & CSS foundations
          </h2>
          <div className="py-2">
            <p style={{  color: "hsl(0, 0%, 50%)", letterSpacing: "0.01em", lineHeight:"1.5" }} className="text-[0.8rem]">
            These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
          </div>
          <div className="flex  items-center">
            <Image className="rounded-full" src="/image-avatar.webp" alt="avatar" width={30} height={50} />
            <h3 className="font-bold mx-2">Greeg Hoper</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
