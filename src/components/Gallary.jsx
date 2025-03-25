import React from "react";


export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://content.jdmagicbox.com/comp/hamirpur-himachal_pradesh/p6/9999p1972.1972.171014080006.n9p6/catalogue/nith-rec-hamirpur-himachal-pradesh-universities-kyc1niiwsn.jpg",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://nith.ac.in/international/image/admin_block.jpg",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];
 
  const [active, setActive] = React.useState(data[0].imgelink);
 
  return (
    <div className="grid px-10 gap-4">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Capturing Moments
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-20 bg-blue-500"></div>
            <span className="text-blue-500 font-medium">Gallery</span>
            <div className="h-[2px] w-20 bg-blue-500"></div>
          </div>
        </div>
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured conference image"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center transition-opacity duration-200 ${
                active === imgelink ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              }`}
              alt={`Conference image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}