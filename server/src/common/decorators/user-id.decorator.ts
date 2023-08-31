import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): number | null => {
    const request = ctx.switchToHttp().getRequest();
    // console.log('request', request);
    return request.user?.userId ? Number(request.user.userId) : null;
  },
);
