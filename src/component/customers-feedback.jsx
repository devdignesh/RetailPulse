import React from "react";
 

const CustomersFeedback = () => {

  const customersFeedbackData = [
    {
      id: 1,
      name: "Amelia Lee",
      image: "/images/person/person1.jpg",
      rating: 4,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias adipisci rerum repellendus sequi nesciunt iure nobis commodi ut beatae doloremque!"
    },
    {
      id: 2,
      name: "Lucas Schmidt",
      image: "/images/person/person2.jpg",
      rating: 5,
      review: "Fantastic service, very happy with the results. Will definitely recommend to others!"
    },
    {
      id: 3,
      name: "Olivia Johnson",
      image: "/images/person/person3.jpg",
      rating: 3,
      review: "Good overall experience, but there is room for improvement in some areas."
    },
    {
      id: 4,
      name: "Ethan Brown",
      image: "/images/person/person4.jpg",
      rating: 2,
      review: "Not satisfied with the service. Expected better results."
    }
  ];

  return (
    <>
      <div className="w-full lg:w-[calc(100%-1100px)] lg:min-w-[300px] px-2 lg:pl-4 ">
        <div className="bg-[#202028] p-5 rounded-md">
          <span className="text-white text-xl sm:text-[22px] font-bold">
            Customer's Feedback
          </span>

          <div className="h-[440px] overflow-y-scroll mt-2 custom-scrollbar">
            {customersFeedbackData.map((review) => (
              <div
                key={review.id}
                className="flex flex-col mt-4 border-b border-zinc-700/60"
              >
                <div className="flex flex-row items-center space-x-2">
                  <img
                    className="w-8 min-w-8 min-h-8 h-8 rounded-full cursor-pointer"
                    src={review.image}
                    alt={`${review.name} image`}
                  />
                  <span className="text-gray-300 font-medium text-base cursor-pointer">
                    {review.name}
                  </span>
                </div>
                <div className="flex items-center mt-2 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 me-2 ${
                        i < review.rating ? "text-yellow-300" : "text-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-zinc-400 text-sm mb-3 mt-1">
                  {review.review}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersFeedback;
