import {HttpService} from "../services/HttpService";
import {API_PATH} from "../constatnts";
import {CustomerDto} from "../common/dto/CustomerDto";
import {MasterDto} from "../common/dto/MasterDto";
import {ServiceDto} from "../common/dto/ServiceDto";
import {OrderStatus} from "../common/enums/OrderStatus";


export interface OrderDto {
    id: number,
    createdDate: string,
    customer: CustomerDto,
    visitDate: string,
    status: string,
    master: MasterDto,
    service: ServiceDto,
    finishStatus: string

}

class OrdersApi extends HttpService {
    constructor() {
        super(`${API_PATH}/orders`);
    }

    getAll(status: OrderStatus, from?: string, to?: string): Promise<OrderDto[]> {


        return this.get(`?status=${status}&from=${from}&to=${to}`)

    }

    create(data: any) {
        return this.post('', data)
    }


    remove(orderId: number) {
        return this.delete(`${orderId}`)
    }
}

export default new OrdersApi()