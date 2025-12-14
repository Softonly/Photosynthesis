"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pageA4 from "@/public/images/carbon_cycle.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Atmosfer Dengesi ve Sera Etkisi
            </span>
            <p className="pb-6 font-medium">
            - &quot;Fotosentez yapan canlılar, atmosferdeki karbondioksiti tüketip yerine oksijen vererek doğadaki gaz döngüsünü ve solunum için gerekli hava kalitesini sağlarlar.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Ayrıca, küresel ısınmaya neden olan fazla karbondioksiti atmosferden temizleyerek sera etkisinin azalmasına büyük katkıda bulunurlar.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pageA4} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
