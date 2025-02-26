import { CivilHistoryItemTypes, CarHistoryItemTypes, WeaponHistoryItemTypes} from "@prisma/client";

export const civils = [
  {
    name: "Michael Smaith",
    idCard: "855-590-6950",
    gunLicense: true,
    drivingLicense: true,
    workPlace: "Los Santos Police, Officer",
    history: [
      { happened: new Date('2018-05-12T14:30:00'),freed: new Date(), description: "Conviction for theft", type: CivilHistoryItemTypes.prisonTerm },
      { happened: new Date('2021-06-24T09:00:00'), description: "Speeding fine", type: CivilHistoryItemTypes.fine },
    ],
    cars: [
      { brand: "Infernus", color: "red", plate: "8FH2A6", history: [{ happened: new Date('2021-06-24T10:00:00'), description: "Speeding fine", type: CarHistoryItemTypes.fined }] }
    ],
    weapons: [
      { serial: "CP-245235", brand: "Combat Pistol", history: [{ happened: new Date('2020-08-12T17:30:00'), description: "Used for self-defense", type: WeaponHistoryItemTypes.used }] },
      { serial: "AR15-3489", brand: "Carbine Rifle", history: [{ happened: new Date('2022-09-10T08:00:00'), description: "Used in a robbery", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "James Browwn",
    idCard: "669-236-1833",
    gunLicense: false,
    drivingLicense: true,
    workPlace: "Hotel, Receptionist",
    history: [
      { happened: new Date('2015-11-05T13:00:00'), freed: new Date(), description: "Jailed for disorderly conduct", type: CivilHistoryItemTypes.prisonTerm },
    ],
    cars: [],
    weapons: [],
  },
  {
    name: "John Doee",
    idCard: "737-781-5799",
    gunLicense: false,
    drivingLicense: false,
    workPlace: "Garage, Technician",
    history: [
      { happened: new Date('2016-12-20T15:30:00'), description: "Speeding fine", type: CivilHistoryItemTypes.fine },
    ],
    cars: [
      { color: "black", brand: "Blista", plate: "BP1A90", history: [{ happened: new Date('2017-03-21T16:20:00'), freed: new Date(), description: "Confiscated for illegal use", type: CarHistoryItemTypes.confiscated }] }
    ],
    weapons: [],
  },
  {
    name: "Sarah Williiams",
    idCard: "542-890-3453",
    gunLicense: true,
    drivingLicense: true,
    workPlace: "Los Santos Medical Center, Doctor",
    history: [
      { happened: new Date('2019-07-10T11:45:00'), freed: new Date(), description: "Conviction for assault", type: CivilHistoryItemTypes.prisonTerm },
      { happened: new Date('2022-02-17T13:30:00'), description: "DUI fine", type: CivilHistoryItemTypes.fine },
    ],
    cars: [
      { brand: "Zentorno", color: "white", plate: "XPL8B6", history: [{ happened: new Date('2022-02-17T14:30:00'), description: "Speeding fine", type: CarHistoryItemTypes.fined }] }
    ],
    weapons: [
      { serial: "PST-221", brand: "Pistol", history: [{ happened: new Date('2022-06-10T10:15:00'), description: "Used for self-defense", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "David Leee",
    idCard: "345-765-8902",
    gunLicense: false,
    drivingLicense: true,
    workPlace: "LS Bank, Manager",
    history: [
      { happened: new Date('2017-04-15T14:20:00'), freed: new Date(), description: "Caught for bribery", type: CivilHistoryItemTypes.prisonTerm },
      { happened: new Date('2020-03-10T08:00:00'), description: "Traffic fine", type: CivilHistoryItemTypes.fine },
    ],
    cars: [],
    weapons: [],
  },
  {
    name: "Anna Whhite",
    idCard: "654-987-1234",
    gunLicense: true,
    drivingLicense: true,
    workPlace: "LS DMV, Officer",
    history: [
      { happened: new Date('2021-05-10T17:00:00'), description: "Speeding fine", type: CivilHistoryItemTypes.fine },
      { happened: new Date('2023-08-25T14:30:00'), description: "Driving without license", type: CivilHistoryItemTypes.deprDrivingLicense },
    ],
    cars: [
      { brand: "Elegy", color: "blue", plate: "EZ2P3H", history: [{ happened: new Date('2023-08-26T15:10:00'), description: "Speeding fine", type: CarHistoryItemTypes.fined }] }
    ],
    weapons: [
      { serial: "BAM-123", brand: "Shotgun", history: [{ happened: new Date('2023-09-01T10:00:00'), description: "Used in robbery", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "Jessica Parkker",
    idCard: "898-123-3456",
    gunLicense: true,
    drivingLicense: false,
    workPlace: "GTA Warehouse, Manager",
    history: [
      { happened: new Date('2015-08-30T19:30:00'), description: "Fine for parking", type: CivilHistoryItemTypes.fine },
      { happened: new Date('2020-01-15T21:15:00'), description: "Driving without license", type: CivilHistoryItemTypes.deprDrivingLicense },
    ],
    cars: [],
    weapons: [
      { serial: "AK-4972", brand: "Assault Rifle", history: [{ happened: new Date('2021-06-30T14:00:00'), description: "Used in a robbery", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "Matthew Johnsson",
    idCard: "908-612-5678",
    gunLicense: false,
    drivingLicense: true,
    workPlace: "LS Construction, Worker",
    history: [
      { happened: new Date('2018-03-21T16:40:00'), freed: new Date(), description: "Caught in street brawl", type: CivilHistoryItemTypes.prisonTerm },
    ],
    cars: [
      { brand: "F620", color: "purple", plate: "SPX23Z", history: [{ happened: new Date('2019-11-18T10:15:00'), description: "Speeding fine", type: CarHistoryItemTypes.fined }] }
    ],
    weapons: [],
  },
  {
    name: "Samantha Greeen",
    idCard: "765-987-3211",
    gunLicense: true,
    drivingLicense: true,
    workPlace: "LS Police, Officer",
    history: [
      { happened: new Date('2017-09-05T12:25:00'), freed: new Date(), description: "Theft conviction", type: CivilHistoryItemTypes.prisonTerm },
      { happened: new Date('2019-07-14T14:00:00'), description: "Traffic fine", type: CivilHistoryItemTypes.fine },
    ],
    cars: [
      { brand: "T20", color: "green", plate: "BS4T6A", history: [{ happened: new Date('2020-02-25T16:10:00'), description: "Confiscated", type: CarHistoryItemTypes.confiscated }] }
    ],
    weapons: [
      { serial: "M4-982", brand: "Rifle", history: [{ happened: new Date('2020-05-30T12:00:00'), description: "Used in self-defense", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "Chris Milleer",
    idCard: "526-785-9534",
    gunLicense: true,
    drivingLicense: false,
    workPlace: "LS Fire Department, Firefighter",
    history: [
      { happened: new Date('2018-07-15T18:20:00'), freed: new Date(), description: "Caught stealing", type: CivilHistoryItemTypes.prisonTerm },
    ],
    cars: [],
    weapons: [
      { serial: "M9-2387", brand: "Pistol", history: [{ happened: new Date('2019-10-30T12:00:00'), description: "Self-defense use", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "George Milleer",
    idCard: "875-336-9124",
    gunLicense: false,
    drivingLicense: true,
    workPlace: "LTD Gasoline, Worker",
    history: [
      { happened: new Date('2019-02-25T12:50:00'), description: "Fine for public disturbance", type: CivilHistoryItemTypes.fine },
    ],
    cars: [],
    weapons: [],
  },
  {
    name: "Tommy Granted",
    idCard: "912-654-3241",
    gunLicense: true,
    drivingLicense: true,
    workPlace: "LS Police, Detective",
    history: [
      { happened: new Date('2021-05-15T13:00:00'), freed: new Date(), description: "Murder conviction", type: CivilHistoryItemTypes.prisonTerm },
    ],
    cars: [
      { brand: "Coquette", color: "red", plate: "DSJ1K2", history: [{ happened: new Date('2021-06-10T14:00:00'), description: "Stopped for inspection", type: CarHistoryItemTypes.stoped }] }
    ],
    weapons: [
      { serial: "M16-3247", brand: "Rifle", history: [{ happened: new Date('2021-06-15T16:30:00'), description: "Used in operation", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "William Thomads",
    idCard: "634-982-1230",
    gunLicense: false,
    drivingLicense: true,
    workPlace: "LS Dockyard, Worker",
    history: [
      { happened: new Date('2016-06-30T11:40:00'), description: "Confiscated for illegal activity", type: CivilHistoryItemTypes.deprGunLicense },
    ],
    cars: [],
    weapons: [],
  },
  {
    name: "Olivia Davies",
    idCard: "983-426-7490",
    gunLicense: true,
    drivingLicense: true,
    workPlace: "GTA Museum, Curator",
    history: [
      { happened: new Date('2022-01-30T14:00:00'), description: "Fine for parking violation", type: CivilHistoryItemTypes.fine },
    ],
    cars: [
      { brand: "Feltzer", color: "red", plate: "VRX23Z", history: [{ happened: new Date('2022-02-10T12:40:00'), description: "Parking fine", type: CarHistoryItemTypes.fined }] }
    ],
    weapons: [
      { serial: "AK47-5589", brand: "Assault Rifle", history: [{ happened: new Date('2022-03-14T15:00:00'), description: "Used in robbery", type: WeaponHistoryItemTypes.used }] },
    ],
  },
  {
    name: "Eva Clarka",
    idCard: "211-549-9201",
    gunLicense: false,
    drivingLicense: true,
    workPlace: "Burger Shot, Waitress",
    history: [
      { happened: new Date('2016-09-30T17:00:00'), description: "Drunk driving", type: CivilHistoryItemTypes.fine },
    ],
    cars: [],
    weapons: [],
  },
  {
    name: "Sophia Harrises",
    idCard: "765-423-9862",
    gunLicense: true,
    drivingLicense: true,
    workPlace: "Los Santos Airport, Security",
    history: [
      { happened: new Date('2018-01-11T16:00:00'), description: "Traffic violation", type: CivilHistoryItemTypes.fine },
      { happened: new Date('2022-12-03T13:00:00'), description: "Driving without license", type: CivilHistoryItemTypes.deprDrivingLicense },
    ],
    cars: [
      { brand: "Sentinel", plate: "LS8F3H", color: "red", history: [{ happened: new Date('2022-12-03T14:00:00'), description: "Stopped for inspection", type: CarHistoryItemTypes.stoped }] }
    ],
    weapons: [
      { serial: "S1-2314", brand: "Combat Pistol", history: [{ happened: new Date('2023-05-10T15:00:00'), description: "Used in operation", type: WeaponHistoryItemTypes.used }] },
    ],
  }
];