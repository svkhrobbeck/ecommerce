import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";
import { Helmet } from "react-helmet";

const PageNotFound: FC = (): JSX.Element => {
  return (
    <div className="flex-grow-[1] flex flex-col px-4 bg-white place-content-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 | Page Not Found</title>
      </Helmet>
      <div className={`${styles.flexCenter} text-center flex-grow-[1] flex-col`}>
        <h1 className="font-black text-gray-200 text-[128px] md:text-[200px]">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Oh no!</p>
        <p className="mt-4 text-gray-500">We can not find that page.</p>
        <Link className={`${styles.buttonPurple}`} to="/">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
