import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../../src/pages/api/data"
import * as libs from "./../../src/utils/custom";

const Boxnews = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16">
      <h1 className="font-bold text-2xl p-4">Tin tức...</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2 relative">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="/"
            width="720"
            height="451"
          />
          <div className="desc_main_news">
            <Link className="font-bold text-2xl" href="newsdetail">
              1001 kinh nghiệm cải tạo nhà cũ thành nhà mới của một “phù thủy”
              gia
            </Link>
            <div className="desc">
              Cải tạo nhà cũ - câu chuyện tưởng xưa như diễm nhưng vẫn là vấn đề
              vô cùng “nhức nhối”. Nếu bạn cũng đang gặp khó khăn thì hãy nghe
              các “phù thủy” gia của chúng tôi tư vấn kinh nghiệm cải tạo nhà cũ
              thành nhà mới phía dưới nhé.
            </div>
          </div>
        </div>
        {data?.map((item, index) => {
          return (
            <div className="w-full h-full hover01" key={item.id}>
              <figure>
                <Image src={item.image} alt="/" width={720} height={451} />
              </figure>
              <div className="textnews">
                <Link
                  href={`reading/${libs.convertToSlug(item.title)+`-${item.id}`}`}
                  className="linkinboxnew"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boxnews;
