export interface UserRegistrationDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    userName:string;
    address: string;
    phoneNumber: string;
}

export interface UserUpdateDTO {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName:string;
    address: string;
    phoneNumber: string;
}
