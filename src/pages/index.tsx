import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1);
  }, []);
  return <main>{show && <StaticImage src="../images/icon.png" alt="" />}</main>;
};

export default IndexPage;
