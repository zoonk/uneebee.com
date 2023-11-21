import Image from "next/image";

const SPONSORS_DEFAULT = "https://github.com/sponsors/wceolin";

const sponsors = [
  {
    key: "sponsor0",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor1",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor2",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor3",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor4",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor5",
    href: SPONSORS_DEFAULT,
    img: null,
  },
];

export default async function HomeSponsors() {
  return (
    <div className="bg-slate-50 rounded-lg mt-10 mx-auto max-w-7xl p-8">
      <h2 className="text-lg font-semibold leading-8 text-gray-900">
        Sponsors
      </h2>

      <div className="grid grid-cols-4 w-full items-center mx-auto mt-4 gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.key}
            href={sponsor.href}
            className="col-span-2 w-full lg:col-span-1"
          >
            {sponsor.img && (
              <Image
                src={sponsor.img}
                alt={sponsor.key}
                unoptimized
                width={158}
                height={48}
                className="max-h-12 object-contain"
              />
            )}

            {!sponsor.img && (
              <div className="h-12 w-full text-center flex rounded-lg flex-col items-center justify-center leading-8 text-gray-700 bg-slate-200">
                Your brand
              </div>
            )}
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
          <span className="hidden md:inline">
            Support our open-source work by becoming a sponsor.
          </span>

          <a
            href="https://zoonk.org/en/sponsors"
            className="font-semibold text-indigo-600"
          >
            <span className="absolute inset-0" aria-hidden="true" /> See all
            sponsors <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  );
}
