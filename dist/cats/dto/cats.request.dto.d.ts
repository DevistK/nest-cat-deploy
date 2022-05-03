import { Cat } from '../cats.schema';
declare const CatsRequestDto_base: import("@nestjs/common").Type<Pick<Cat, "name" | "email" | "password">>;
export declare class CatsRequestDto extends CatsRequestDto_base {
}
export {};
