/// <reference types="multer" />
import { CatsService } from '../services/cats.service';
import { CatsRequestDto } from '../dto/cats.request.dto';
import { AuthService } from '../../auth/auth.service';
import { LoginRequestDto } from '../../auth/dto/login.request.dto';
import { Cat } from '../cats.schema';
import { AwsService } from '../../aws/aws.service';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    private readonly awsService;
    constructor(catsService: CatsService, authService: AuthService, awsService: AwsService);
    getCurrentCat(cat: Cat): {
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    };
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }[]>;
    signUp(body: CatsRequestDto): Promise<any>;
    logIn(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    uploadCatImg(files: Express.Multer.File, cat: Cat): Promise<{
        key: string;
        s3Object: import("aws-sdk/lib/request").PromiseResult<import("aws-sdk/clients/s3").PutObjectOutput, import("aws-sdk").AWSError>;
        contentType: string;
    }>;
    getImageUrl(key: string): string;
}
