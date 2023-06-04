export interface BookingCreateDTO {
    userId: string;
    roomId: string;
    checkIn: string;
    checkOut: string;
    requestStatusId: Int32Array;
}

export interface BookingReadDTO{
    userId: string;
    userName: string;
    roomNumber: string;
    checkIn: string;
    checkOut: string;
    isCancelled: boolean;
    isCheckedOut: boolean;
    requestStatus: string;
    requestStatusId: Int32Array;
}