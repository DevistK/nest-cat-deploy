import { Cat } from './cats.schema';
import { Model, Types } from 'mongoose';
import { CatsRequestDto } from './dto/cats.request.dto';
export declare class CatsRepository {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    findAll(): Promise<Cat[]>;
    findByIdAndUpdateImg(catId: string, fileName: string): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    findCatByIdWithoutPassword(catId: string | Types.ObjectId): Promise<Cat | null>;
    findCatByEmail(email: string): Promise<Cat | null>;
    existByEmail(email: string): Promise<boolean>;
    create(cat: CatsRequestDto): Promise<Cat>;
}
