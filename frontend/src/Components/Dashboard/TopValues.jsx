import  React,{useState,useEffect} from 'react';
import { Col, Row,Progress, Space } from 'antd';
import { AntCard } from '../Style/MuiStyle';
import { http } from '../../Config/axiosConfig';
import {ProjectTwoTone} from '@ant-design/icons';
function TopValues() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get(`/project`)
      .then((res) => {
        setProjects((res.data.result).length);
      })
      .catch((err) => {
        console.log(err.messsage);
      });

    http.get(`/team`)
      .then((res) => {
        setUsers((res.data.result).length);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, []);
  
  return (
    <>
    <Row gutter={16}>
    <Col span={6}>
      <AntCard title="Total Projects" bordered={false}>
        {projects}  
      </AntCard>
    </Col>
    <Col span={6}>
      <AntCard title="Total Employees" bordered={false}>
        {users}
      </AntCard>
    </Col>
    <Col span={6}>
      <AntCard title="Completed Projects" bordered={false}>
        0
      </AntCard>
    </Col>
    <Col span={6}>
      <AntCard title="Pending Projects" bordered={false}>
       1
      </AntCard>
    </Col>
    {/* <Col span={6}>
      <AntCard title="Pending Projects" bordered={false}>
        Card content
      </AntCard>
    </Col> */}
  </Row>
  <br/>
  <hr/>
  </>

 

 
  )
}

export default TopValues