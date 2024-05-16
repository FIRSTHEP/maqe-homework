import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ForumCard from '../component/ForumCard';
import get from '../helper/api';
import './ForumPage.css';

const ForumPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [localTimezone, setLocalTimezone] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await get();
        setData(res);
        setLocalTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="forum-page">
      <div className='container'>
        <Row>
          <Col span={24}>
            <div className="forum-header">
              <h1>MAQE Forum</h1>
            </div>
          </Col>
        </Row>
        <Row className='timezone-title'>Your current time zone is: {localTimezone}</Row>
        <Row gutter={[16, 16]}>
          {error ? (
            <Col span={24}>
              <div>Error: {error}</div>
            </Col>
          ) : (
            data?.map((item, i) => (
              <Col key={item?.id} span={24}>
                <ForumCard data={item} index={i} />
              </Col>
            ))
          )}
        </Row>
      </div>
    </div>
  );
}

export default ForumPage;
