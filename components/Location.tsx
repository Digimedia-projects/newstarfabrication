const Location = () => {
    return (
    <section className="bg-black" id="contact">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">Visit Our Location</h2>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7568.194659836942!2d73.930059!3d18.47925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea03570ee615%3A0x2c9db607d47e8f60!2sNilesh%20Classic%2C%20Sai%20Colony%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028%2C%20India!5e0!3m2!1sen!2sus!4v1737460883803!5m2!1sen!2sus"
    width="100%"
    height="450"
    loading="lazy"
    
  ></iframe>
                </div>
                <div>
  <div className="max-w-full mx-auto rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="px-6 py-4">
      <h3 className="text-lg font-medium text-gray-900 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-2 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.857 7.243a6 6 0 11-9.714 9.514M7.343 16.657a8.001 8.001 0 1111.314 0M21 21l-5.2-5.2"
          />
        </svg>
        Our Address
      </h3>
      <p className="mt-1 text-gray-600">
        Shop No. 4, Sr.No.73/7, Near Nilesh Classic, Handewadi Road, Hadapsar,
        Pune
      </p>
    </div>
    <div className="border-t border-gray-200 px-6 py-4">
      <h3 className="text-lg font-medium text-gray-900 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-2 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4h16v16H4z"
          />
        </svg>
        Hours
      </h3>
      <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
      <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
      <p className="mt-1 text-gray-600">Sunday: Closed</p>
    </div>
    <div className="border-t border-gray-200 px-6 py-4">
      <h3 className="text-lg font-medium text-gray-900 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-2 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3h16.5M3.75 21h16.5m-16.5-9h16.5"
          />
        </svg>
        Contact
      </h3>
      <p className="mt-1 text-gray-600">
        <span className="font-semibold">Email:</span>{" "}
        sameershaikh01031987@gmail.com
      </p>
      <p className="mt-1 text-gray-600">
        <span className="font-semibold">Phone:</span> +91 8851385978
      </p>
    </div>
  </div>
</div>

            </div>
        </div>
    </div>
</section>
)
};

export default Location;