import { Pages } from "@prisma/client"

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
    ]
  },
]