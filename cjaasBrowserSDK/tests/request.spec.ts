import { CJaasRequests } from "../src/requests/request";

describe("getEvent ", () => {
  it("should return a cloudEvent", () => {
    let request = new CJaasRequests();

    let event = request.preparePayload("Sample", { name: "test" }, "Alex");
    console.log(event.toString());

    expect(event).toBeTruthy();
  });
});
