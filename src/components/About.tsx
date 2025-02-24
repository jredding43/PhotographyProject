const About = () => {
  return (
    <div className="w-full bg-blue-100 text-black">
      {/* Hero Section */}
      <div
        className="relative mt-25 bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-100 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-extrabold tracking-wide uppercase">Story</h1>
          <p className="mt-4 text-lg max-w-2xl">
            A passion for capturing moments, a dedication to timeless imagery. We turn ordinary
            into extraordinary.
          </p>
        </div>
      </div>

      {/* About Section (Centered and Constrained) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold uppercase tracking-wider">About Us</h2>
          <p className="text-black-300 text-lg leading-relaxed">
            We are a team of creatives who believe in the power of storytelling through photography.
            Every frame tells a story, every moment captures emotion, and every image is a legacy.
          </p>
          <p className="text-black-300 text-lg leading-relaxed">
            Our journey began with a camera and a dream. Today, we work with clients worldwide,
            bringing visions to life through breathtaking visuals.
          </p>
        </div>

        {/* Right Column: Image Gallery (Fixed Sizing) */}
        <div className="grid grid-cols-2 gap-4 mt-20">
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=400&fit=crop" 
          alt="Portrait"
          className="w-full h-56 object-cover rounded-lg hover:scale-105 transition duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=400&fit=crop"
          alt="Landscape"
          className="w-full h-56 object-cover rounded-lg hover:scale-105 transition duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=400&fit=crop"
          alt="Architecture"
          className="w-full h-56 object-cover rounded-lg hover:scale-105 transition duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=400&fit=crop"
          alt="Black and White"
          className="w-full h-56 object-cover rounded-lg hover:scale-105 transition duration-300"
        />
        </div>
      </div>
    </div>
  );
};

export default About;
