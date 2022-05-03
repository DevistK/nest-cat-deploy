import { ConfigService } from '@nestjs/config';
import { Payload } from './jwt.payload';
import { CatsRepository } from '../../cats/cat.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private readonly catsRepository;
    constructor(configService: ConfigService, catsRepository: CatsRepository);
    validate(payload: Payload): Promise<import("../../cats/cats.schema").Cat>;
}
export {};
