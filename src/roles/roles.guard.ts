import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RolesGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('The user is', user);

    return !!user;
  }
}