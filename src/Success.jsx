import Logo2 from "../public/Logo2.png";

const Success = ({ email }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-oatmeal mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
              src={Logo2}
              alt="Simply Steeped - Email Success"
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Thank You
              </h2>
              <p className="mt-6 text-lg leading-8 text-black">
                Your subscription has been successfully confirmed at{" "}
                <strong>{email}</strong>. You're now officially part of our
                tea-loving family! Get ready to immerse yourself in a world
                filled with the finest teas, expert brewing tips, and exclusive
                updates straight to your inbox. Stay tuned for your first cup of
                news and inspiration!
                <br />
                <br />
                Warm regards,
                <br />
                SimplySteeped 🍵
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Success;
