import axios from "axios";

import { BASED_URL, specificName, name } from "../FetchSupplierName";

jest.mock("axios");

describe("supplierProfile", () => {
  describe("when API call is successful", () => {
    it("should return Supplier Profile", async () => {
      // given
      const suppliers = [
        {
          _id: "63585f6e8e26a56d3774ea1f",
          uid: "da446b66-525f-44a0-ae43-e41a53beba0d",
          name: "Anga",
          email: "ang@gmail.com",
          mobile: "0745678765",
          address: "5/7, colombo",
        },
      ];
      axios.get.mockResolvedValueOnce(suppliers);

      // when
      const result = await specificName();

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${BASED_URL}/supplier/details/${name}`
      );
      expect(result).toEqual(suppliers);
    });
  });
});
