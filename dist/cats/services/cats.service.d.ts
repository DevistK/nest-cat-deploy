/// <reference types="multer" />
import { CatsRequestDto } from '../dto/cats.request.dto';
import { CatsRepository } from '../cat.repository';
import { Cat } from '../cats.schema';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }[]>;
    signUp(body: CatsRequestDto): Promise<any>;
    uploadImg(cat: Cat, files: Array<Express.Multer.File>): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
}
