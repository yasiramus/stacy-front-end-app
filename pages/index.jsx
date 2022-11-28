import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <div className="h-18 w-18 bg-green-500 rounded-[50px]">
              <EnvelopeIcon
                className=" m-2 h-14 w-14 text-white group-hover:text-slate-100"
                aria-hidden="true"
              />
            </div>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
              SMS API PROJECT
            </h2>
          </div>

          <form>
            <div>
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Username *
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="name"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Password *"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Key
                </label>
                <input
                  id="key"
                  name="key"
                  type="key"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Key *"
                />
                <span className="text-sm text-gray-500 pl-2.5">
                      No need for a Username and Password if you enter a key.
                </span>
              </div>
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  source *
                </label>
                <input
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Source *"
                />
                 <span className="text-sm text-gray-500 pl-2.5">
                     An approved Sender ID.
                </span>
              </div>
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  destination
                </label>
                <input
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Destination *"
                />
                 <span className="text-sm text-gray-500 pl-2.5">
                      Recipient's phone number.
                </span>
              </div>
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Message
                </label>

                <textarea
                  placeholder="Message *"
                  className="relative block w-full appearance-none rounded border resize-none border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  cols="20"
                  rows="5"
                />
                 <span className="text-sm text-gray-500 pl-2.5">
                      Your text message content.
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Request delivery report(DLR)
                </label>
              </div>
            </div>  

              <button
                type="submit"
                className="group relative w-full rounded border border-transparent bg-green-600 py-4 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit
              </button>
          </form>
        </div>
      </div>
    </>
  );
}
