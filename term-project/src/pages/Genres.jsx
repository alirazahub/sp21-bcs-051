import React, { useState } from 'react'
import { Space, Table, Select, Dropdown, Image } from 'antd';
import { BsPlus, BsEye } from "react-icons/bs";
import { FiEdit, FiDelete } from 'react-icons/fi';
import { RxDotsVertical } from 'react-icons/rx';
import { Menu } from 'antd';
import { TbRating12Plus, TbRating14Plus, TbRating16Plus, TbRating18Plus, TbRating21Plus } from 'react-icons/tb'


const { Option } = Select;
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
            icon: <FiDelete size={25} />,
            onClick: () => alert('Mail Send'),
        }
    ];
    //eslint-disable-next-line
    const [data, setData] = useState([
        {
            name: "John Wick",
            id: "ID-000001",
            poster: "https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1",
            genre: "Action",
            releaseDate: "12-08-2023",
            language: "English",
            classification: "PG-13",
            duration: "2h 12m",
            rating: "4.5",
            status: "active",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit. Nunc euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit.",
        },
        {
            name: "John Wick",
            id: "ID-000001",
            poster: "https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1",
            genre: "Action",
            releaseDate: "12-08-2023",
            language: "English",
            classification: "PG-13",
            duration: "2h 12m",
            rating: "4.5",
            status: "active",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit. Nunc euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit.",
        },
        {
            name: "John Wick",
            id: "ID-000001",
            poster: "https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1",
            genre: "Action",
            releaseDate: "12-08-2023",
            language: "English",
            classification: "PG-13",
            duration: "2h 12m",
            rating: "4.5",
            status: "active",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit. Nunc euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit.",
        },
        {
            name: "John Wick",
            id: "ID-000001",
            poster: "https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=ImgDet&rs=1",
            genre: "Action",
            releaseDate: "12-08-2023",
            language: "English",
            classification: "PG-13",
            duration: "2h 12m",
            rating: "4.5",
            status: "active",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit. Nunc euismod, nisi eget aliquam iaculis, nunc libero lacinia eros, eu tincidunt nisl augue vel velit.",
        },
    ]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: "id",
        },

        {
            title: 'NAME',
            dataIndex: 'name',
            render: (_, record) => (
                <Space>
                    <div className='capitalize'>{record.name}</div>
                </Space>
            ),
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


    return (
        <div className="sm:m-9 m-2">
            <div className='flex justify-between bg-orange-100 p-3 items-center'>
                <div className='font-bold text-[23px]'>All Genres</div>
                <button className="bg-primary py-1 px-3 pt-2 rounded-lg text-white flex">
                    Add Genre <BsPlus size={25} />
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

export default Genres
