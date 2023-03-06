import { useRouter } from "next/router";
import React from "react";
import Header from "components/Web/Header";
import Footer from "components/Web/Footer";
import data from "./../api/data";
import * as libs from "./../../utils/custom";
import Link from "next/link";

function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const lastString = libs.getLastString(id);
  const result = data.find((item) => item.id == lastString);
  return (
    <div>
      <Header heading="Chi tiết tin" />
      <div className="fables-light-background-color">
        <div className="max-w-[1240px] m-auto">
          <ol className="flex py-3 mb-12">
            <li className="breadcrumb-item">
              <a href="#" className="fables-second-text-color">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog Single img
            </li>
          </ol>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
            <img src={result?.image} alt="" className="w-100" />
            <h1 className="semi-font my-3 text-2xl">{result?.title}</h1>
            <div className="font-14 my-3 content-news mb-12">
              <div dangerouslySetInnerHTML={{ __html: result?.content }}></div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Recent Posts
              </h2>
              {data.map((item) => (
                <div className="grid grid-cols-3 gap-3 mb-4" key={item.id}>
                  <div className="col-span-1">
                    <Link
                      prefetch={false}
                      priority={true}
                      href={`${libs.convertToSlug(item.title) + `-${item.id}`}`}
                    >
                      <img src={item.image} alt="" className="w-100" />
                    </Link>
                  </div>
                  <div className="col-span-2">
                    <Link
                      prefetch={false}
                      priority={true}
                      href={`${libs.convertToSlug(item.title) + `-${item.id}`}`}
                      className="fables-main-text-color bold-font fables-second-hover-color"
                    >
                      {item.title}
                    </Link>
                    <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                      09 November, 2018
                    </p>
                  </div>
                </div>
              ))}
              <div className="text-right">
                <a
                  href="#"
                  className="btn fables-second-text-color underline fables-main-text-color font-14"
                >
                  {" "}
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsDetail;
