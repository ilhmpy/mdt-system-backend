import { ExecutionContext, Injectable } from "@nestjs/common";
import { GuardService } from "./guard.service";

@Injectable()
export class RolesService {
    constructor(private GuardService: GuardService) {}

    getRolesCanActivateName(context: ExecutionContext): { pageName: string, reqName: string } {
        const originalUrl = this.GuardService.getRequest(context).originalUrl.split("/").filter(Boolean);

        return { pageName: originalUrl[0], reqName: originalUrl[1] }
    }
}