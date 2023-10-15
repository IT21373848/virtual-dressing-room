import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateBlogModal from '../../components/UpdateBlogModal';

const AllBlogs = () => {

    const [tdata, setTabledata] = useState([0]);
    const [blogData , changeBlogData] = useState(true)

    useEffect(()=>{
        const getAllBlog = async()=>{
            const result =await axios.get("http://localhost:8070/blog")
            if(result) {
                setTabledata(result.data);
            }
        }

        getAllBlog()
    },[blogData])

    const deleteBlog =async (id) =>{
        const result =await axios.delete(`http://localhost:8070/blog/${id}`);
        if(result){
            alert('Deleted Successfully')
            changeBlogData(false)
        }
    }
    const updateBlog = ()=>{


    }
    

    return (
        <div>
            <h1>All Blogs</h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Blog Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Blog Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Blog Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tdata.map((el) => (
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {el._id}
                                    </th>
                                    <td class="px-6 py-4">
                                        {el.title}
                                    </td>
                                    <td class="px-6 py-4">
                                        {el.description}
                                    </td>
                                    <td class="px-6 py-4">
                                        {el.createdAt}
                                    </td>
                                    <td class="px-6 py-4">
                                     <UpdateBlogModal blog={el}/>
                                        <button onClick={() => deleteBlog(el._id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AllBlogs