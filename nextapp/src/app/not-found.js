import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">This page does not exist</h1>
      <p className="text-xl mb-4">It seems you've hit a dead end.</p>
      <Link href="/" className="text-lg text-accentBlue hover:underline transition duration-300">
        Go back to the home page
      </Link>
    </div>
  );
}
