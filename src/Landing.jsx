import { PlusCircleIcon } from "@heroicons/react/24/outline";
import logo from "../public/Logo.png";

const features = [
  {
    name: "Tea Spotlights",
    description:
      "Explore new teas in our Tea Spotlight series. Experience the unique flavors, stories, and traditions that make each tea special.",
  },
  {
    name: "Brewing Techniques and Tips",
    description:
      "Master the art of tea brewing with our expert tips and techniques. Learn how to unlock the full potential of every leaf for the perfect cup every time.",
  },
  {
    name: "Tea and Health",
    description:
      "Unlock the health benefits of tea with our wellness-focused blogs. Discover how different teas can enhance your health and wellbeing, one soothing cup at a time.",
  },
  {
    name: "Tea Culture, History, and More",
    description:
      "Embark on a journey through the rich history and culture of tea. Explore traditions from ancient ceremonies to modern tea innovations.",
  },
];
// #10100f (black),
// #457d58 (green),
// #f6f6e9 (oatmeal)

export default function Landing() {
  return (
    <div className="bg-oatmeal">
      <header className="bg-leaf absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="SimplySteeped Header"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">SimplySteeped - Tea Blog</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt="SimplySteeped - Tea Blog"
              />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="text-base  leading-7 text-indigo-600">
                A tea blog all about tea
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                SimplySteeped is coming soon!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join the SimplySteeped community: Subscribe to our newsletter
                and follow our socials for a deep dive into exquisite teas,
                brewing secrets, and more - a world of flavors awaits your
                discovery!
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <PlusCircleIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <a
            className="p-4"
            href="https://www.facebook.com/SimplySteeped/"
            aria-label="SimplySteeped Facebook"
            target="_blank"
          >
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-oatmeal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              aria-label="SimplySteeped Facebook button"
              title="SimplySteeped Facebook button"
              style={{ backgroundColor: "#1877f2" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
          </a>
          <a
            className="p-4"
            href="https://www.instagram.com/teasimplysteeped/"
            aria-label="SimplySteeped Instagram"
            target="_blank"
          >
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-oatmeal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              aria-label="SimplySteeped Instagram button"
              title="SimplySteeped Instagram button"
              style={{ backgroundColor: "#c13584" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
          </a>
          <a
            className="p-4"
            href="https://www.pinterest.com/teasimplysteeped/?actingBusinessId=1060597918404359482"
            aria-label="SimplySteeped Pinterest"
            target="_blank"
          >
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              aria-label="SimplySteeped Pinterest button"
              title="SimplySteeped Pinterest button"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-oatmeal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#e60023" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className="bg-leaf py-16 sm:py-24">
          <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="bg-oatmeal relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get notified when we’re launching.
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                Brews and News: Subscribe to our newsletter for the latest in
                tea trends, tips, and exclusive content. Stay up-to-date with
                the evolving world of tea, from brewing secrets to wellness
                insights, all delivered straight to your inbox
              </p>
              <form
                className="mx-auto mt-10 flex max-w-md gap-x-4"
                noValidate=""
                acceptCharset="UTF-8"
                method="post"
                action="https://link.mail.tailwindapp.com/ngs/1410258/7I3FqDdu0DsTcSS2bkGr/embedded"
              >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-oatmeal ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  aria-label="SimplySteeped Newsletter Submit button"
                  title="SimplySteeped Newsletter Submit button"
                  className="bg-leaf flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold text-oatmeal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Notify me
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
