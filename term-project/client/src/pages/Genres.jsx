import React, { useState } from 'react'
import { Space, Table, Dropdown, Image } from 'antd';
import { BsPlus, BsEye } from "react-icons/bs";
import { FiEdit } from 'react-icons/fi';
import { RxDotsVertical } from 'react-icons/rx';
import { Menu } from 'antd';
import key from '../key';
import axios from 'axios';
import { Modal, Form, Input, Button, notification } from 'antd';
import { MdDelete } from 'react-icons/md';
import { useEffect } from 'react';

const Genres = () => {
    const subActionLinks = [
        {
            key: '1',
            label: 'View Details',
            icon: <BsEye size={25} />,
            onClick: (data) => alert(`Notification Send ${data.name}`),
        },
        {
            key: '2',
            label: 'Edit',
            icon: <FiEdit size={25} />,
            onClick: () => alert('SMS SENT'),
        },
        {
            key: '3',
            label: 'Remove Item',
            icon: <MdDelete size={25} />,
            onClick: (data) => handleDelete(data?._id),
        }
    ];
    //eslint-disable-next-line
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${key}/api/admin/all-generes`);
                setData(res.data.generes);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                notification.error({
                    message: 'Error',
                    description: 'Something went wrong',
                });
            }
        }
        getData();
        //eslint-disable-next-line
    }, []);


    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${key}/api/admin/delete-genere/${id}`);
            if (res.data.status) {
                const newData = data.filter((item) => item._id !== id);
                setData(newData);
                notification.success({
                    message: 'Success',
                    description: res?.data?.message,
                });
            }
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Error',
                description: 'Something went wrong',
            });
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: "_id",
        },

        {
            title: 'NAME',
            dataIndex: 'name',
            render: (_, record) => (
                <Space>
                    <div className='capitalize'>{record.name}</div>
                </Space>
            ),
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'ACTIONS',
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Dropdown
                        overlay={
                            <Menu>
                                {subActionLinks.map((item) => (
                                    <Menu.Item
                                        key={item.key}
                                        onClick={() => item.onClick(record)}
                                        icon={item.icon}
                                    >
                                        {item.label}
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }
                        trigger={['click']}
                    >
                        <RxDotsVertical className=' cursor-pointer' size={25} />
                    </Dropdown>
                </Space>
            ),
        },
    ];


    const [form] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);

    const handleOk = async () => {
        form
            .validateFields()
            .then(async (values) => {
                await axios.post(`${key}/api/admin/add-genere`, values)
                    .then(res => {
                        if (res.data.status) {
                            notification.success({
                                message: 'Success',
                                description: res?.data?.message,
                            });
                            setModalVisible(false);
                            const newData = [...data];
                            newData.unshift(res?.data?.genere);
                            setData(newData);
                        } else {
                            notification.error({
                                message: 'Error',
                                description: res?.data?.message,
                            });
                        }
                    })
                form.resetFields();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const onCancel = () => {
        setModalVisible(false);
    }
    return (
        <div className="sm:m-9 m-2">
            <Modal
                title="Add New Genere"
                centered
                visible={modalVisible}
                footer={false}
                onCancel={onCancel}
                destroyOnClose
            >
                <Form form={form} layout="vertical" onFinish={handleOk}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter the genere name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full" danger>
                            Add Genere
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className='flex justify-between bg-orange-100 p-3 items-center'>
                <div className='font-bold text-[23px]'>All Genres</div>
                <button className="bg-primary py-1 px-3 pt-2 rounded-lg text-white flex" onClick={() => setModalVisible(true)}>
                    Add Genre <BsPlus size={25} />
                </button>
            </div>
            <div className="container mx-auto my-8">
                {loading ? (
                    <div className='flex justify-center items-center'>
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <Table
                        className='table-responsive'
                        showHeader={true}
                        size='middle'
                        columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 7 }}
                    />
                )}
            </div>
        </div>
    )
}

export default Genres
