const Scheduling = () => {
    return (
      <div className=" w-full flex flex-col items-center bg-blue-100 px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Book a Session</h2>
  
        {/* Responsive Iframe Container */}
        <div className="w-full max-w-4xl h-[400px] sm:h-[200px] md:h-[650px] lg:h-[700px] shadow-lg rounded-md overflow-hidden border border-blue-100">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com"
            width="100%"
            height="100%"
            className="w-full h-full"
            allow="fullscreen"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Scheduling;
  