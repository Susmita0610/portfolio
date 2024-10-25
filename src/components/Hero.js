import Image from "next/image";

export default function Hero() {
  return (
    <>
    <section className="flex flex-col items-center justify-center text-center min-h-screen space-y-5">
        <Image
          className="rounded-full"
          src="/profile1.png"
          width={200}
          height={100}
          alt="Picture of the author"
        />
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Hi, I'm <span className="text-blue-500">Subhranil</span>
        </h2>
        <p className="text-xl max-w-xl">
          A passionate{" "}
          <span className="text-blue-500">Full-Stack Developer</span> and{" "}
          <span className="text-blue-500">Blockchain Enthusiast</span>. I love
          building web and decentralized applications.
        </p>
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          View My Work
        </a>
      </section>
    </>
  );
}