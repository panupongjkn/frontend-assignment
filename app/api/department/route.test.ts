/**
 * @jest-environment node
 */

import axios from "axios";
import { GET } from "./route";

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((data, { status }) => ({
      json: () => data,
      status: status,
    })),
  },
}));

jest.mock("axios");

describe("GET /api/department", () => {
  it("should return a list of departments Engineering with 1 person is female", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: {
        users: [
          {
            firstName: "Emily",
            lastName: "Johnson",
            age: 28,
            gender: "female",
            hair: {
              color: "Brown",
            },
            address: {
              postalCode: "29112",
            },
            company: {
              department: "Engineering",
            },
          },
        ],
      },
      status: 200,
    });
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data).toEqual({
      Engineering: {
        male: 0,
        female: 1,
        ageRange: "28 - 28",
        hair: {
          Brown: 1,
        },
        addressUser: {
          EmilyJohnson: "29112",
        },
      },
    });
  });

  it("should return a list of departments Engineering with 2 person are female", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: {
        users: [
          {
            firstName: "Emily",
            lastName: "Johnson",
            age: 28,
            gender: "female",
            hair: {
              color: "Brown",
            },
            address: {
              postalCode: "29112",
            },
            company: {
              department: "Engineering",
            },
          },
          {
            firstName: "Emila",
            lastName: "Johnsons",
            age: 39,
            gender: "female",
            hair: {
              color: "Brown",
            },
            address: {
              postalCode: "29113",
            },
            company: {
              department: "Engineering",
            },
          },
        ],
      },
    });
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data).toEqual({
      Engineering: {
        male: 0,
        female: 2,
        ageRange: "28 - 39",
        hair: {
          Brown: 2,
        },
        addressUser: {
          EmilyJohnson: "29112",
          EmilaJohnsons: "29113",
        },
      },
    });
  });

  it("should return a list of departments Engineering with 2 person are 1 male and 1 female", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: {
        users: [
          {
            firstName: "Emily",
            lastName: "Johnson",
            age: 28,
            gender: "female",
            hair: {
              color: "Brown",
            },
            address: {
              postalCode: "29112",
            },
            company: {
              department: "Engineering",
            },
          },
          {
            firstName: "Lio",
            lastName: "Jenero",
            age: 30,
            gender: "male",
            hair: {
              color: "Black",
            },
            address: {
              postalCode: "29199",
            },
            company: {
              department: "Engineering",
            },
          },
        ],
      },
    });
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data).toEqual({
      Engineering: {
        male: 1,
        female: 1,
        ageRange: "28 - 30",
        hair: {
          Brown: 1,
          Black: 1,
        },
        addressUser: {
          EmilyJohnson: "29112",
          LioJenero: "29199",
        },
      },
    });
  });

  it("should return a list of departments Engineering and Support with 3 person are 1 male and 2 female", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: {
        users: [
          {
            firstName: "Emily",
            lastName: "Johnson",
            age: 28,
            gender: "female",
            hair: {
              color: "Brown",
            },
            address: {
              postalCode: "29112",
            },
            company: {
              department: "Engineering",
            },
          },
          {
            firstName: "Lio",
            lastName: "Jenero",
            age: 30,
            gender: "male",
            hair: {
              color: "Black",
            },
            address: {
              postalCode: "29199",
            },
            company: {
              department: "Engineering",
            },
          },
          {
            firstName: "Luzy",
            lastName: "Jeen",
            age: 31,
            gender: "female",
            hair: {
              color: "Brown",
            },
            address: {
              postalCode: "29200",
            },
            company: {
              department: "Support",
            },
          },
        ],
      },
    });
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data).toEqual({
      Engineering: {
        male: 1,
        female: 1,
        ageRange: "28 - 30",
        hair: {
          Brown: 1,
          Black: 1,
        },
        addressUser: {
          EmilyJohnson: "29112",
          LioJenero: "29199",
        },
      },
      Support: {
        male: 0,
        female: 1,
        ageRange: "31 - 31",
        hair: {
          Brown: 1,
        },
        addressUser: {
          LuzyJeen: "29200",
        },
      },
    });
  });

  it("should return a null value with error message", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      status: 500,
      data: null,
    });
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.data).toBe(null);
  });
});
