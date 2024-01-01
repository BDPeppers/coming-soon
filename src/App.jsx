import { useEffect, useState } from "react";

function App() {
  const launchDate = new Date("2024-02-01T00:00:00.000Z");
  const [countdownDate] = useState(launchDate.getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <main
      style={{ backgroundColor: "#457D58" }}
      className="grid place-items-center py-24 sm:py-32 lg:px-8 sm:min-h-0"
    >
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Discover the World of Tea: Unveiling Soon at Simply Steeped Tea Blog!
        </h1>
        <h2 className="mt-6 text-lg tracking-tight text-white sm:text-5xl">
          Initiate your journey into the world of tea with us!
        </h2>
        <h3 className="mt-6 mb-6 text-base leading-7 text-gray-100">
          Coming soon!
        </h3>
      </div>
      <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
        <div className="flex flex-col p-2 rounded-xl text-neutral-content bg-gray-200">
          <span className="font-mono text-5xl sm:text-5xl">
            <span>{state.days}</span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 rounded-xl text-neutral-content bg-gray-400 ">
          <span className="font-mono text-5xl sm:text-5xl">
            <span>{state.hours}</span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 rounded-xl text-neutral-content bg-gray-200">
          <span className="font-mono text-5xl sm:text-5xl">
            <span>{state.minutes}</span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 rounded-xl text-neutral-content bg-gray-400">
          <span className="font-mono text-5xl sm:text-5xl">
            <span>{state.seconds}</span>
          </span>
          sec
        </div>
      </div>
      <div className="text-center pt-14">
        <h2 className="p-4 mt-6 text-lg tracking-tight text-white sm:text-3xl">
          In the meantime, follow us on social media to stay up to date with the
          latest!
        </h2>
        <a
          className="p-4"
          href="https://www.instagram.com/teasimplysteeped/"
          target="_blank"
        >
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
          target="_blank"
        >
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
    </main>
  );
}

export default App;
