import { Document } from 'mongoose';
import { Comments } from '../comments/comments.schema';
export declare class Cat extends Document {
    email: string;
    name: string;
    password: string;
    imgUrl: string;
    readonly readOnlyData: {
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    };
    readonly commentList: Comments[];
}
export declare const _CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any>, undefined, {}>;
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any>, undefined, {}>;
