import axios, { AxiosResponse } from "axios";
import { DataAPIResponse, ResultType } from "./types";
import { NextResponse } from "next/server";

export async function GET() {
  const res: AxiosResponse<DataAPIResponse> = await axios.get(
    "https://dummyjson.com/users"
  );
  if (res.status === 200) {
    const results: ResultType = {};
    res.data.users.forEach((user) => {
      if (results[user.company.department]) {
        const oldDepartment = results[user.company.department];
        const male = oldDepartment.male + (user.gender === "male" ? 1 : 0);
        const female =
          oldDepartment.female + (user.gender === "female" ? 1 : 0);
        const minAge =
          oldDepartment.minAge && oldDepartment.minAge < user.age
            ? oldDepartment.minAge
            : user.age;
        const maxAge =
          oldDepartment.maxAge && oldDepartment.maxAge > user.age
            ? oldDepartment.maxAge
            : user.age;
        const ageRange = `${minAge} - ${maxAge}`;
        const hair = {
          ...oldDepartment.hair,
          [user.hair.color]: (oldDepartment.hair[user.hair.color] || 0) + 1,
        };
        const addressUser = {
          ...oldDepartment.addressUser,
          [`${user.firstName}${user.lastName}`]: user.address.postalCode,
        };
        results[user.company.department] = {
          male,
          female,
          minAge,
          maxAge,
          ageRange,
          hair: hair,
          addressUser,
        };
      } else {
        results[user.company.department] = {
          male: user.gender === "male" ? 1 : 0,
          female: user.gender === "female" ? 1 : 0,
          minAge: user.age,
          maxAge: user.age,
          ageRange: `${user.age} - ${user.age}`,
          hair: {
            [user.hair.color]: 1,
          },
          addressUser: {
            [`${user.firstName}${user.lastName}`]: user.address.postalCode,
          },
        };
      }
    });
    for (const key in results) {
      delete results[key].minAge;
      delete results[key].maxAge;
    }
    return NextResponse.json(
      {
        data: results,
        message: "Get department success",
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      data: null,
      message: "Something went wrong. Please try again later.",
    },
    { status: 500 }
  );
}
