// import Image from 'next/image'
import List from "app/components/List";
import Pagination from "app/components/Pagination";
import Search from "app/components/Search";
import Sidebar from "app/components/Sidebar";
import { SEARCH_TYPE } from "app/types";
// import { getCode } from "app/services/fethers";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Home() {
  const router = useRouter();
  const { pathname, query } = router;
  // useEffect(() => {
  //   getCode({
  //     q: "React",
  //   }).then((data) => {
  //     console.log("data", data);
  //   });
  // });
  // param response url
  const q = useMemo(() => {
    if (query["q"]) {
      return String(query["q"]);
    }
    return "";
  }, [query]);

  const type = useMemo(() => {
    if (query["type"]) {
      return String(query["type"]);
    }
    return SEARCH_TYPE.REPO.toLocaleLowerCase();
  }, [query]);

  return (
    <div className="container max-w-4xl px-4 py-12 mx-auto">
      <Head>
        <title>GitHub repositories Search App</title>
        <meta
          name="description"
          content="an app to search GitHub repositories."
        />
        <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Search
          defaultValue={q}
          onChange={(value) => {
            console.log("onchange", value);
          }}
        ></Search>
        <div className="flex flex-row justify-start mt-4">
          <div className="w-full lg:w-3/12">
            <Sidebar q={q} type={type}></Sidebar>
          </div>
          <div className="w-full lg:w-9/12">
            <List></List>
            <Pagination></Pagination>
          </div>
        </div>
      </main>
    </div>
  );
}
