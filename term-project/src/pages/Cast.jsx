import React, { useState } from 'react'
import { Space, Table, Avatar, Select, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { BsPlus, BsEye } from "react-icons/bs";
import { FiEdit } from 'react-icons/fi';
import { RxDotsVertical } from 'react-icons/rx';
import { Menu } from 'antd';
import { MdDelete } from 'react-icons/md';


const { Option } = Select;
const Cast = () => {
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
            onClick: () => alert('Mail Send'),
        }
    ];
    //eslint-disable-next-line
    const [data, setData] = useState([
        {
            key: '1',
            id: "ID-000001",
            name: 'John Brown',
            gender: 'female',
            country: 'New York',
            classification: 'freshman',
            lastActivity: "12-08-2023",
            major: "economics",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '2',
            id: "ID-000002",
            name: 'Jim Green',
            gender: 'female',
            country: 'London',
            classification: 'transfer',
            major: "economics",
            lastActivity: "12-08-2023",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '3',
            id: "ID-000003",
            name: 'Joe Black',
            gender: 'female',
            country: 'virginia',
            classification: 'graduate',
            major: "economics",
            lastActivity: "12-08-2023",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '4',
            id: "ID-000004",
            name: 'Joe Black',
            gender: 'male',
            country: 'new york',
            major: "economics",
            classification: 'freshman',
            lastActivity: "12-08-2023",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '5',
            id: "ID-000005",
            name: 'Joe Black',
            gender: "male",
            country: 'new york',
            classification: 'graduate',
            lastActivity: "12-08-2023",
            major: "economics",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1'
        }
        ,
        {
            key: '6',
            id: "ID-000006",
            name: 'Joe Black',
            gender: "male",
            country: 'pennsylvania',
            classification: 'graduate',
            lastActivity: "12-08-2023",
            major: "marketing & communication",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1'
        }
        ,
        {
            key: '7',
            id: "ID-000007",
            name: 'Joe Black',
            gender: "transgender",
            country: 'pennsylvania',
            classification: 'graduate',
            lastActivity: "12-08-2023",
            major: "marketing & communication",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1'
        },
        {
            key: '8',
            id: "ID-000008",
            name: 'Joe Black',
            gender: "transgender",
            country: 'pennsylvania',
            classification: 'freshman',
            lastActivity: "12-08-2023",
            major: "marketing & communication",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1'
        },
        {
            key: '9',
            id: "ID-000009",
            name: 'Joe Black',
            gender: "male",
            country: 'pennsylvania',
            classification: 'graduate',
            lastActivity: "12-08-2023",
            major: "marketing & communication",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1'
        },
        {
            key: '10',
            id: "ID-0000010",
            name: 'Joe Black',
            gender: "male",
            country: 'pennsylvania',
            classification: 'freshman',
            lastActivity: "12-08-2023",
            major: "marketing & communication",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '11',
            id: "ID-000011",
            name: 'Joe Black',
            gender: "male",
            country: 'pennsylvania',
            classification: 'graduate',
            lastActivity: "12-08-2023",
            major: "biology",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '12',
            id: "ID-000012",
            name: 'Joe Black',
            gender: "female",
            country: 'pennsylvania',
            classification: 'transfer',
            lastActivity: "12-08-2023",
            major: "biology",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '13',
            id: "ID-000012",
            name: 'Joe Black',
            gender: "female",
            country: 'pennsylvania',
            classification: 'transfer',
            lastActivity: "12-08-2023",
            major: "biology",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '14',
            id: "ID-000012",
            name: 'Joe Black',
            gender: "female",
            country: 'pennsylvania',
            classification: 'transfer',
            lastActivity: "12-08-2023",
            major: "biology",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        },
        {
            key: '15',
            id: "ID-000012",
            name: 'Joe Black',
            gender: "female",
            country: 'virginia',
            classification: 'transfer',
            lastActivity: "12-08-202023",
            major: "economics",
            image: 'https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1',
            email: 'user@gmail.com'
        }
    ]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: "id",
        },
        {
            title: 'PROFILE',
            dataIndex: 'name',
            render: (_, record) => (
                <Space>
                    <Avatar src={record.image} />
                    <span className='capitalize'>{record.name}</span>
                </Space>
            ),
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
        },
        {
            title: 'COUNTRY',
            dataIndex: 'country',
            render: (country) => (
                <div className='capitalize'>
                    {country}
                </div>
            ),
        },
        {
            title: 'GENDER',
            key: 'gender',
            dataIndex: 'gender',
            render: (gender) => (
                <Space wrap>
                    {gender && (
                        <div
                            className={`${gender.toLowerCase() === 'male'
                                ? 'bg-orange-500'
                                : gender.toLowerCase() === 'female'
                                    ? 'bg-purple-500'
                                    : 'bg-gray-400'
                                } w-2 h-2 rounded-full mr-2`}
                        ></div>
                    )}
                    <div className='capitalize'>{gender}</div>
                </Space>
            )
        },
        {
            title: 'ACTIONS',
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Dropdown
                        overlay={
                            <Menu>
                                {subActionLinks.map((action) => (
                                    <Menu.Item
                                        key={action.key}
                                        icon={action.icon}
                                        onClick={() => action.onClick(record)}
                                    >
                                        {action.label}
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }
                        trigger={['click']}
                    >
                        <RxDotsVertical className='cursor-pointer' size={25} />
                    </Dropdown>
                </Space>
            ),
        },
    ];


    return (
        <div className="sm:m-9 m-2">
            <div className='flex justify-between bg-orange-100 p-3 items-center'>
                <div className='font-bold text-[23px]'>All Actors & Acresses</div>
                <button className="bg-primary py-1 px-3 pt-2 rounded-lg text-white flex">
                    Add Actor/Actoress <BsPlus size={25} />
                </button>
            </div>
            <div className="container mx-auto my-8">
                <Table
                    className='table-responsive'
                    showHeader={true}
                    size='middle'
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </div>
        </div>
    )
}

export default Cast
