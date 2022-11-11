import {useEffect, useState} from "react";
import {Button, Modal, DatePicker, Form, Input, Select, Switch, Table, TableColumnProps} from "antd";
import {OrdersApi} from "../../api";
import {OrderDto} from "../../api/OrdersApi";
import {CustomerDto} from "../../common/dto/CustomerDto";
import {MasterDto} from "../../common/dto/MasterDto";
import {ServiceDto} from "../../common/dto/ServiceDto";
import {OrderStatus} from "../../common/enums/OrderStatus";
import {useForm} from "antd/es/form/Form";
import type {DatePickerProps} from 'antd';

const {confirm} = Modal

interface OrderFormProps {
    order?: OrderDto
    onCreate: (data: any) => void
}

function OrderForm({order, onCreate}: OrderFormProps) {

    const [form] = useForm()
    const [createMode, setCreateMode] = useState(false)

    const onChangeMode = () => {
        setCreateMode(!createMode)
    }
    const handleSubmit = (data: any) => {
        setCreateMode(!createMode)
        console.log(data)

        onCreate(data)
    }

    return (
        <div className={'form'}>
            {createMode &&
                <Form form={form} onFinish={handleSubmit}>
                    <Form.Item name="name" label="Имя">
                        <Input/>
                    </Form.Item>

                    <Form.Item name="phone" label="Номер телефона">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="masterId" label="Мастер">
                        <Select>
                            <Select.Option value={"1"}>Краснова Ирина</Select.Option>
                            <Select.Option value={"2"}>Калилова Жанна</Select.Option>
                            <Select.Option value={"3"}>Киселева Алина</Select.Option>
                            <Select.Option value={"4"}>Иванова Елена</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="serviceId" label="Услуга">
                        <Select>
                            <Select.Option value="1">Женская стрижка</Select.Option>
                            <Select.Option value="2">Мужская стрижка</Select.Option>
                            <Select.Option value="3">Женская стрижка</Select.Option>
                            <Select.Option value="4">Детский стиль</Select.Option>
                            <Select.Option value="5">Креативный стиль</Select.Option>
                            <Select.Option value="6">Экспресс укладка</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="visitDate" label="Дата посещения">
                        <DatePicker/>
                    </Form.Item>
                    <Button type='primary' onClick={form.submit}>Сохранить запись</Button>
                </Form>
            }
            {!createMode && <Button type='primary' onClick={onChangeMode}>Создать запись</Button>}
        </div>
    )
}


export function Orders() {
    const [orders, setOrders] = useState<OrderDto[]>([])
    const [status, setStatus] = useState(OrderStatus.Opened)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const removeOrder = (orderId: number) => {
        confirm({
            title: 'Вы действительно хотите удалить запись?',
            onOk: () => {
                OrdersApi.remove(orderId)
                    .then(() => {
                        setOrders(orders.filter(o => o.id !== orderId))
                    })
            }
        })

    }

    const create = (data: any) => {
        OrdersApi.create(data)
            .then((createOrder) => setOrders(orders.concat(createOrder)))

    }


    const columns: TableColumnProps<OrderDto>[] = [
        {
            title: 'Дата посещения',
            dataIndex: 'visitDate',
            key: 'visitDate'
        },

        {
            title: 'Клиент',
            dataIndex: 'customer',
            key: 'customer',
            render: (customer: CustomerDto) => {
                return customer ? `${customer.firstName}` : ''
            }
        },
        {
            title: 'Мастер',
            dataIndex: 'master',
            key: 'master',
            render: (master: MasterDto) => {
                return master ? `${master.surName} ${master.firstName}` : ''
            }
        },
        {
            title: 'Услуга',
            dataIndex: 'service',
            key: 'service',
            render: (service: ServiceDto) => {
                return service ? `${service.name}` : ''
            }
        },

        {
            title: '',
            key: 'actions',
            render: (row) => (<>
                <Button onClick={() => removeOrder(row.id)} type="primary">Удалить</Button>
            </>)
        }
    ]

    useEffect(() => {
        OrdersApi.getAll(status,from,to).then(setOrders)
    }, [status,from,to])

    const onFrom: DatePickerProps['onChange'] = (date, dateString) => {
        setFrom(dateString)
    };
    const onTo: DatePickerProps['onChange'] = (date, dateString) => {
        setTo(dateString)
    };


    return (
        <>
            <header className={'header-filters'}>
                <Switch checked={status === OrderStatus.Opened}
                        onChange={(checked) => setStatus(checked ? OrderStatus.Opened : OrderStatus.Closed)}/>
                <label>Период посещения от:</label>
                <DatePicker onChange={onFrom}/>
                <label>до:</label>
                <DatePicker onChange={onTo}/>
            </header>
            <Table columns={columns} dataSource={orders}/>

            <OrderForm onCreate={create}/>
        </>
    )
}

export default Orders