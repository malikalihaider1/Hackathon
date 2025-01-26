import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center" 
        style={{ backgroundImage: 'url(https://via.placeholder.com/1500x600?text=Saylani+Welfare+Trust)' }}>
        <div className="bg-[#8dc63f] p-8 text-center text-white rounded-lg">
          <h1 className="text-4xl font-bold mb-4">About Saylani Welfare Trust</h1>
          <p className="text-lg">Empowering lives through compassion, innovation, and care since 1999.</p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>
                To serve humanity by providing quality services in education, healthcare, and poverty alleviation
                without any discrimination, ensuring that every individual lives a dignified and self-sustained life.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>
                A world where everyone has equal opportunities to thrive, free from poverty and ignorance,
                supported by compassionate communities and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 md:px-16 bg-green-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-4xl font-bold">5M+</h3>
              <p>Meals Served Annually</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">200K+</h3>
              <p>Students Empowered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p>Healthcare Centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="italic">
                "Saylani changed my life. Their education program helped me gain the skills I needed to secure a job
                and support my family."
              </p>
              <h4 className="mt-4 font-semibold">- Ali Khan</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="italic">
                "The healthcare services provided by Saylani are a blessing. They offered free treatment for my
                child when we couldn’t afford it."
              </p>
              <h4 className="mt-4 font-semibold">- Fatima Zahra</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="italic">
                "Their food distribution programs ensure no one in our community goes to bed hungry. Saylani is a
                true example of kindness."
              </p>
              <h4 className="mt-4 font-semibold">- Ahmed Raza</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-800 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="mb-8 text-lg">
            Become a part of the Saylani family and help us make a difference in millions of lives.
          </p>
          <button className="bg-green-500 hover:bg-green-600 transition py-3 px-8 rounded-lg text-lg font-semibold">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
