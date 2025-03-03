import { OfficerHistoryItemTypes, Status } from "@prisma/client";

export const officers = [
  {
    name: 'Richard Smith',
    lastUpdate: new Date('2025-02-21T09:55:36.485651'),
    badgeNumber: 'LS18217',
    location: 'Bay City Ave',
    status: Status.true,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingNumber: 32,
    shiftId: 3,
    roleId: 1,
    rankId: 4,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$7kZ1VcNGYrm2pLpejIarUg$v9FPZLrS9Y6Vz0vx6hvr6nk5e8RpUdC+NzSF79RyD/Y',
  },
  {
    name: 'Timothy Sanchez',
    lastUpdate: new Date('2025-02-21T09:55:36.485637'),
    badgeNumber: 'LS21751',
    location: 'Fantastic Place',
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    status: Status.true,
    shiftId: 1,
    roleId: 1,
    rankId: 4,
    markingId: 3,
    token: '$argon2id$v=19$m=65536,t=3,p=4$DoyZXhPUgs6c8oy/h5PyoA$az3RXAmJl01/v6Ng3qLe8xdBar39/cBmWMlKMQ79fw4',
  },
  {
    name: 'Robert Miller',
    lastUpdate: new Date('2025-02-21T09:55:36.485647'),
    badgeNumber: 'LS60791',
    location: 'Grove Street',
    status: Status.true,
    markingNumber: 32,
    shiftId: 6,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$RgjFPRqtmxFHN+GcOneQKQ$1x51aNeEaNmZZrkJDmNIK8oZzJ7Zg+Z2a0p36x2XVvA',
  },
  {
    name: 'David Harris',
    lastUpdate: new Date('2025-02-21T09:55:36.485667'),
    badgeNumber: 'LS13276',
    location: 'Capital Blvd',
    markingNumber: 52,
    shiftId: 4,
    roleId: 1,
    rankId: 4,
    markingId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    token: '$argon2id$v=19$m=65536,t=3,p=4$PFSx2+jiI2nIsNB+nShCJQ$NVWp1/dt7ZS4D9rALCCXxNOszjBlyA+ugZG8U2yYSM4',
  },
  {
    name: 'William Davis',
    lastUpdate: new Date('2025-02-21T09:55:36.485662'),
    badgeNumber: 'LS55355',
    location: 'Alta Street',
    status: Status.true,
    shiftId: 2,
    roleId: 1,
    rankId: 4,
    markingId: 7,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    token: '$argon2id$v=19$m=65536,t=3,p=4$qDQedgc3VRmdZojO5zQWFQ$SEeoQET5bOq9fKm5R50m2TmrJEJxqK+sZPHvcgpewNM',
  },
  {
    name: 'George Taylor',
    lastUpdate: new Date('2025-02-21T09:55:36.485655'),
    badgeNumber: 'LS92989',
    location: 'Clinton Ave',
    status: Status.true,
    markingNumber: 55,
    shiftId: 5,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$Vly3WHgoZWWqy/A46sEEvA$NlvNf6kWVrCBPBEZwpGEjxM3HlAVrjMZzLelkmwBSR8',
  },
  {
    name: 'Joseph Davis',
    lastUpdate: new Date('2025-02-21T09:55:36.485632'),
    badgeNumber: 'LS52121',
    location: 'Bay City Ave',
    status: Status.true,
    markingNumber: 32,
    shiftId: 4,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$7V0duxjIjCUWxb7I01yY5A$E3FNulk1nUga5297oY7Q1wlU3DjLPazLdugnT2AK2HI',
  },
  {
    name: 'Paul Robinson',
    lastUpdate: new Date('2025-02-21T09:55:36.485674'),
    badgeNumber: 'LS89505',
    location: 'Paleto Blvd',
    status: Status.true,
    shiftId: 1,
    isHead: true, 
    roleId: 2,
    rankId: 5,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingId: 3,
    token: '$argon2id$v=19$m=65536,t=3,p=4$8kqvpTDYZhmiU44hlFZzmQ$bHuZDkER2FNnXkVKMNOz6RCnxKmjD4i5zn7nI7K7oF8',
  },
  {
    name: 'Paul Sanchez',
    lastUpdate: new Date('2025-02-21T09:55:36.485630'),
    badgeNumber: 'LS14859',
    location: 'Elysian Fields Freeway',
    status: Status.true,
    markingNumber: 66,
    shiftId: 3,
    roleId: 1,
    rankId: 4,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$lXiQtfjv5bxLj6oauzzd7g$+fabiyKr4BTw2f74JNOoUHLxbudITF4hVhsAqE08+L8',
  },
  {
    name: 'Ronald Rodriguez',
    lastUpdate: new Date('2025-02-21T09:55:36.485649'),
    badgeNumber: 'LS19879',
    location: 'Davis Ave',
    status: Status.true,
    shiftId: 1,
    roleId: 1,
    rankId: 4,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$ktAYJ6rNEMxFtP5w6zqj5g$Z9bUXliDIrxxcZ8eucmhVxcXVtPRU7Nt8OWe7w/9PyA',
  },
  {
    name: 'Matthew Jackson',
    lastUpdate: new Date('2025-02-21T09:55:36.485686'),
    badgeNumber: 'LS76675',
    location: 'Senora Road',
    status: Status.true,
    markingNumber: 23,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    shiftId: 6,
    roleId: 3,
    rankId: 8,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$vj6Fnt+h+Z/RbtIx1UbDaQ$FmZ5bF0GVDdVCYVD5LjarlkHfAzmS2Wes9oFt78A9CI',
  },
  {
    name: 'Jason Taylor',
    lastUpdate: new Date('2025-02-21T09:55:36.485671'),
    badgeNumber: 'LS37799',
    location: 'Elysian Fields Freeway',
    shiftId: 6,
    markingNumber: 66,
    roleId: 2,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 5,
    isHead: true,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$XJInOBN4NO4mOhCSP9FWJA$bZjLmgQEtCIkdz06BSQlYVqXx/+F4VbY3UyBFYLld/I',
  },
  {
    name: 'Matthew Garcia',
    lastUpdate: new Date('2025-02-21T09:55:36.485640'),
    badgeNumber: 'LS83147',
    location: 'Clinton Ave',
    markingNumber: 74,
    shiftId: 2,
    roleId: 1,
    rankId: 4,
    markingId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    token: '$argon2id$v=19$m=65536,t=3,p=4$XuPnfQMwWczCF745hdEC3A$CKgwopzgTh2h6LRQEvBdqcaw1Pbh1B1WOkFdIEnmkqo',
  },
  {
    name: 'Richard Robinson',
    lastUpdate: new Date('2025-02-21T09:55:36.485684'),
    badgeNumber: 'LS84464',
    location: 'Strawberry Avenue',
    status: Status.true,
    markingNumber: 12,
    shiftId: 5,
    roleId: 3,
    rankId: 7,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$DJWwye9eiPvP5zA2HKQx+g$wOvSW00wAAuaD3C/ADMEuTKYLN2X0zSlI/ar5CbLMps',
  },
  {
    name: 'Jason Johnson',
    lastUpdate: new Date('2025-02-21T09:55:36.485660'),
    badgeNumber: 'LS78431',
    location: 'Alta Street',
    markingNumber: 25,
    shiftId: 1,
    roleId: 1,
    rankId: 4,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$NFLbRvFX/qOt3qaVdqK6vQ$o42mSbMlf8Xe0wAHtWVywmQfXpHTz2xw2tumS7lZuQA',
  },
  {
    name: 'Timothy Williams',
    lastUpdate: new Date('2025-02-21T09:55:36.485681'),
    badgeNumber: 'LS80929',
    location: 'Del Perro Freeway',
    status: Status.true,
    markingNumber: 13,
    shiftId: 4,
    roleId: 3,
    rankId: 6,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingId: 5,
    token: '$argon2id$v=19$m=65536,t=3,p=4$q+Y1LUpN4bvaQFEFdKph+g$YgAFy3iv3ISq1r1rg2xiQBJgGQryL4UnNsnHjC7NhoI',
  },
  {
    name: 'Anthony Martinez',
    lastUpdate: new Date('2025-02-21T09:55:36.485678'),
    badgeNumber: 'LS80705',
    location: 'Paleto Blvd',
    markingNumber: 13,
    shiftId: 3,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    roleId: 4,
    rankId: 2,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$iMNpORGUSqc681CfTPeG2A$Gq8uzJPMzSlWMkjowC9/ank76lhS0HvS//voO0IdP7E',
  },
  {
    name: 'Paul McCarthy',
    lastUpdate: new Date('2025-02-21T09:55:36.485621'),
    badgeNumber: 'LS14824',
    location: 'Clinton Ave',
    status: Status.true,
    shiftId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    roleId: 1,
    rankId: 4,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$D9jQ6hQjq8E02bKtWuqQ1Q$NcY4Mh9kJR28k9S4dgknYZ80c7cD5f3OgT/0aUlKftk',
  },
  {
    name: 'Michael Moore',
    lastUpdate: new Date('2025-02-21T09:55:36.485628'),
    badgeNumber: 'LS94074',
    location: 'Alta Street',
    status: Status.true,
    shiftId: 2,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    roleId: 1,
    rankId: 4,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$B7tkXHRtT9gleBTPHeB0mA$rfiobKP/fHB33EFOk3lqIczkXwkQ8HhVKe55mHnCgDU',
  },
  {
    name: 'Ryan Lopez',
    lastUpdate: new Date('2025-02-21T09:55:36.485646'),
    badgeNumber: 'LS25298',
    location: 'Joshua Road',
    status: Status.true,
    markingNumber: 19,
    shiftId: 5,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    roleId: 1,
    rankId: 4,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$B9cLfP16H9tEsfegG4HtaQ$VqD/Ob501fC9lUUiNp2AbSQPpUayAYMq5gBD2wpi1ks',
  },
  {
    name: 'Steven Taylor',
    lastUpdate: new Date('2025-02-21T09:55:36.485650'),
    badgeNumber: 'LS78123',
    location: 'Clinton Ave',
    markingNumber: 87,
    shiftId: 2,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    roleId: 1,
    rankId: 4,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$l6Yb8fvQPuATSjCqt32pqw$N7bN2kgpQ0pSvMMkyYF2Tbu6WP+ejLSUesyBqKkYDnU',
  },
  {
    name: 'Joseph Thompson',
    lastUpdate: new Date('2025-02-21T09:55:36.485643'),
    badgeNumber: 'LS79138',
    location: 'Capital Blvd',
    status: Status.true,
    shiftId: 4,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$QEoncOF/+3t8kPsSSKmU5Q$7AWOYjQJ5ETmwkD01kAnlYrb+c02ytSAZmCMS67j4Qw',
  },
  {
    name: 'Steven Lopez',
    lastUpdate: new Date('2025-02-21T09:55:36.485642'),
    badgeNumber: 'LS69637',
    location: 'Clinton Ave',
    status: Status.true,
    markingNumber: 45,
    shiftId: 3,
    roleId: 1,
    rankId: 4,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$xRSYMSmOgHZYHCvcy9WhfA$T/p6kyeVpMa59kl34v4KPwstgCKg7bLOHv/q+7iv1Xs',
  },
  {
    name: 'Jason Smith',
    lastUpdate: new Date('2025-02-21T09:55:36.485635'),
    badgeNumber: 'LS82930',
    location: 'Forum Drive',
    status: Status.true,
    markingNumber: 48,
    shiftId: 6,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$PR4zEM7+n7CiOiJOw5d17Q$iuchIeny7DEwDGciAVbe4S5dFSpI/p6PltGKJ+Xifdk',
  },
  {
    name: 'Jason Thompson',
    lastUpdate: new Date('2025-02-21T09:55:36.485665'),
    badgeNumber: 'LS26217',
    location: 'Paleto Blvd',
    status: Status.true,
    markingNumber: 14,
    shiftId: 3,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$a2Qj5OnyVEpKlZ7KUIblbw$uFp307yYeAv9FoVLSFCnHuAVIiTrgN36I2FgMJMYftQ',
  },
  {
    name: 'Jason Hernandez',
    lastUpdate: new Date('2025-02-21T09:55:36.485653'),
    badgeNumber: 'LS86657',
    location: 'Boulevard Del Perro',
    status: Status.true,
    markingNumber: 18,
    shiftId: 4,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 2,
    token: '$argon2id$v=19$m=65536,t=3,p=4$lRTDMef9vHB5rAnR98yVeA$KNFCYblkgJW19A0dBtYXNk9tq+ka4Cc2Or3+cOvCR1k',
  },
  {
    name: 'Mark Jackson',
    lastUpdate: new Date('2025-02-21T09:55:36.485676'),
    badgeNumber: 'LS89068',
    location: 'Vinewood Blvd',
    status: Status.true,
    markingNumber: 18,
    shiftId: 2,
    roleId: 4,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 1,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$3iiPXtSDtkXOf79K6vTn6A$h7ZsEu99Ig8zgPLauz+Ngh2HFamTa24YLE3Tn6qChpI',
  },
  {
    name: 'Michael Davis',
    lastUpdate: new Date('2025-02-21T09:55:36.485657'),
    badgeNumber: 'LS81272',
    location: 'Elgin Avenue',
    status: Status.true,
    shiftId: 6,
    roleId: 1,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 4,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$/etujWg59lz+/XM72MRf7w$Vt0zNdFX0BzgQ7YDZnLqcMEgyATdLw6W0Nuiu3PwWWM',
  },
  {
    name: 'Thomas Robinson',
    lastUpdate: new Date('2025-02-21T09:55:36.485669'),
    badgeNumber: 'LS58814',
    location: 'Capital Blvd',
    status: Status.true,
    markingNumber: 43,
    shiftId: 5,
    roleId: 2,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    rankId: 5,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$9aU+6Ma9Kqro2wBsjv3gUg$5JYw0FzwNkiMnKjD/TR5+KbXV3ISOE5159/uducsiAc',
  },
  {
    name: 'Ryan Martin',
    lastUpdate: new Date('2025-02-21T09:55:36.485634'),
    badgeNumber: 'LS59083',
    location: 'Capital Blvd',
    status: Status.true,
    markingNumber: 48,
    history: [
      { description: "Promoted to Police Officer II", type: OfficerHistoryItemTypes.promoted }
    ],
    shiftId: 5,
    roleId: 1,
    rankId: 4,
    markingId: 1,
    token: '$argon2id$v=19$m=65536,t=3,p=4$xgG0Q59oAdhR/hpv6Uif7A$GXX5FelV+h536T51N1B9MYA52cpo1T4i19z40Gb5BAQ',
  }, 
];