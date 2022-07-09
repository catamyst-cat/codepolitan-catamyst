import { Button } from "../../components";

import { ArrowDown } from "phosphor-react";

export function HomeHero() {
  return (
    <section className="layout mx-auto px-5 flex flex-wrap gap-5 pt-10 md:pt-20 pb-10">
      <div className="max-w-[600px] space-y-5">
        <header className="space-y-2">
          <h2 className="text-2xl font-bold text-teal-500 flex gap-2 items-center">
            <span>Belajar Dengan </span>
            <img
              className="h-[30px]"
              src="/images/catamyst.png"
              alt="Catamyst"
            />
          </h2>
          <h1 className="text-5xl font-bold text-slate-800">
            Menguasai Frontend Web Development
          </h1>
        </header>

        <div className="space-y-2 text-lg">
          <p>
            Ayo kita belajar web development dengan langsung dimentori oleh
            ahlinya!
          </p>
          <p>
            Mulai dari prinsip fundamental hingga teknik yang modern. Agar hasil
            website dan aplikasimu bisa canggih dan juga nyaman.
          </p>
          <p>
            Dengan alur kerja profesional, membantumu membuat proyek nyata,
            mendapatkan pekerjaan, melakukan freelancing, memulai tech business,
            bahkan kerja online secara remote.
          </p>
        </div>

        <div>
          <Button className="flex items-center gap-2">
            Selengkapnya
            <ArrowDown weight="bold" />
          </Button>
        </div>
      </div>

      <div>
        <img
          className="max-h-[400px]"
          src="https://program.codepolitan.com/wp-content/uploads/sites/2/2022/05/sample.png"
          alt="Hero Image"
        />
      </div>
    </section>
  );
}
