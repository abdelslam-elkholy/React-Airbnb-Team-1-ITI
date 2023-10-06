import React from "react";

const NotFound = () => {
  return (
    <div className="w-100 h-80  my-5 row  mx-4">
      <div className="col-6 ">
        <h3 className="mb-4">
          We can’t seem to find the page you’re looking for
        </h3>
        <p>Here are some helpful links instead:</p>
        <p>
          <a href="#" class="text-black bold">
            Home
          </a>
        </p>
        <p>
          <a href="#" class="text-black bold">
            Travelling on Airbnb
          </a>
        </p>
        <p>
          <a href="#" class="text-black bold">
            Hosting on Airbnb
          </a>
        </p>
        <p>
          <a href="#" class="text-black bold">
            Trust & Safety
          </a>
        </p>
        <p>
          <a href="#" class="text-black bold">
            Sitemap
          </a>
        </p>
      </div>

      <div className="col-6  d-flex justify-content-center">
        <img
          width={200}
          height={400}
          src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
