import { ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class GuardService {
    getRequest(context: ExecutionContext) {
        return context.switchToHttp().getRequest();
    }
}