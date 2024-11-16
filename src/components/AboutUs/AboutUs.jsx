import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white p-8">
      <div className="container mx-auto">
        {/* Section: Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Gadget Heaven</h1>
          <p className="text-lg">Where Technology Meets Innovation</p>
        </div>

        {/* Section: Mission */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Mission</h2>
          <p>
            At Gadget Heaven, we are committed to providing the best in class
            gadgets that bring innovation, convenience, and excitement to your
            life. Our goal is to curate a collection of the most cutting-edge
            products that enhance your daily experiences, whether it's through
            smart devices, accessories, or tech gadgets.
          </p>
        </div>

        {/* Section: Our Values */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-5/12 mb-6 lg:mb-0">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Customer-Centric: We listen to you and value your feedback.</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Innovation: We embrace new technologies to stay ahead.</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Sustainability: We care for the environment and choose eco-friendly products.</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Integrity: We operate with transparency and honesty.</span>
              </li>
            </ul>
          </div>

          {/* Section: Story */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-5/12">
            <h2 className="text-3xl font-semibold text-purple-500 mb-4">Our Story</h2>
            <p>
              Gadget Heaven was founded by a group of tech enthusiasts who wanted
              to share their passion for gadgets with the world. What started as
              a small project to bring the latest tech to friends and family
              quickly grew into a thriving online store. We are proud to offer
              top-tier products and services that cater to the needs of tech lovers
              everywhere.
            </p>
          </div>
        </div>

        {/* Section: Fun Fact */}
        <div className="text-center bg-white text-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Fun Fact</h2>
          <p className="text-lg">
            Did you know? We started with just a single product – the world's
            first smartwatch! Since then, we’ve expanded to include hundreds of
            innovative gadgets that continue to revolutionize how we live, work,
            and play.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
