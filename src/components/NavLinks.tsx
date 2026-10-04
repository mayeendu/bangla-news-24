import Link from "next/link";
import React from "react";

interface NavsType {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: NavsType[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);
  console.log(navs);

  return (
    <div className="flex gap-5 justify-center mt-5">
      <Link href={"/"}> হোম </Link>

      {filteredNavs.map((n, i) => (
        <Link key={i} href={n.slug}>
          {n.title}{" "}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
