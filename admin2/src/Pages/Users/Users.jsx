import React, { useEffect, useState } from 'react';
import { RiSofaFill } from 'react-icons/ri';
import { getApi } from '../../utils/api';

const Users = () => {
  const [users, setUsers] = useState([]); // State để lưu trữ danh sách người dùng
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getApi('/api/users'); // Gọi hàm getUsers từ api.js
        setUsers(data); // Cập nhật state với dữ liệu người dùng
        setLoading(false); // Đặt trạng thái tải dữ liệu là false
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu người dùng:', error);
        setLoading(false); // Dù có lỗi cũng set loading thành false
      }
    };

    fetchUsers(); // Gọi hàm để tải dữ liệu khi component được mount
  }, []); // Chạy một lần khi component được render lần đầu tiên

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4">
      <div className="col-span-4">
        <div className="pt-12 pb-6 opacity-100 bg-transparent text-[#344767] shadow-none">
          <div className="box-border -mt-12 w-full -ml-12">
            <div className="pl-12 pt-12">
              <div className="text-black text-opacity-87 flex flex-col relative min-w-0 break-words bg-white shadow-md transition-shadow duration-300 ease-in-out rounded-lg overflow-visible">
                <div className="heading ml-4 mr-4 -mt-6 pt-6 pb-6 px-4 opacity-100 text-[#344767] shadow-lg rounded-md">
                  <h6 className="m-0 text-base leading-7 font-roboto font-bold tracking-[0.0075em] opacity-100 text-white no-underline align-baseline">
                    Authors Table
                  </h6>
                </div>
                <div className="pt-6 opacity-100 bg-transparent text-[#344767] shadow-none">
                  <div className="w-full overflow-x-auto bg-white rounded-lg shadow-none">
                    <table className="table w-full border-collapse border-spacing-0">
                      <thead className="opacity-100 bg-transparent text-[#344767] shadow-none">
                        <tr className="text-inherit table-row align-middle outline-none">
                          <th className="w-[45%] px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none border-b border-[#f0f2f5]">
                            <div className="relative text-left opacity-70 bg-transparent text-[#7b809a] shadow-none text-[0.65rem] font-bold uppercase">
                              Tên nhiệm vụ
                            </div>
                          </th>
                          <th className="w-[150px] px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none border-b border-[#f0f2f5]">
                            <div className="relative text-left opacity-70 bg-transparent text-[#7b809a] shadow-none text-[0.65rem] font-bold uppercase">
                              Loại nhiệm vụ
                            </div>
                          </th>
                          <th className="w-[150px] px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none border-b border-[#f0f2f5]">
                            <div className="relative text-left opacity-70 bg-transparent text-[#7b809a] shadow-none text-[0.65rem] font-bold uppercase">
                              Ngày bắt đầu
                            </div>
                          </th>
                          <th className="w-[150px] px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none border-b border-[#f0f2f5]">
                            <div className="relative text-left opacity-70 bg-transparent text-[#7b809a] shadow-none text-[0.65rem] font-bold uppercase">
                              Ngày hết hạn
                            </div>
                          </th>
                          <th className="w-[150px] px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none border-b border-[#f0f2f5]">
                            <div className="relative text-left opacity-70 bg-transparent text-[#7b809a] shadow-none text-[0.65rem] font-bold uppercase">
                              Tiến độ
                            </div>
                          </th>
                          <th className="w-[150px] px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none border-b border-[#f0f2f5]">
                            <div className="relative text-left opacity-70 bg-transparent text-[#7b809a] shadow-none text-[0.65rem] font-bold uppercase">
                              Action
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="table-row-group">
                        {users.map((item, index) => {
                          return (
                            <tr className="text-inherit table-row align-middle outline-none">
                              <td className="text-left px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none text-[0.875rem] border-b border-[#f0f2f5]">
                                <div className="inline-block w-max opacity-100 bg-transparent text-[#7b809a] shadow-none align-middle">
                                  <span className="m-0 font-roboto text-sm leading-6 tracking-[0.02857em] block opacity-100 text-[#344767] font-semibold no-underline align-baseline">
                                    {item.name}
                                  </span>
                                </div>
                              </td>
                              <td className="text-left px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none text-[0.875rem] border-b border-[#f0f2f5]">
                                <div className="inline-block w-max opacity-100 bg-transparent text-[#7b809a] shadow-none align-middle">
                                  <span className="m-0 font-roboto text-sm leading-6 tracking-[0.02857em] block opacity-100 text-[#344767] font-semibold no-underline align-baseline">
                                    {item.avata_url}
                                  </span>
                                </div>
                              </td>
                              <td className="text-left px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none text-[0.875rem] border-b border-[#f0f2f5]">
                                <div className="inline-block w-max opacity-100 bg-transparent text-[#7b809a] shadow-none align-middle">
                                  <span className="m-0 font-roboto text-sm leading-6 tracking-[0.02857em] block opacity-100 text-[#344767] font-semibold no-underline align-baseline">
                                    {item.email}
                                  </span>
                                </div>
                              </td>

                              <td className="text-left px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none text-[0.875rem] border-b border-[#f0f2f5]">
                                <div className="inline-block w-max opacity-100 bg-transparent text-[#7b809a] shadow-none align-middle">
                                  <span className="m-0 font-roboto text-sm leading-6 tracking-[0.02857em] block opacity-100 text-[#344767] font-semibold no-underline align-baseline">
                                    {item.password}
                                  </span>
                                </div>
                              </td>
                              <td className="text-left px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none text-[0.875rem] border-b border-[#f0f2f5]">
                                <div className="inline-block w-max opacity-100 bg-transparent text-[#7b809a] shadow-none align-middle">
                                  <span className="m-0 font-roboto text-sm leading-6 tracking-[0.02857em] block opacity-100 text-[#344767] font-semibold no-underline align-baseline">
                                    {item.role}
                                  </span>
                                </div>
                              </td>
                              <td className="text-left px-6 py-3 opacity-100 bg-transparent text-[#344767] shadow-none text-[0.875rem] border-b border-[#f0f2f5]">
                                <div className="inline-block w-max opacity-100 bg-transparent text-[#7b809a] shadow-none align-middle">
                                  <span className="m-0 font-roboto text-sm leading-6 tracking-[0.02857em] block opacity-100 text-[#344767] font-semibold no-underline align-baseline">
                                    Sửa
                                  </span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
