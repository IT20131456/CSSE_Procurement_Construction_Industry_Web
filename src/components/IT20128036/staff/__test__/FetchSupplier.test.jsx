import axios from "axios";

import { BASED_URL, supplierDetails } from "../FetchSuppliers";

jest.mock("axios");

describe("supplierDetails", () => {
  describe("when API call is successful", () => {
    it("should return Supplier Details list", async () => {
      // given
      const suppliers = [
        {
          _id: "63585f6e8e26a56d3774ea1f",
          uid: "da446b66-525f-44a0-ae43-e41a53beba0d",
          name: "fertf",
          email: "rtgert",
          mobile: "rtgert",
          address: "rtgert",
        },
      ];
      axios.get.mockResolvedValueOnce(suppliers);

      // when
      const result = await supplierDetails();

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${BASED_URL}/supplier/details/getAll`
      );
      expect(result).toEqual(suppliers);
    });
  });
});
