import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout> 
      <section className="p-10 flex flex-col items-center space-y-8 ">
        {/* About Section */}
        <div className="max-w-4xl w-full bg-transparent text-white rounded-lg shadow-lg p-8 transition-all hover:scale-105 hover:shadow-2xl">
          <h1 className="text-2xl font-semibold mb-4 text-accentBlue ">About Us</h1>
          <p className="text-lg mb-6">
            We bring you the best jokes, handpicked for your amusement! Whether you're looking to lighten your day or impress your friends with a clever punchline, JokesApp is the place to be.
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl w-full bg-transparent text-white rounded-lg shadow-lg p-8 transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-accentBlue ">Our Features</h2>
          <p className="text-lg mb-6">
          Access a wide variety of jokes, including programming jokes, dad jokes, and more.Simple and easy-to-use interface with just one click to get a new joke.Interactive punchline reveal feature for a fun surprise every time.Regular updates with fresh jokes so you’ll never run out of fun!
          </p>
        </div>

        {/* How It Works Section */}
        <div className="max-w-4xl w-full bg-transparent text-white rounded-lg shadow-lg p-8 transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-accentBlue ">How It Works</h2>
          <p className="text-lg mb-6">
            With JokesApp, simply tap the button to get a random joke. Click on the "..." to reveal the punchline and enjoy! You can also fetch a new joke whenever you're ready for more laughter.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-4xl w-full bg-transparent text-white rounded-lg shadow-lg p-8 transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-accentBlue ">Why Choose JokesApp?</h2>
          <p className="text-lg mb-6">
            We believe that laughter is the best medicine, and JokesApp is here to bring that medicine straight to you. Whether you're on a break or need a quick laugh, our collection of jokes is sure to brighten your day. Plus, with the simple design and seamless experience, it’s all about getting you the joke you need, when you need it.
          </p>
        </div>

        {/* Join the Fun Section */}
        <div className="max-w-4xl w-full bg-transparent text-white rounded-lg shadow-lg p-8 transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-accentBlue ">Join the Fun!</h2>
          <p className="text-lg">
            Dive into the world of humor and start laughing with JokesApp. It’s free, it’s fun, and it’s always just a click away. So, what are you waiting for? Start enjoying the best jokes right now!
          </p>
        </div>

        {/* Extra Content Section */}
        <div className="max-w-4xl w-full bg-transparent text-white rounded-lg shadow-lg p-8 transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-accentBlue ">Stay Connected</h2>
          <p className="text-lg mb-6">
            Follow us on social media to stay up-to-date with the latest jokes and updates! Join our community, share your favorite jokes, and have fun with others who love humor just as much as you do!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
