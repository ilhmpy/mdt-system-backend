import { Injectable } from '@nestjs/common';
import { CarHistoryItemTypes, Civil, CivilHistoryItemTypes, WeaponHistoryItemTypes } from '@prisma/client';

@Injectable()
export class NcincService {
    getHistoryItemType(object: "civil" | "car" | "weapon") {
        switch(object) {
            case("civil"): {
                return CivilHistoryItemTypes;
            }

            case("car"): {
                return CarHistoryItemTypes;
            }

            case('weapon'): {
                return WeaponHistoryItemTypes
            }
        }
    }
}
