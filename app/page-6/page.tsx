"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/Calvin-cycle-min.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Oksijenin Kaynağının Keşfi
            </span>
            <p className="pb-6 font-medium">
            &quot;Van Niel ve Robert Hill’in çalışmaları, fotosentez sonucu atmosfere verilen oksijenin kaynağının karbondioksit değil, suyun parçalanması olduğunu ispatlamıştır.&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Hill reaksiyonu sayesinde, kloroplastların ışık ve su varlığında oksijen üretebildiği ve elektron transferi süreçleri netleşmiştir.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pag} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
