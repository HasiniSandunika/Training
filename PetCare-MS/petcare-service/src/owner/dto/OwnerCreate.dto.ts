import { IsIn, IsNotEmpty, IsNumberString, IsPhoneNumber } from "class-validator"

export class OwnerCreateDTO{
    id: string
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    residence: string
    @IsNotEmpty()
    @IsPhoneNumber('SL', { message: 'Invalid phone no.' })
    contact: string
    @IsNotEmpty()
    @IsIn(['Male', 'Female'])
    gender: string
}