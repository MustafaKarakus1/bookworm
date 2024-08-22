import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {

    return (
    <div className='flex items-center justify-center h-screen bg-hero-pattern p-4'>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-6 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
            <h1 className='text-center mb-6 text-white font-bold text-3xl'>Register</h1>

          <Form.Item className=''
            label="E-Mail"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your e-mail!',
              },
            ]}
          >
          <Input className='rounded-full' placeholder='E-Mail' />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password className='rounded-full' placeholder='Password' />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password className='rounded-full' placeholder='Confirm Password' />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <div className='flex items-center justify-between pb-2'>
                <Checkbox className='text-white'>Remember Me</Checkbox>
                <a href="/" className='text-white hover:underline'>Sign In!</a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className='w-full rounded-full'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    );
}

export default Login;
