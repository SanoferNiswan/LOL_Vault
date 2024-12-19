import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="p-10 text-center text-white rounded-lg shadow-lg h-screen">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-6">Have any questions? Reach out to us!</p>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-1/2 p-4 rounded-lg text-white bg-transparent border border-gray-300 shadow-lg"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              required
              className="w-1/2 p-4 rounded-lg text-white bg-transparent border border-gray-300 shadow-lg"
              rows={5}
            />
          </div>
          <button className="w-1/2 py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
