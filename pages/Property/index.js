import { getProperties } from "../../pages/api/getProperties";
import Properties from "../../features/components/Properties";
//
export default function Property({ featuredProperties }) {
  console.log(Properties);
  return (
    <>
      <Properties featuredProperties={featuredProperties} />
    </>
  );
}

export async function getStaticProps() {
  //const { hits } = require("../../json/Properties");
  const properties = await getProperties(20);
  return {
    props: { featuredProperties: properties },
  };
}
