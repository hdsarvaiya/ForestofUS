import { useReveal } from "@/hooks/use-reveal";
import WavyDivider from "./wavy-divider";

const GetInvolvedSection = () => {
  const { ref } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="join" className="py-20 bg-forest-dark text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-12 reveal">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Get <span className="text-soft-yellow">Involved</span>
            </h2>
            <p className="font-poppins text-lg max-w-3xl mx-auto">
              Join our community and be part of something meaningful. There are
              many ways to contribute and connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div
              ref={ref}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm card reveal"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="mb-4 text-center">
                <i className="fas fa-hands-helping text-soft-yellow text-4xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-bold text-center mb-4">
                Volunteer
              </h3>
              <p className="font-poppins text-gray-200 mb-6 text-center">
                Contribute your time and talents to our various initiatives from
                education to sustainability.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-transparent hover:bg-soft-yellow border-2 border-soft-yellow text-soft-yellow hover:text-forest-dark font-medium py-2 px-4 rounded-full transition transform hover:scale-105"
                >
                  Sign Up
                </a>
              </div>
            </div>

            {/* Donate */}
            <div
              ref={ref}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm card reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="mb-4 text-center">
                <i className="fas fa-seedling text-soft-yellow text-4xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-bold text-center mb-4">
                Donate
              </h3>
              <p className="font-poppins text-gray-200 mb-6 text-center">
                Support our programs financially. Every contribution helps us
                create more impact in our community.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-transparent hover:bg-soft-yellow border-2 border-soft-yellow text-soft-yellow hover:text-forest-dark font-medium py-2 px-4 rounded-full transition transform hover:scale-105"
                >
                  Contribute
                </a>
              </div>
            </div>

            {/* Participate */}
            <div
              ref={ref}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm card reveal"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="mb-4 text-center">
                <i className="fas fa-music text-soft-yellow text-4xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-bold text-center mb-4">
                Participate
              </h3>
              <p className="font-poppins text-gray-200 mb-6 text-center">
                Join our jamming sessions, attend workshops, or stay at our
                Airbnb to experience our community.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-transparent hover:bg-soft-yellow border-2 border-soft-yellow text-soft-yellow hover:text-forest-dark font-medium py-2 px-4 rounded-full transition transform hover:scale-105"
                >
                  Join Events
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div
            ref={ref}
            className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-filter backdrop-blur-sm mt-12 reveal"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  Stay Connected
                </h3>
                <p className="font-poppins text-gray-200 mb-4">
                  Subscribe to our newsletter to receive updates on events,
                  initiatives, and stories from our community.
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white bg-opacity-20 text-white placeholder-gray-300 border-0 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-soft-yellow flex-grow"
                  />
                  <button
                    type="submit"
                    className="bg-soft-yellow hover:bg-white text-forest-dark font-medium py-3 px-6 rounded-full transition transform hover:scale-105 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WavyDivider position="bottom" color="#f7f3e9" waveStyle="wave-1" />
    </section>
  );
};

export default GetInvolvedSection;
