import { axios } from "../../lib/axios";

export const getPropertyDetails = async (id) => {
  const { data } = await axios.get("/properties/detail", {
    params: { externalID: id },
  });
  return data;
};
