import { useEffect, useState } from "react";

function App() {
  const launchDate = new Date("2024-01-01T00:00:00.000Z");
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
          Simply Steeped
        </h1>
        <h2 className="mt-6 text-sm tracking-tight text-white sm:text-5xl">
          Initiating Your Tea Journey
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
    </main>
  );
}

export default App;
