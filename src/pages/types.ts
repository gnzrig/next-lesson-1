interface PeopleObject {
  country: string;
  postalCode: number;
  district: string;
}

interface People {
  name: string;
  age: number;
  email: string;
  profile: string;
  gender: string;
  address: PeopleObject;
}
