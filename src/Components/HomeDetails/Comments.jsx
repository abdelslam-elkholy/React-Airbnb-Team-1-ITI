import React from "react";

const Comments = () => {
  return (
    <div className=" flex flex-col text-left  py-3">
      <div className="flex md:items-center gap-2 md:gap-4">
        <img
          src="/images/owner.jpg"
          alt=""
          className="h-14 w-14 object-fit rounded-full mt-1"
        />
        <div className="flex flex-col text-left">
          <p className="font-semibold">Ciprian</p>
          <p className="text-sm">April 2023</p>
        </div>
      </div>
      <div className="md:mt-4 text-gray-600">
        <p>
          From point of booking onwards, Rachel and team were exceptionally
          approachable, helpful, friendly and well organised. The listing for
          the accommodation made us fall in
        </p>
      </div>
    </div>
  );
};

export default Comments;
