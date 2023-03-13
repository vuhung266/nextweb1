import { useRouter } from "next/router";
import React from "react";
import Header from "components/Web/Header";
import Footer from "components/Web/Footer";
import data from "./../api/data";
import { getLastString, convertToSlug } from "./../../utils/custom";
import Link from "next/link";

// export async function getServerSideProps(context) {
//   const { id } = context.query; console.log(id)
//   const lastString = getLastString(id);
//   const result = data.find((item) => item.type == lastString);
//   return {
//     props: {
//       result,
//     },
//   };
// }

function NewsDetail({ data }) {
  const router = useRouter();
  return (
    <div>
      <Header heading="Chi tiết tin" />
      <div className="fables-light-background-color">
        <div className="max-w-[1240px] m-auto">
          <ol className="flex py-3 mb-12">
            <li className="breadcrumb-item">
              <Link href="/" className="fables-second-text-color">
                Trang chủ
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Chi tiết tin
            </li>
          </ol>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
           aaa
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Recent Posts
              </h2>
              {data?.map((item) => (
                <div className="grid grid-cols-3 gap-3 mb-4" key={item.id}>
                  <div className="col-span-1">
                    <Link
                      prefetch={false}
                      href={`${convertToSlug(item.title) + `-${item.id}`}`}
                    >
                      <img src={item.image} alt="" className="w-100" />
                    </Link>
                  </div>
                  <div className="col-span-2">
                    <Link
                      prefetch={false}
                      href={`${convertToSlug(item.title) + `-${item.id}`}`}
                      className="fables-main-text-color bold-font fables-second-hover-color"
                    >
                      {item.title}
                    </Link>
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
