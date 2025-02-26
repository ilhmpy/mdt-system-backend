import { Pages, Role } from "@prisma/client"

export const roles = [
  { 
    name: "officer",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true },
      { canActivateName: Pages.officers, get: true, selfUpdate: true },
      { canActivateName: Pages.ncinc, get: true, selfUpdate: true },
      { canActivateName: Pages.calls, get: true, selfUpdate: true },
      { canActivateName: Pages.reports, get: true, selfUpdate: true },
      { canActivateName: Pages.forum, get: true },
      { canActivateName: Pages.control, get: false },
      { canActivateName: Pages.cases, get: false },
    ]
  },

  { 
    name: "head-of-shift",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true, selfUpdate: true },
      { canActivateName: Pages.officers, get: true, selfUpdate: true },
      { canActivateName: Pages.ncinc, get: true, selfUpdate: true },
      { canActivateName: Pages.calls, get: true, selfUpdate: true },
      { canActivateName: Pages.reports, get: true, update: true },
      { canActivateName: Pages.forum, get: true },
      { canActivateName: Pages.control, get: false },
      { canActivateName: Pages.cases, get: false },
    ]
  },

  { 
    name: "junior-senior-staff",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true, selfUpdate: true },
      { canActivateName: Pages.officers, get: true, selfUpdate: true, update: true },
      { canActivateName: Pages.ncinc, get: true, selfUpdate: true, update: true },
      { canActivateName: Pages.calls, get: true, selfUpdate: true, update: true },
      { canActivateName: Pages.reports, get: true, selfUpdate: true, update: true },
      { canActivateName: Pages.forum, get: true },
      { canActivateName: Pages.control, get: true },
      { canActivateName: Pages.cases, get: true }
    ]
  },

  { 
    name: "senior-staff",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true, create: true, delete: true, selfUpdate: true },
      { canActivateName: Pages.officers, get: true, update: true, create: true, delete: true, selfUpdate: true },
      { canActivateName: Pages.ncinc, get: true, update: true, create: true, delete: true, selfUpdate: true },
      { canActivateName: Pages.calls, get: true, update: true, create: true, delete: true, selfUpdate: true },
      { canActivateName: Pages.reports, get: true, update: true, create: true, delete: true, selfUpdate: true },
      { canActivateName: Pages.forum, get: true, create: true, delete: true, selfUpdate: true },
      { canActivateName: Pages.control, get: true, update: true, delete: true, selfUpdate: true },
      { canActivateName: Pages.cases, get: true, update: true, delete: true, selfUpdate: true }
    ]
  },

  { 
    name: "dispatcher",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.officers, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.ncinc, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.calls, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.reports, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.forum, get: true, selfUpdate: true },
      { canActivateName: Pages.control, get: false, selfUpdate: true },
      { canActivateName: Pages.cases, get: false }
    ]
  },

  {
    name: "detective",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.officers, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.ncinc, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.calls, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.reports, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.forum, get: true, selfUpdate: true },
      { canActivateName: Pages.control, get: false, selfUpdate: true },
      { canActivateName: Pages.cases, get: true, create: true, selfUpdate: true }
    ]
  },

  {
    name: "IAD-detective",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true, update: true, selfUpdate: true, getInfoAboutOfficers: true },
      { canActivateName: Pages.officers, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.ncinc, get: true, update: true, selfUpdate: true, getInfoAboutOfficers: true },
      { canActivateName: Pages.calls, get: true, update: true, selfUpdate: true, getInfoAboutOfficers: true },
      { canActivateName: Pages.reports, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.forum, get: true, selfUpdate: true },
      { canActivateName: Pages.control, get: false, selfUpdate: true },
      { canActivateName: Pages.cases, get: true, create: true, selfUpdate: true, getInfoAboutOfficers: true }
    ]
  },

  {
    name: "SWAT-operator",
    permissions: [
      { canActivateName: Pages.panic, get: true, selfUpdate: true },
      { canActivateName: Pages.profile, get: true, update: true, selfUpdate: true, getInfoAboutOfficers: true },
      { canActivateName: Pages.officers, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.ncinc, get: true, update: true, selfUpdate: true, getInfoAboutOfficers: true },
      { canActivateName: Pages.calls, get: true, update: true, selfUpdate: true, getInfoAboutOfficers: true },
      { canActivateName: Pages.reports, get: true, update: true, selfUpdate: true },
      { canActivateName: Pages.forum, get: true, selfUpdate: true },
      { canActivateName: Pages.control, get: false, selfUpdate: true },
      { canActivateName: Pages.cases, get: false }
    ]
  }
]