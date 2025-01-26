import img1 from "../assets/images/syalani-house.jpg";
import img2 from "../assets/images/saylani-image.jpg";
import img3 from "../assets/images/wedding.jpg";
import img4 from "../assets/images/bike.jfif";

export default function NewArrivalGrid() {
  return (
    <div className="main grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
      {/* Home Construction Loan */}
      <div className="relative bg-[#0D0D0D] group text-gray-200 rounded col-span-2 lg:col-span-2 lg:row-span-2">
        <img
          className="w-full h-full group-hover:scale-90 transition duration-300 object-cover rounded"
          src={img1}
          alt="Home Construction Loan"
        />
        <div className="absolute gap-3 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-xl lg:text-2xl">
            Home Construction Loan
          </h3>
          <p className="line-clamp-3 text-sm lg:text-base">
            Ap ke ghar ka khuab ab ho ga pura
          </p>
          <a
            className="underline hover:decoration-gray-500 transition-colors duration-300"
            href="#"
          >
            Select Category
          </a>
        </div>
      </div>

      {/* Education Loan */}
      <div className="relative bg-[#0D0D0D] group text-gray-200 rounded col-span-2 lg:col-span-2">
        <img
          className="w-full h-full object-cover group-hover:scale-95 transition duration-300 rounded"
          src={img2}
          alt="Education Loan"
        />
        <div className="absolute gap-4 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-xl lg:text-2xl">
            Education Loan
          </h3>
          <p className="line-clamp-3 text-sm lg:text-base">
            Support Children&apos;s Education Development
          </p>
          <a
            href="#"
            className="underline hover:decoration-gray-500 transition-colors duration-300"
          >
            Select Category
          </a>
        </div>
      </div>

      {/* Wedding Loan */}
      <div className="relative bg-[#0D0D0D] group text-gray-200 rounded">
        <img
          className="w-full h-full object-cover group-hover:scale-90 transition duration-300 rounded"
          src={img3}
          alt="Wedding Loan"
        />
        <div className="absolute gap-2 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-xl lg:text-2xl">
            Wedding Loan
          </h3>
          <p className="line-clamp-3 text-sm lg:text-base">
            Saylani Welfare supports hundreds of orphan girls in marriages every
            month.
          </p>
          <a
            className="underline hover:decoration-gray-500 transition-colors duration-300"
            href="#"
          >
            Select Category
          </a>
        </div>
      </div>

      {/* Business Loan */}
      <div className="relative bg-[#0D0D0D] group text-gray-200 rounded">
        <img
          className="w-full h-full object-cover group-hover:scale-90 transition duration-300 rounded"
          src={img4}
          alt="Business Loan"
        />
        <div className="absolute gap-2 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-xl lg:text-2xl">
            Business Loan
          </h3>
          <p className="line-clamp-3 text-sm lg:text-base">
            Business ke liye asan iqsat
          </p>
          <a
            className="underline hover:decoration-gray-500 transition-colors duration-300"
            href="#"
          >
            Select Category
          </a>
        </div>
      </div>
    </div>
  );
}
