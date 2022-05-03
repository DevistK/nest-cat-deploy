/// <reference types="multer" />
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { PromiseResult } from 'aws-sdk/lib/request';
import { AWSError } from 'aws-sdk';
import { CatsRepository } from '../cats/cat.repository';
import { Cat } from '../cats/cats.schema';
export declare class AwsService {
    private readonly configService;
    private readonly catsRepository;
    private readonly awsS3;
    readonly S3_BUCKET_NAME: string;
    constructor(configService: ConfigService, catsRepository: CatsRepository);
    uploadFileToS3(folder: string, file: Express.Multer.File, cat: Cat): Promise<{
        key: string;
        s3Object: PromiseResult<AWS.S3.PutObjectOutput, AWSError>;
        contentType: string;
    }>;
    deleteS3Object(key: string, callback?: (err: AWS.AWSError, data: AWS.S3.DeleteObjectOutput) => void): Promise<{
        success: true;
    }>;
    getAwsS3FileUrl(objectKey: string): string;
}
