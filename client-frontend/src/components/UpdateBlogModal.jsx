import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Form, Input, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
const UpdateBlogModal = ({blog}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  
  const showModal = () => {
    setOpen(true);
  };

  const handleSubmit = async (values)=>{
    console.log(values);
    try {
        const result = await axios.put(`http://localhost:8070/blog/${blog._id}`, values);
        if(result){
            alert('Updated Success!');
        }
    } catch (error) {
        
    }
    handleOk()
  }
  const handleOk = () => {

    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update Blog
      </Button>
      <Modal
        title={blog.title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
    <Form
      name="blogForm"
      onFinish={handleSubmit}
      initialValues={blog}
    >
      <Form.Item
        name="_id"
        label="ID"
      >
        <Input disabled />
      </Form.Item>
      
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Please enter the title' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please enter the description' }]}
      >
        <Input.TextArea />
      </Form.Item>
      
      <Form.Item
        name="image"
        label="Image"
      >
        <Upload 
          customRequest={() => {}} // You can handle file uploads here
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className='bg-blue-500' onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};
export default UpdateBlogModal;