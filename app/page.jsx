import styles from "./page.module.css";
import { links } from "./linksData";
import Image from "next/image";

export default function Home() {
  const styling = {
    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,1) 100%), url('images/bg1.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  console.log(links);
  return (
    <main className={styles.main} style={styling}>
      <div className="grid items-center justify-center min-h-screen grid-cols-1">
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-0 mt-10 mb-5 text-center select-none user">
          <h1 className="text-3xl font-bold text-white lg:w-96 drop-shadow-lg">
            Motri
          </h1>
          <h2 className="text-xl font-bold text-white lg:w-96 drop-shadow-lg flex-wrap sm:w-full">
            artist and producer
          </h2>
          <Image
            src="/images/user.jpg"
            width={150}
            height={150}
            alt="motri"
            className="rounded-full shadow"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-0 mb-10 text-center links ">
          {links.map((item) => (
            <a
              className={
                "px-6 py-3 bg-opacity-60 border-opacity-5 border-2 backdrop-filter border-solid border-black transition-all shadow w-full lg:w-96 md:w-96 hover:translate-x-2 hover:shadow-md backdrop-blur-md hover:backdrop-blur-3xl rounded font-bold text-white hover:underline hover:drop-shadow-2xl"
              }
              key={item.name}
              href={item.url}
              target="_blank"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
