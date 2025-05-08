import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../Intercepter/axiosInstance';
import {
  Skeleton, Tag, Divider, Image, Alert, Typography, Button, Form, Input, message, Select, Modal
} from 'antd';
import {
  ClockCircleOutlined, BarsOutlined, AuditOutlined, EditOutlined, DeleteOutlined,
  SaveOutlined, CloseOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form] = Form.useForm();
  const [educationLevels, setEducationLevels] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [board, setBoardType] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      if (!id || id === 'null' || id === 'undefined') {
        setError("Course ID is missing or invalid in the URL. Please go back and try again.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        
        const [disciplinesRes, levelsRes, boardRes, courseRes] = await Promise.all([
          axiosInstance.get("/course/disciplines"),
          axiosInstance.get("/college/level"),
          axiosInstance.get("/board"),
          axiosInstance.get(`/course/${id}`)
        ]);

       
        const disciplinesData = disciplinesRes.data.status ? disciplinesRes.data.data : [];
        const levelsData = levelsRes.data.status ? levelsRes.data.data : [];
        const boardDataRaw = boardRes.data?.data?.content;
        const boardData = boardRes.data.status && Array.isArray(boardDataRaw) ? boardDataRaw : [];

        const course = courseRes.data.data?.course;
        if (!course) {
          setError("Course not found.");
          return;
        }

        setDisciplines(disciplinesData);
        setEducationLevels(levelsData);
        setBoardType(boardData);
        setCourseData(course);

        form.setFieldsValue({
          name: course.name,
          description: course.description,
          duration: course.duration,
          level: course.level,
          board: Number(course.board),
          disciplines: course.disciplines
        });
      } catch (err) {
        setError(err.response?.data?.error?.details );
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [id, form]);

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        ...values,
        image: courseData.image
      };

      await axiosInstance.put(`/course/${id}`, payload);
      message.success('Course updated successfully');
      setEditing(false);
      navigate(`/course-list`);
    } catch (err) {
      message.error(err.response?.data?.message || 'Failed to update course');
    }
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/course/${id}`);
      message.success('Course deleted successfully');
      navigate('/course-list');
    } catch (err) {
      message.error(err.response?.data?.message || 'Failed to delete course');
    }
  };

  const confirmDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this course?',
      onOk: handleDelete,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
    });
  };


  if (loading) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <Skeleton active paragraph={{ rows: 6 }} />
        <Divider />
        <Skeleton.Image active className="w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <Alert message="Error" description={error} type="error" showIcon closable className="mb-6" />
        <Button type="primary" onClick={() => navigate('/course-list')}>
          Back to Course List
        </Button>
      </div>
    );
  }

  
  if (!courseData) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center">
        <Alert
          message="No Course Found"
          description="The requested course could not be found."
          type="warning"
          showIcon
        />
      </div>
    );
  }

  const course = courseData;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-xl mt-20 overflow-hidden border border-gray-300">
      <div className="flex justify-between   items-center mb-4">
        <Title level={2}>{editing ? 'Edit Course' : course.name}</Title>
        {!editing ? (
          <div className="flex gap-2 ">
            <Button type="primary" icon={<EditOutlined />} onClick={() => setEditing(true)}>
              Edit
            </Button>
            <Button danger icon={<DeleteOutlined />} onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button type="primary" icon={<SaveOutlined />} onClick={handleUpdate}>
              Update
            </Button>
            <Button icon={<CloseOutlined />} onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </div>
        )}
      </div>

      <div className="md:flex">
        {course.image && (
          <div className="md:w-1/3 p-4">
            <Image
              src={course.image}
              alt={course.name}
              className="rounded-lg object-cover"
              preview={false}
            />
          </div>
        )}

        <div className={`p-6 ${course.image ? 'md:w-2/3' : 'w-full'}`}>
          {editing ? (
            <Form form={form} layout="vertical">
              <Form.Item
                name="name"
                label="Course Name"
                rules={[{ required: true, message: 'Please input course name' }]}>
                <Input />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: 'Please input course description' }]}>
                <TextArea rows={6} />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Form.Item
                  name="duration"
                  label="Duration"
                  rules={[{ required: true, message: 'Please input duration' }]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  name="level"
                  label="Level"
                  rules={[{ required: true, message: 'Please select level'}]}>
                  <Select placeholder="Select level">
                    {educationLevels.map((level, index) => (
                      <Option key={index} value={level}>
                        {level}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="board"
                  label="Board"
                  rules={[{ required: true, message: 'Please select board' }]}>
                  <Select placeholder="Select board">
                    {board.map((b, index) => (
                 <Option key={b.id} value={b.id}>{b.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

              <Form.Item name="disciplines" label="Disciplines">
                <Select mode="multiple" placeholder="Select disciplines">
                  {disciplines.map((discipline, index) => (
                    <Option key={index} value={discipline}>
                      {discipline}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mb-4">
                <Tag icon={<ClockCircleOutlined />} color="blue">
                  <Text strong>{course.duration}</Text>
                </Tag>
                <Tag icon={<AuditOutlined />} color="green">
                  <Text strong>{course.level}</Text>
                </Tag>
                <Tag icon={<BarsOutlined />} color="purple">
                  <Text strong>{course.board} ||</Text>
                </Tag>
              </div>

              <Divider orientation="left" plain>
                <Text strong className="text-gray-600">Course Description</Text>
              </Divider>

              <Paragraph className="text-gray-700 whitespace-pre-line">{course.description}</Paragraph>

              {course.disciplines?.length > 0 && (
                <>
                  <Divider orientation="left" plain>
                    <Text strong className="text-gray-600">Disciplines Covered</Text>
                  </Divider>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.disciplines.map((discipline, index) => (
                      <Tag key={index} color="cyan">
                        <Text strong>{discipline}</Text>
                      </Tag>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
