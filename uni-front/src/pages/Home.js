import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Slideshow />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Find Your Perfect University Match
            </h1>
            <p className="text-lg text-gray-600">
              Take our comprehensive quiz and get personalized university
              recommendations based on your interests, academic performance, and
              career goals.
            </p>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg 
                           hover:bg-blue-600 transition-colors"
            >
              Take Quiz Now
            </button>
          </div>
        </div>
      </div>

      {/* Our Purpose Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Purpose
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              At UniGuide, we understand that choosing the right university is
              one of the most important decisions in a student's life. Our
              mission is to simplify this process by providing personalized
              recommendations based on comprehensive analysis of your academic
              profile, interests, and career aspirations. We believe that every
              student deserves to find their perfect educational match, and
              we're here to guide you through this journey.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Personalized Recommendations
            </h3>
            <p className="text-gray-600">
              Get university suggestions tailored to your unique profile and
              preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Comprehensive Quiz
            </h3>
            <p className="text-gray-600">
              Take our detailed assessment to help us understand your needs
              better.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Expert Guidance
            </h3>
            <p className="text-gray-600">
              Access valuable insights and advice.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
