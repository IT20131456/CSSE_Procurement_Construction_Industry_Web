import axios from "axios";

import { BASED_URL, AllItems } from "../FetchAllItem";

jest.mock("axios");

describe("ItemsDetails", () => {
  describe("when API call is successful", () => {
    it("should return Items Details list", async () => {
      // given
      const items = [
        {
          _id: "6361299a8fe0b2fc0189b462",
          supplierName: "JRV Solutions",
          itemName: "Cement 50Kg",
          stocks: "100",
          price: "2130",
        },
      ];
      axios.get.mockResolvedValueOnce(items);

      // when
      const result = await AllItems();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASED_URL}/items/getAll`);
      expect(result).toEqual(items);
    });
  });
});
