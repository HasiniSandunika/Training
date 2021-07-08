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
exports.OwnerController = void 0;
const common_1 = require("@nestjs/common");
const owner_service_1 = require("../service/owner.service");
const OwnerCreate_dto_1 = require("../dto/OwnerCreate.dto");
const OwnerUpdate_dto_1 = require("../dto/OwnerUpdate.dto");
let OwnerController = class OwnerController {
    constructor(ownerService) {
        this.ownerService = ownerService;
    }
    async getAllOwners(param) {
        if (Object.keys(param).length) {
            return await this.ownerService.ownerSearch(param);
        }
        else {
            return await this.ownerService.getAllOwners();
        }
    }
    async createOwner(ownerCreateDTO) {
        return await this.ownerService.createOwner(ownerCreateDTO);
    }
    async getOwnerById(id) {
        let owner = await this.ownerService.getOwnerById(id);
        if (!owner) {
            throw new common_1.NotFoundException('Cannot find the owner');
        }
        return owner;
    }
    async updateOwnerByID(id, ownerUpdateDTO) {
        ownerUpdateDTO.id = id;
        let owner = await this.ownerService.updateOwnerById(ownerUpdateDTO);
        if (!owner) {
            throw new common_1.NotFoundException('Cannot update the owner');
        }
        return owner;
    }
    async deleteOwnerByID(id) {
        let result = await this.ownerService.deleteOwnerById(id);
        if (!result) {
            throw new common_1.NotFoundException("Cannot delete the owner");
        }
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "getAllOwners", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OwnerCreate_dto_1.OwnerCreateDTO]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "createOwner", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "getOwnerById", null);
__decorate([
    common_1.Put('/edit/:id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, OwnerUpdate_dto_1.OwnerUpdateDTO]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "updateOwnerByID", null);
__decorate([
    common_1.Delete('/:id'),
    common_1.HttpCode(204),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "deleteOwnerByID", null);
OwnerController = __decorate([
    common_1.Controller('owner'),
    __metadata("design:paramtypes", [owner_service_1.OwnerService])
], OwnerController);
exports.OwnerController = OwnerController;
//# sourceMappingURL=owner.controller.js.map