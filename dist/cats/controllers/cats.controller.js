"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const cats_service_1 = require("../services/cats.service");
const http_exception_filter_1 = require("../../common/exceptions/http-exception.filter");
const success_interceptor_1 = require("../../common/interceptors/success.interceptor");
const cats_request_dto_1 = require("../dto/cats.request.dto");
const swagger_1 = require("@nestjs/swagger");
const cats_dto_1 = require("../dto/cats.dto");
const auth_service_1 = require("../../auth/auth.service");
const login_request_dto_1 = require("../../auth/dto/login.request.dto");
const jwt_guard_1 = require("../../auth/jwt/jwt.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const cats_schema_1 = require("../cats.schema");
const platform_express_1 = require("@nestjs/platform-express");
const multer_option_1 = require("../../common/utils/multer.option");
const aws_service_1 = require("../../aws/aws.service");
let CatsController = class CatsController {
    constructor(catsService, authService, awsService) {
        this.catsService = catsService;
        this.authService = authService;
        this.awsService = awsService;
    }
    getCurrentCat(cat) {
        return cat.readOnlyData;
    }
    getAllCat() {
        return this.catsService.getAllCat();
    }
    async signUp(body) {
        return await this.catsService.signUp(body);
    }
    logIn(data) {
        return this.authService.jwtLogin(data);
    }
    async uploadCatImg(files, cat) {
        console.log(files);
        return await this.awsService.uploadFileToS3('cats', files, cat);
    }
    getImageUrl(key) {
        return this.awsService.getAwsS3FileUrl(key);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '현재 고양이 데려오기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_schema_1.Cat]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getCurrentCat", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '전체 고양이 데려오기' }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getAllCat", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '회원가입 성공',
        type: cats_dto_1.ReadOnlyCatDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'server error',
    }),
    (0, swagger_1.ApiOperation)({ summary: '회원가입' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_request_dto_1.CatsRequestDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "signUp", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '로그인' }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "logIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '이미지 업로드' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', (0, multer_option_1.multerOptions)('cats'))),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('upload'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cats_schema_1.Cat]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "uploadCatImg", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('key'),
    __param(0, (0, common_1.Body)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getImageUrl", null);
CatsController = __decorate([
    (0, swagger_1.ApiTags)('cats'),
    (0, common_1.Controller)('cats'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter),
    __metadata("design:paramtypes", [cats_service_1.CatsService,
        auth_service_1.AuthService,
        aws_service_1.AwsService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map